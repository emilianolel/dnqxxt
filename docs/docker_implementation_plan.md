# Docker Containerization Strategy

This plan outlines the production-ready containerization of the portfolio website.

## Strategy Highlights

- **Multi-Stage Build**: Separates dependency installation, building, and runtime to minimize image size (~100MB vs ~1GB).
- **Standalone Output**: Leverages Next.js `output: "standalone"` to bundle only the necessary files for production.
- **Security**: Runs the application as a non-root `nextjs` user.
- **Dev/Prod Parity**: Provides a `docker-compose.yml` with separate profiles for local development (hot-reload) and production testing.

## Files to Create

### [NEW] [.dockerignore](file:///Users/dnqxxt/Github/dnqxxt/.dockerignore)
Excludes `node_modules`, `.next`, and other build artifacts to speed up builds and reduce image size.

### [NEW] [Dockerfile](file:///Users/dnqxxt/Github/dnqxxt/Dockerfile)
- **Base**: `node:20-alpine` for smallest footprint.
- **Stages**: `deps` -> `builder` -> `runner`.

### [NEW] [docker-compose.yml](file:///Users/dnqxxt/Github/dnqxxt/docker-compose.yml)
Orchestrates the build and run commands for both developer and production environments.

## Verification Plan

### Automated Tests
- `docker build -t portfolio-prod .`
- `docker run -p 3000:3000 portfolio-prod`

### Manual Verification
- Access `localhost:3000` from the container to verify the app is served correctly.
- Check image size with `docker images`.
