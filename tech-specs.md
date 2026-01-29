# Harvest & Spice Technical Specification

## Stack

```
Frontend:    Static HTML5 + CSS3 + Vanilla JS (no framework)
Styling:     CSS custom properties (variables) for theming, no preprocessor
Forms:       Netlify Forms
Hosting:     Netlify (free tier)
Domain:      Namecheap → Netlify DNS
CMS:         None initially (add Decap CMS later if needed)
E-commerce:  None initially (add Stripe Payment Links or Snipcart later if needed)
```

## File Structure

```
/harvest-and-spice
├── index.html          # Single page site
├── styles.css          # All styles, mobile-first
├── script.js           # Minimal JS (mobile menu, smooth scroll)
├── /images             # Optimized images (WebP preferred)
├── favicon.ico
└── _redirects          # Netlify redirects (if needed)
```

## Technical Requirements

**HTML**
- Semantic markup (header, nav, main, section, footer)
- Accessible: proper heading hierarchy, alt text, ARIA where needed
- SEO meta tags (title, description, Open Graph)

**CSS**
- Mobile-first responsive design
- CSS custom properties for colors/fonts (easy theming)
- No Tailwind, no CSS framework — keep it portable and simple
- Fluid typography using clamp()
- Target: looks good at 320px through 1440px+

**JavaScript**
- Vanilla JS only, no dependencies
- Progressive enhancement (site works without JS)
- Likely needs: mobile nav toggle, smooth scroll, maybe a simple image lightbox

**Forms**
- Use Netlify Forms with `netlify` attribute
- Honeypot field for spam prevention
- Success/error states handled client-side

**Performance Targets**
- Lighthouse score: 90+ on all metrics
- Total page weight: under 500KB
- No external fonts if possible (use system font stack), or limit to one variable font

**Images**
- WebP format with JPG fallback
- Lazy loading via `loading="lazy"`
- Responsive images using srcset where appropriate

## Page Sections (Likely)

```
1. Hero (headline, subhead, CTA button)
2. About / Story
3. Services or Menu highlights
4. Testimonials (if available)
5. Contact form + location/service area
6. Footer (social links, copyright)
```

## Deployment

```bash
# Option 1: Drag and drop
# Just drag the project folder to Netlify dashboard

# Option 2: CLI
npm install -g netlify-cli
netlify deploy --prod --dir=.
```

## Future-Proofing

This structure supports easy addition of:
- Decap CMS (add /admin folder + config.yml)
- Snipcart (add script tag + data attributes)
- Additional pages (about.html, menu.html, etc.)
- Migration to Astro or 11ty if multi-page static site generator becomes useful

## What Claude Code Needs Next

1. **Content**: Copy from Relume or discovery answers (headline, about text, services, contact info)
2. **Design reference**: Figma export, screenshot, or detailed description (colors, fonts, layout)
3. **Images**: Any photos of food, logo, or placeholders to use
4. **Form fields**: What info should the contact form collect?

---

*Ready to build when design and content arrive.*
