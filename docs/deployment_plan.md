# Deployment Plan: Emiliano Herrera Portfolio

This plan outlines the production-ready deployment strategy for the portfolio website.

## Task 1: Deployment Strategies

### 1. Managed Platform (Vercel) - **Recommended**
- **Pros**: Zero-config Next.js optimization, edge distribution, automatic SSL, easy previews.
- **Cons**: Vendor lock-in (minor), potential costs for high traffic.
- **When to choose**: For maximum speed and minimal maintenance.
- **Complexity**: Low.

### 2. Container-based Deployment (Docker + VPS)
- **Pros**: Full control, platform-independent, costs fixed by VPS price.
- **Cons**: Manual security management, SSL setup needed, more maintenance.
- **When to choose**: If you want complete control or specific infrastructure requirements.
- **Complexity**: Medium/High.

---

## Task 2: Recommended Approach

**Recommendation**: **Vercel** for the production live site, with **Docker** for local development and CI verification.
- **Justification**: Vercel is the creator of Next.js; it provides the best out-of-the-box performance (ISR, Edge Middleware, optimized image serving) with zero operational overhead.

---

## Task 3: Step-by-Step Instructions (Vercel)

### 1. Prerequisites
- GitHub/GitLab/Bitbucket account.
- Vercel account.

### 2. Deployment Steps
1. Push your code to a GitHub repository.
2. Login to [Vercel](https://vercel.com).
3. Click **"Add New Project"**.
4. Import your repository.
5. Ensure the framework is detected as **Next.js**.
6. Click **"Deploy"**.

### 3. Environment Variables
- In Vercel Project Settings > Environment Variables, add any secrets (if applicable).

### 4. Domain & SSL
- Go to Settings > Domains.
- Add your domain (e.g., `dnqxxt.xyz`).
- Vercel will automatically provision a Let's Encrypt SSL certificate.

---

## Task 4: Docker Deployment Guide (Self-Hosted)

If deploying to a VPS (e.g., Ubuntu):

### 1. NGINX Reverse Proxy Config
Create `nginx/default.conf`:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 2. Execution Commands
```bash
# 1. Build the image
docker build -t portfolio-prod .

# 2. Run the container (non-root)
docker run -d \
  --name portfolio-prod \
  --restart always \
  -p 3000:3000 \
  portfolio-prod
```

---

## Task 5: CI/CD Pipeline (GitHub Actions)

Create `.github/workflows/deploy.yml`:
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
```

---

## Task 6: Production Checklist
- [ ] App loads on HTTPS.
- [ ] No 404s on `/projects` or `/writing`.
- [ ] KaTeX equations render correctly.
- [ ] Images are optimized (check Next/Image logs).
- [ ] Security headers are active (verify with `securityheaders.com`).

---

## Task 7: Monitoring & Maintenance
- **Error Tracking**: Integrate **Sentry** for runtime error monitoring.
- **Rollback**: Vercel offers 1-click rollbacks to previous deployments.
- **Updates**: Run `npm update` and verify via the Docker dev container before pushing to main.
