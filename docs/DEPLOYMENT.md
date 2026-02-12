# Deployment Guide

## GitHub Pages Setup (Step-by-Step)

### Method 1: GitHub Actions (Recommended)

This method auto-deploys every time you push to `main`.

**Step 1: Create the GitHub repository**
```bash
# Initialize git if not already done
git init
git add .
git commit -m "feat: initial portfolio setup"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOURUSERNAME/YOURREPO.git
git branch -M main
git push -u origin main
```

**Step 2: Enable GitHub Pages**
1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Build and deployment**, set Source to **"GitHub Actions"**
4. Save

**Step 3: Trigger a deployment**

The `.github/workflows/deploy.yml` file already handles everything. Simply push:
```bash
git push origin main
```

**Step 4: Watch the deployment**
- Go to the **Actions** tab in your repository
- You'll see the "Deploy to GitHub Pages" workflow running
- Once it's green ✅, your site is live!

**Your site URL:**
- If repo is named `YOURUSERNAME.github.io` → `https://YOURUSERNAME.github.io`
- Otherwise → `https://YOURUSERNAME.github.io/REPO-NAME`

---

### Method 2: Deploy from Branch (Simple)

1. Go to **Settings → Pages**
2. Set Source: **"Deploy from a branch"**
3. Branch: `main`, Folder: `/ (root)`
4. Click **Save**
5. Wait ~60 seconds, then visit your URL

---

## Custom Domain (Optional)

To use a custom domain like `yourname.dev`:

1. Create a file named `CNAME` in your repo root:
   ```
   yourname.dev
   ```
2. In your domain registrar's DNS settings, add:
   - `A` records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or a `CNAME` record: `www` → `YOURUSERNAME.github.io`
3. In GitHub Settings → Pages, add your custom domain
4. Enable **"Enforce HTTPS"**

---

## Local Development

```bash
# Python 3
python3 -m http.server 3000

# Node.js
npx serve .
# or
npx http-server . -p 3000

# PHP
php -S localhost:3000
```

---

## Troubleshooting

| Issue | Fix |
|---|---|
| Site shows 404 | Check that `index.html` is in the repo root |
| CSS not loading | Check file paths in `index.html` (case-sensitive on Linux) |
| GitHub Actions failing | Check the Actions tab → click the failed job for logs |
| Custom domain not working | DNS propagation can take up to 48 hours |
| Assets not updating | Hard refresh: `Ctrl+Shift+R` / `Cmd+Shift+R` |
