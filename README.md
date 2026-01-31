# Harvest & Spice Website

Catering website for Harvest & Spice, built with Eleventy and editable through a browser-based CMS.

**Live site:** https://harvestandspice.com
**CMS admin:** https://harvestandspice.com/admin/

## How It Works

The site is a static site generator ([Eleventy](https://www.11ty.dev/)) with a headless CMS ([Decap CMS](https://decapcms.org/), formerly Netlify CMS). Content lives in YAML data files. When someone edits content through the CMS, it commits the changes to GitHub, which triggers Netlify to rebuild and deploy the site.

```
CMS edit --> GitHub commit --> Netlify build --> Live site updated
```

## Editing Content (CMS)

Go to https://harvestandspice.com/admin/ and log in with your Netlify Identity credentials.

From there you can edit:
- **Site Settings** -- Business name, contact info, tagline
- **Homepage** -- Hero, features, how it works, testimonials, gallery
- **About Page** -- Story, values, testimonials
- **Services Page** -- Service descriptions, testimonials
- **Menus Page** -- Sample menus, dietary info

Changes publish automatically after saving.

## Access & Accounts

**GitHub repo** -- Owned by the client. Developers are added as GitHub collaborators.

**Netlify project** -- Owned by the client. Connected to the GitHub repo. Handles builds, hosting, forms, and identity.

**Netlify Identity** -- Separate from Netlify project access. This is the login system for the CMS. Identity users can only edit content through the admin panel -- they cannot access Netlify settings, deploys, or billing. Both the client and developers can have their own Identity logins.

To invite a new CMS user: Netlify dashboard > Site settings > Identity > Invite users.

## Project Structure

```
.eleventy.js          # Eleventy config (build settings, YAML support)
netlify.toml          # Netlify deploy config
package.json          # Dependencies (just Eleventy)
styles.css            # Stylesheet
script.js             # Client-side JS
admin/
  config.yml          # CMS field definitions
  index.html          # CMS admin page
src/
  _data/              # Content (YAML files edited via CMS)
    site.yml          #   Global settings, contact info
    home.yml          #   Homepage content
    about.yml         #   About page content
    services.yml      #   Services page content
    menus.yml         #   Menus page content
  _includes/
    base.njk          # Base HTML layout (header, footer, nav)
  index.njk           # Homepage template
  about.njk           # About page template
  services.njk        # Services page template
  menus.njk           # Menus page template
  images/             # Uploaded images
```

## Local Development

```sh
npm install
npm start
```

This runs Eleventy's dev server with live reload at `http://localhost:8080`.

To build without serving:

```sh
npm run build
```

Output goes to `_site/`.

## How Templates Work

Each page template (e.g. `src/index.njk`) pulls content from its corresponding data file (e.g. `src/_data/home.yml`) using Nunjucks syntax like `{{ home.hero.title }}`. Global data like the business name comes from `site.yml` and is accessed as `{{ site.name }}`.

The CMS field definitions in `admin/config.yml` mirror the structure of these YAML files. When you add a field to the CMS, you also need to add the matching template code to render it.

## Domain & DNS

The domain `harvestandspice.com` is registered at **Namecheap**. DNS is configured in Namecheap's Advanced DNS panel to point traffic to Netlify.

**`harvestandspice.com` (the bare domain) is the primary domain** in Netlify. Visitors to `www.harvestandspice.com` are automatically redirected to `harvestandspice.com`.

### DNS records (configured in Namecheap)

- **ALIAS record** for `@` → `apex-loadbalancer.netlify.com.` -- This is the main record that makes the site work. An ALIAS record is like a CNAME but for the root domain (normal CNAMEs aren't allowed on root domains -- that's a DNS rule). It tells Namecheap to resolve `apex-loadbalancer.netlify.com` to an IP address and serve that IP when someone visits `harvestandspice.com`.

- **CNAME record** for `www` → `harvest-and-spice.netlify.app.` -- This makes `www.harvestandspice.com` work. A CNAME says "this subdomain is really another name for that hostname." Netlify then redirects www visitors to the primary bare domain.

- **TXT record** for `@` -- SPF record for email forwarding. Managed automatically by Namecheap.

### Where to manage DNS

Namecheap > Domain List > harvestandspice.com > Advanced DNS.

### Note on CDN performance

With external DNS (not Netlify DNS), the ALIAS record for the bare domain routes through Netlify's load balancer (`apex-loadbalancer.netlify.com`), which provides basic load balancing but not full geographic CDN edge routing. A CNAME (used by the www subdomain) does get full CDN routing. For a site of this scale, this makes no practical difference. If CDN edge performance ever matters, the options are switching the primary domain to www or migrating to Netlify DNS.

## Deployment

Netlify automatically builds and deploys on every push to `main`. The build command and publish directory are configured in `netlify.toml`.

Contact form submissions are handled by Netlify Forms (the `data-netlify="true"` attribute on the form). Submissions appear in the Netlify dashboard under Forms.
