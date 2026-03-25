# Hostinger Deployment Guide: Emiliano Herrera Portfolio

Since you have your domain in **Hostinger**, you have two excellent ways to deploy your site.

## Option 1: Hostinger VPS (Full Control)
If you have a **Hostinger VPS** plan, you can use the exact same Docker setup we built. It’s the most professional way to host it.

### 1. Initial Setup
- Access your **hPanel** in Hostinger.
- Go to **VPS** > **Manage**.
- Ensure you have **Ubuntu 22.04** or **24.04** installed.
- **SSH into your VPS**: `ssh root@[YOUR_VPS_IP]`

### 2. Deployment
Follow the **exact same steps** from the [GCP VM Deployment Guide](file:///Users/dnqxxt/Github/dnqxxt/docs/gcp_vm_deployment_guide.md):
1. Install Docker & NGINX.
2. Clone your repo: `git clone https://github.com/emilianolel/dnqxxt.git`
3. Build and Run: `docker build -t portfolio-prod . && docker run -d ...`
4. Configure NGINX and SSL (Certbot).

---

## Option 2: Point Hostinger Domain to Vercel (Fastest)
If you prefer not to manage a server, you can deploy to **Vercel** (Free/Pro) and just point your Hostinger domain there.

### 1. In Hostinger (DNS Settings)
- Go to **Domains** > **dnqxxt.xyz** > **DNS / Nameservers**.
- Add/Edit an **A Record**:
  - Name: `@`
  - Points to: `76.76.21.21` (Vercel’s IP)
  - TTL: Default
- Add/Edit a **CNAME Record**:
  - Name: `www`
  - Points to: `cname.vercel-dns.com`

### 2. In Vercel
- Go to **Settings** > **Domains**.
- Add `dnqxxt.xyz`.
- Vercel will verify the Hostinger DNS and issue your SSL automatically.

---

## Option 3: Hostinger Node.js Hosting (Shared/Cloud)
*Note: This is less flexible than Docker.*
- Hostinger's standard "Web Hosting" (Shared) has limited Node.js support.
- If you use this, you must upload the `.next`, `public`, `package.json`, and `next.config.js` files via FTP or Git integration, and manage the process via Hostinger's Node.js selector in hPanel.
- **Recommendation**: Use **Option 1 (VPS)** or **Option 2 (Vercel)** for better performance and stability with Next.js.

## DNS Verification
Once you update your DNS in Hostinger, it might take a few minutes to propagate. You can check it here:
`https://whatsmydns.net/#A/dnqxxt.xyz`
