# Use official Node.js 20 Alpine image for smaller size
FROM node:20-alpine

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Create app directory and set ownership
RUN mkdir -p /app && chown -R node:node /app

# Set working directory
WORKDIR /app

# Switch to node user
USER node

# Copy package files
COPY --chown=node:node package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy application code
COPY --chown=node:node . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 1337

# Use dumb-init to handle signals properly
ENTRYPOINT ["dumb-init", "--"]

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node healthcheck.js

# Start the application
CMD ["npm", "start"]
