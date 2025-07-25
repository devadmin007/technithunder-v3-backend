# Dockerfile
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the project
COPY . .

# Build the Strapi admin panel
ENV NODE_ENV=production
RUN npm install --omit=dev

# Expose port and start the app
EXPOSE 1337
CMD ["npm", "start"]