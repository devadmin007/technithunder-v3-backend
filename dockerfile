# Dockerfile
FROM node:18-alpine

# Create app directory
WORKDIR /app

ENV NODE_ENV=production

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# Build the Strapi admin panel
RUN npm install

# Expose port and start the app
EXPOSE 1337
CMD ["npm", "start"]