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
RUN npm run build

# Expose port and start the app
EXPOSE 1337
CMD ["npm", "start"]