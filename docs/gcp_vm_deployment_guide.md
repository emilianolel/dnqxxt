# GCP VM Deployment Guide: Emiliano Herrera Portfolio

This guide provides the exact commands for a professional deployment on a **Google Cloud VM (Ubuntu)** using the existing Dockerized codebase.

## Task 1: VM Initial Setup

### 1. SSH into the VM (from your local machine)
```bash
gcloud compute ssh [VM_NAME] --zone [ZONE] --project [PROJECT_ID]
```

### 2. Update & Install Dependencies
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y git nginx ufw certbot python3-certbot-nginx
```

### 3. Install Docker
```bash
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### 4. Non-sudo Docker Access
```bash
sudo usermod -aG docker $USER
# Logout and login again for this to take effect
```

---

## Task 2: Application Deployment (GitHub Option)

### 1. Clone & Build
```bash
git clone https://github.com/emilianolel/dnqxxt.git
cd dnqxxt

# Build the production image
docker build -t portfolio-prod .

# Run the container
docker run -d \
  --name portfolio-app \
  --restart always \
  -p 3000:3000 \
  portfolio-prod
```

---

## Task 3: NGINX Reverse Proxy

### 1. Configure the Site
Create `/etc/nginx/sites-available/dnqxxt.xyz`:
```nginx
server {
    listen 80;
    server_name dnqxxt.xyz www.dnqxxt.xyz [VM_STATIC_IP];

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

### 2. Enable & Test
```bash
sudo ln -s /etc/nginx/sites-available/dnqxxt.xyz /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## Task 4: Domain + DNS
- Go to your Domain Registrar (Google Domains, Namecheap, etc.).
- Create an **A Record**:
  - Host: `@`
  - Value: `[VM_STATIC_IP]`
- Create a **CNAME Record**:
  - Host: `www`
  - Value: `dnqxxt.xyz`
- Verify DNS with `dig dnqxxt.xyz` or `ping dnqxxt.xyz`.

---

## Task 5: HTTPS with Certbot

### 1. Generate SSL
```bash
sudo certbot --nginx -d dnqxxt.xyz -d www.dnqxxt.xyz
```
- Select option `2`: Redirect (Redirects HTTP to HTTPS automatically).

### 2. Auto-Renewal
Certbot adds a cron job automatically. Test it with:
```bash
sudo certbot renew --dry-run
```

---

## Task 6: Production Hardening

### 1. Firewall (UFW)
```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh     # Critical: Don't lock yourself out
sudo ufw allow http
sudo ufw allow https
sudo ufw enable
```

### 2. Monitoring
Check logs with:
```bash
docker logs -f portfolio-app
```

---

## Task 7: Deployment Workflow (Update Process)

To deploy updates:
```bash
cd dnqxxt
git pull origin main
docker build -t portfolio-prod .
docker stop portfolio-app && docker rm portfolio-app
docker run -d --name portfolio-app --restart always -p 3000:3000 portfolio-prod
```

---

## Task 8: Validation Checklist
- [ ] Site loads via `https://dnqxxt.xyz`.
- [ ] SSL certificate is valid and active.
- [ ] All routes (`/projects`, `/writing`) function correctly.
- [ ] Container auto-restarts on VM reboot.
- [ ] NGINX proxy correctly forwards traffic and sets headers.
