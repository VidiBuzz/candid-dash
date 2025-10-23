# Docker Setup Guide - Candid Dashboard

## Overview

This React Admin dashboard is now fully containerized with Docker. The setup includes:
- **Production build**: Multi-stage Dockerfile with Nginx
- **Development mode**: Hot-reload with Vite dev server
- **Health checks**: Automatic container monitoring
- **Security headers**: X-Frame-Options, X-Content-Type-Options, X-XSS-Protection

## Quick Start

### Production Mode (Default)
```bash
# Build and start the container
docker compose up -d candid-dash

# Access the dashboard
# Open browser: http://localhost:8081
```

### Development Mode (with hot reload)
```bash
# Start development container with volume mounting
docker compose --profile dev up -d candid-dash-dev

# Access the dev server
# Open browser: http://localhost:5173
```

## Available Commands

### Production Build
```bash
# Build the Docker image
docker compose build candid-dash

# Start the container (detached)
docker compose up -d candid-dash

# Stop the container
docker compose down

# View logs
docker logs candid-dash

# Follow logs in real-time
docker logs -f candid-dash

# Rebuild and restart
docker compose up -d --build candid-dash
```

### Development Build
```bash
# Start dev server with hot reload
docker compose --profile dev up candid-dash-dev

# Stop dev container
docker compose --profile dev down
```

### Troubleshooting
```bash
# Check container status
docker ps | grep candid-dash

# View container health
docker inspect candid-dash | grep -A 10 Health

# Access container shell
docker exec -it candid-dash sh

# Restart container
docker restart candid-dash

# Remove container and rebuild
docker compose down
docker compose up -d --build candid-dash
```

## Container Details

### Production Container
- **Base Image**: nginx:alpine (minimal, secure)
- **Port**: 8081:80 (host:container)
- **Size**: ~895KB built assets
- **Health Check**: HTTP check every 30s

### Development Container
- **Base Image**: node:20-alpine
- **Port**: 5173:5173 (Vite dev server)
- **Hot Reload**: Enabled via volume mount
- **Node Modules**: Persisted in container

## Environment Variables

The API URL is set during build time from `.env`:

```bash
# .env file
VITE_API_URL=http://localhost:3000
```

To change the API URL:
1. Update `.env` file
2. Rebuild the container: `docker compose up -d --build candid-dash`

## Port Configuration

Default ports:
- **Production**: http://localhost:8081
- **Development**: http://localhost:5173

To change ports, edit `docker-compose.yml`:
```yaml
ports:
  - "YOUR_PORT:80"  # For production
  - "YOUR_PORT:5173"  # For development
```

## Nginx Configuration

Custom configuration in `nginx.conf`:
- SPA routing support (React Router)
- Gzip compression
- Security headers
- Static asset caching (1 year)

## Multi-Stage Build

The Dockerfile uses a two-stage build:

**Stage 1 (builder)**:
- Install dependencies with `npm ci`
- Build production assets with Vite
- TypeScript compilation

**Stage 2 (production)**:
- Lightweight nginx:alpine image
- Copy only built assets (dist/)
- No source code or dev dependencies

## Current Status

✅ **Container Running**: candid-dash
✅ **Port**: 8081
✅ **Health**: Starting → Healthy
✅ **Security Headers**: Enabled
✅ **Gzip Compression**: Enabled

## Next Steps

1. **Connect to PostgREST API**: Update `VITE_API_URL` in `.env`
2. **Add Resources**: Edit `src/App.tsx` to add admin resources
3. **Deploy**: Push to container registry or Railway/Docker Hub

## Deployment Options

### Docker Hub
```bash
# Tag the image
docker tag candid-dash-candid-dash:latest yourusername/candid-dash:latest

# Push to Docker Hub
docker push yourusername/candid-dash:latest
```

### Railway
```bash
# Deploy using Dockerfile
railway up
```

### Generic Docker Host
```bash
# Save image to file
docker save candid-dash-candid-dash:latest > candid-dash.tar

# Load on remote host
docker load < candid-dash.tar
docker run -d -p 80:80 candid-dash-candid-dash:latest
```
