# Vercel E2E Deployment Plan: Emiliano Herrera Portfolio

This is the **fastest, most secure, and 100% free** (Hobby plan) way to host your portfolio with zero maintenance.

## Phase 1: Preparation (Done ✓)
- Repository is on GitHub: [emilianolel/dnqxxt](https://github.com/emilianolel/dnqxxt).
- Domain is active in Hostinger: `dnqxxt.xyz`.

## Phase 2: Vercel Setup (Approx. 2 mins)
1. **Sign Up**: Go to [vercel.com](https://vercel.com) and login with your **GitHub** account.
2. **Import Project**: 
   - Click **"Add New"** > **"Project"**.
   - Select the `dnqxxt` repository.
3. **Configure Project**:
   - Vercel will automatically detect **Next.js**.
   - **Environment Variables**: If you add API keys later, put them here.
4. **Deploy**: Click **"Deploy"**. Your site will be live at a `.vercel.app` URL immediately.

---

## Phase 3: Connect Hostinger Domain (.xyz)

### 1. In Vercel (Add Domain)
- Go to your Project > **Settings** > **Domains**.
- Type `dnqxxt.xyz` and click **Add**.
- Select the option to add both `dnqxxt.xyz` and `www.dnqxxt.xyz`.

### 2. In Hostinger (DNS Setup)
Login to Hostinger hPanel > **Domains** > **DNS / Nameservers**:
- **Record A**:
  - Name: `@`
  - Value: `76.76.21.21`
- **Record CNAME**:
  - Name: `www`
  - Value: `cname.vercel-dns.com`

*Wait 5-10 mins for DNS propagation.*

---

## Phase 4: Production Checklist
- [ ] **SSL (HTTPS)**: Vercel will auto-generate a valid certificate once DNS is verified.
- [ ] **Performance**: Vercel will use its Edge Network to serve your code from the fastest location.
- [ ] **Preview Deployments**: Every time you push a change to a new branch, Vercel gives you a "Preview" link to test before merging to `main`.
- [ ] **Analytics**: (Optional) Enable Vercel Analytics for simple traffic monitoring.

## Why this is the best plan:
- **Zero Cost**: The Hobby plan is free forever for personal portfolios.
- **Zero Maintenance**: No servers to patch, no Linux to manage.
- **Max Performance**: Uses Global Edge Caching and Next.js Image Optimization natively.

---

## Next Steps:
1. Login to Vercel and import the repo.
2. Update the DNS records in Hostinger.
3. Done! Your site is live securely at `https://dnqxxt.xyz`.
