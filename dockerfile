FROM node:20-alpine

WORKDIR /app

# Copy package.json
COPY package.json ./

# Install dependencies
RUN npm install --production

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 1337

# Start the application
CMD ["npm", "start"]