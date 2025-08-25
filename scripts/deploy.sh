#!/bin/bash

echo "🚀 Deploying Strapi application..."

# Stop existing containers
echo "Stopping existing containers..."
docker compose down

# Remove old images (optional)
echo "Cleaning up old images..."
docker system prune -f

# Build and start containers
echo "Building and starting containers..."
docker compose up -d --build

# Wait for database to be ready
echo "Waiting for database to be ready..."
sleep 30

# Check container status
echo "Checking container status..."
docker compose ps

# Show logs
echo "Showing recent logs..."
docker compose logs --tail=50

echo "✅ Deployment complete!"
echo "Admin panel: http://your-domain.com:1337/admin"
