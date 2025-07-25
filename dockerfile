# Use official Node.js 20.11 Alpine image
FROM node:20.11-alpine

# Set working directory
WORKDIR /srv/app

# Copy package.json and package-lock.json if present
COPY package.json package-lock.json* ./

# Install dependencies with npm
# Add these lines before npm install
RUN npm config set registry https://registry.npmjs.org/
RUN npm config set strict-ssl false
RUN npm config set fetch-timeout 600000
RUN npm config set fetch-retry-mintimeout 10000
RUN npm config set fetch-retry-maxtimeout 60000
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Strapi admin UI
RUN npm run build

# Expose Strapi default port
EXPOSE 1337

# Start the Strapi server
CMD ["npm", "start"]
