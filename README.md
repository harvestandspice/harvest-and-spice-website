# Harvest & Spice Website

Catering website for Harvest & Spice, built with Eleventy and editable through a browser-based CMS.

**Live site:** https://www.harvestandspice.com
**CMS admin:** https://www.harvestandspice.com/admin/

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

The domain `harvestandspice.com` is registered at **Namecheap**. DNS records are configured in Namecheap's Advanced DNS panel to point traffic to Netlify.

Two DNS records make this work:

- **ALIAS record** for `@` (the bare domain, `harvestandspice.com`) -- Points to the Netlify site hostname. An ALIAS record is like a CNAME that works on the root domain. Normal CNAME records aren't allowed on root domains (a DNS rule), so ALIAS is the workaround. It resolves the Netlify hostname to an IP at the DNS level, so browsers can reach `harvestandspice.com` and get redirected to `www`.

- **CNAME record** for `www` -- Points to the Netlify site hostname (e.g. `your-site.netlify.app`). A CNAME says "this subdomain is really just another name for that hostname." When someone visits `www.harvestandspice.com`, their browser follows the CNAME to Netlify, which routes them to the nearest CDN edge server.

**`www.harvestandspice.com` is the primary domain.** This is intentional. When using external DNS (not Netlify DNS), the `www` subdomain must be primary to get full CDN benefits. A CNAME lets Netlify resolve to the nearest CDN edge server based on the visitor's location. The bare domain can't do this -- it resolves to a fixed IP, bypassing geographic routing. So `www` gets the CDN, and the bare domain just redirects to it. Netlify handles this redirect automatically when `www` is set as primary in site settings.

To manage DNS records: log into Namecheap > Domain List > harvestandspice.com > Advanced DNS.

## Deployment

Netlify automatically builds and deploys on every push to `main`. The build command and publish directory are configured in `netlify.toml`.

Contact form submissions are handled by Netlify Forms (the `data-netlify="true"` attribute on the form). Submissions appear in the Netlify dashboard under Forms.
