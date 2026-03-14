# Harvest & Spice — Content Management Guide

**Live site:** [harvestandspice.com](https://harvestandspice.com)
**CMS admin:** [harvestandspice.com/admin/](https://harvestandspice.com/admin/)

---

## How Your Website Works

Your website is a static site — it loads fast and is very secure. All your content (text, images, menu items, testimonials) lives in simple data files. You edit them through a browser-based CMS. No coding required.

**Three things to know:**
1. You edit content at [harvestandspice.com/admin/](https://harvestandspice.com/admin/)
2. Changes auto-publish in about 30 seconds
3. Contact form submissions go to your [Netlify dashboard](https://app.netlify.com)

---

## Logging Into the CMS

1. Go to [harvestandspice.com/admin/](https://harvestandspice.com/admin/)
2. Click **Login with Netlify Identity**
3. Enter your email and password
4. You'll see the content editor with sections for each page

If you've forgotten your password, click "Forgot password" on the login screen.

---

## What You Can Edit

The CMS has **5 content collections** in the left sidebar:

### Settings (Global)

Controls info that appears across the entire site (header, footer, etc.):
- Business name & tagline
- Email, phone, address
- Service area
- Instagram URL

### Homepage

- **Hero** — Main banner title, subtitle, background image, and call-to-action button
- **Features** — The 3 cards (Retreat Expertise, Seasonal Menus, Dietary Care)
- **How It Works** — The 3-step process (Inquiry → Menu Design → Event Day)
- **Testimonials** — 3 customer quotes
- **Gallery** — 3 food images
- **Contact Section** — Heading and intro text above the contact form

### About Page

- **Hero** — Banner image and heading
- **Story** — Your background and journey
- **Food Philosophy** — Moroccan-inspired, California-fresh description
- **Why Retreats** — Your positioning
- **Values** — The 4 value cards (Seasonal & Local, Inclusive by Design, etc.)
- **Testimonial** — Single featured quote
- **CTA** — Bottom call-to-action button text and link

### Services Page

- **Hero** — Banner
- **Service Cards** — Overview of all 4 services
- **Detailed Sections** — Each service (Retreat, Corporate, Private Events, Drop-Off) with descriptions, images, and details like guest count, lead time, and pricing
- **Add-Ons** — Dessert, Beverage, Service extras
- **FAQ** — 4 frequently asked questions
- **Testimonial & CTA**

### Menus Page

- **Hero** — Banner
- **Menu Types** — Overview cards (Dinner, Breakfast, Boxed Lunch)
- **Detailed Menus** — Full item lists for each menu type with optional notes
- **Dietary Section** — Accessibility statement
- **Gallery, Testimonial & CTA**

---

## How to Make Common Updates

### Change text on any page

1. Go to [harvestandspice.com/admin/](https://harvestandspice.com/admin/)
2. Click the page in the left sidebar
3. Find the field you want to edit
4. Change the text
5. Click **Publish** (top right)
6. Wait ~30 seconds, then refresh the live site to see your change

### Update a menu item

1. Go to CMS → **Menus**
2. Scroll to the menu section (Dinner, Breakfast, or Boxed Lunch)
3. Edit, add, or remove items from the list
4. Click **Publish**

### Add or change a testimonial

1. Go to CMS → the relevant page (Homepage, Services, etc.)
2. Find the Testimonials section
3. Edit the quote text and attribution
4. Click **Publish**

### Update contact info

1. Go to CMS → **Settings**
2. Edit the email, phone, address, or Instagram URL
3. Click **Publish** — this updates everywhere the info appears (header, footer, contact section)

### Replace an image

1. In the CMS, find the image field you want to change
2. Click the image to open the media picker
3. Upload a new image or choose an existing one
4. Click **Publish**

**Image tips:**
- Use JPG format for photos
- Keep images under 1MB for fast loading
- Landscape orientation works best for hero/banner images

---

## Checking Contact Form Submissions

When someone fills out the contact form on your site:

1. Go to [app.netlify.com](https://app.netlify.com)
2. Log in and select your Harvest & Spice site
3. Click **Forms** in the navigation
4. Click **contact** to see all submissions

You also get email notifications when forms are submitted. If you're not receiving them, check your spam folder — they come from `formresponses@netlify.com`.

---

## Important Links

| What | Link |
|------|------|
| Live website | [harvestandspice.com](https://harvestandspice.com) |
| CMS (edit content) | [harvestandspice.com/admin/](https://harvestandspice.com/admin/) |
| Netlify dashboard | [app.netlify.com](https://app.netlify.com) |
| Form submissions | Netlify dashboard → Forms → contact |

---

## Good to Know

- **Changes are instant-ish.** After you hit Publish, the site rebuilds automatically. Give it about 30 seconds.
- **You can't break the site** by editing text or swapping images in the CMS. It only lets you change content, not structure.
- **The contact form has a limit** of 100 submissions per month on the free plan. This is plenty for most businesses.
- **For structural changes** (adding new pages, changing layout, adding new sections) — those require code changes. Reach out to Brandon.
