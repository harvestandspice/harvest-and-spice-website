# Harvest & Spice - Site Setup & Configuration Guide

## Overview

This is a static HTML/CSS/JS website deployed on Netlify with Decap CMS for content management.

```
┌─────────────────────────────────────────────────────────────────┐
│                        ARCHITECTURE                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   [GitHub Repo] ──push──> [Netlify] ──deploy──> [Live Site]     │
│        │                      │                                  │
│        │                      ├── Netlify Forms (contact form)  │
│        │                      └── Netlify Identity (CMS login)  │
│        │                                                         │
│        └── [Decap CMS] writes content back to repo              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Components

### 1. GitHub Repository
- **URL:** https://github.com/meninoebom/harvest-and-spice
- **Purpose:** Stores all website code and content
- **Branch:** `main` (production)

### 2. Netlify Hosting
- **What it does:**
  - Automatically deploys site when GitHub repo changes
  - Handles contact form submissions (Netlify Forms)
  - Provides SSL certificate (HTTPS)
  - CDN for fast global delivery
- **Free tier includes:** 100GB bandwidth, 100 form submissions/month

### 3. Decap CMS (formerly Netlify CMS)
- **URL:** https://[your-site].netlify.app/admin
- **What it does:** Visual editor for non-technical users to update content
- **How it works:**
  - User logs in via Netlify Identity
  - Edits content in browser
  - CMS commits changes to GitHub
  - Netlify auto-deploys the update

### 4. Netlify Identity
- **What it does:** User authentication for CMS access
- **Setup:** Invite-only (you control who can edit)

---

## File Structure

```
/harvest-and-spice
├── index.html          # Home page
├── about.html          # About page
├── services.html       # Services page
├── menus.html          # Sample menus page
├── styles.css          # All styles
├── script.js           # Mobile menu, smooth scroll
├── netlify.toml        # Netlify configuration
├── _redirects          # URL redirects
├── /images             # Site images (add photos here)
├── /admin
│   ├── index.html      # CMS interface
│   └── config.yml      # CMS configuration
└── /_data
    └── contact.yml     # Editable contact info
```

---

## Configuration Files Explained

### netlify.toml
```toml
[build]
  publish = "."              # Deploy from root directory

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY" # Security headers
```

### admin/config.yml
```yaml
backend:
  name: git-gateway          # Uses Netlify Identity + Git Gateway
  branch: main               # Commits go to main branch

media_folder: "images"       # Where uploaded images go
public_folder: "/images"     # URL path for images

collections:                 # What content can be edited
  - testimonials
  - gallery
  - settings
```

---

## Netlify Setup Steps

### Initial Deployment
1. Log into Netlify (https://app.netlify.com)
2. "Add new site" → "Import an existing project"
3. Connect GitHub account
4. Select `meninoebom/harvest-and-spice` repository
5. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: (leave empty or `.`)
6. Click "Deploy site"

### Enable CMS Access
1. **Site settings** → **Identity** → **Enable Identity**
2. **Registration preferences** → Select "Invite only"
3. **Services** → **Git Gateway** → **Enable Git Gateway**
4. **Identity** tab → **Invite users** → Enter email address

### Custom Domain (Optional)
1. **Domain settings** → **Add custom domain**
2. Enter domain (e.g., harvestandspice.com)
3. Update DNS at registrar (Namecheap):
   - Add CNAME record: `www` → `[site-name].netlify.app`
   - Or use Netlify DNS (they'll provide nameservers)

### Form Notifications
1. **Forms** → **Form notifications**
2. Add email notification for new submissions
3. Submissions go to: harvestandspice@gmail.com

---

## How to Update the Site

### For developers (you):
```bash
# Edit files locally
# Then:
git add .
git commit -m "Description of changes"
git push
# Netlify auto-deploys in ~30 seconds
```

### For content editors (client):
1. Go to https://[site].netlify.app/admin
2. Log in with invited email
3. Edit testimonials, gallery, or settings
4. Click "Publish"
5. Changes go live automatically

### To add/change images:
1. Add optimized images to `/images` folder
2. Update HTML files to reference new images
3. Commit and push

---

## Accounts & Credentials Needed

| Service | What's Needed | Who Should Own It |
|---------|---------------|-------------------|
| GitHub | Account + repo ownership | Site owner |
| Netlify | Account + site ownership | Site owner |
| Domain registrar | Domain ownership | Site owner |
| Netlify Identity | User invite | Content editors |

---

## Transferring Ownership to Client

See OWNERSHIP-TRANSFER.md for detailed instructions.

---

## Troubleshooting

### Site not updating after push
- Check Netlify deploy logs (Deploys tab)
- Verify push went to `main` branch

### CMS login not working
- Verify Identity is enabled
- Check user was invited and confirmed email
- Verify Git Gateway is enabled

### Forms not submitting
- Check form has `data-netlify="true"` attribute
- Check Netlify Forms tab for submissions
- Verify honeypot field is hidden

### Images not loading
- Check file paths (case-sensitive)
- Verify images are in `/images` folder
- Check browser console for 404 errors

---

## Cost Summary

| Service | Cost |
|---------|------|
| Netlify hosting | Free (100GB bandwidth/month) |
| Netlify Forms | Free (100 submissions/month) |
| Netlify Identity | Free (5 users) |
| GitHub | Free |
| Domain | ~$12/year (via Namecheap) |

**Total: ~$12/year** (just the domain)

---

## Support Resources

- Netlify Docs: https://docs.netlify.com
- Decap CMS Docs: https://decapcms.org/docs
- GitHub Docs: https://docs.github.com
