# Harvest & Spice Website

Catering website for Harvest & Spice. Eleventy static site with Decap CMS, hosted on Netlify.

## Development Workflow

Use judgment to plan appropriately for the task:
- Simple changes: just implement directly.
- Larger changes: think through the approach before coding.
  Write a brief plan as a comment in the PR or in a scratch file,
  then implement.
- Always create a feature branch, commit with descriptive messages
  referencing the issue, and create a PR.

## Code Quality

- Run `npm run build` before committing to verify the site builds.
- Keep commits focused — one logical change per commit.

## Content Guide Maintenance

If you modify `admin/config.yml`, add/remove pages, or change the CMS setup,
update `CONTENT-GUIDE.md` to match. That file is the site owner's reference
for managing content — it must stay accurate.
