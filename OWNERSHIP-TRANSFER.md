# Transferring Site Ownership to Client

This guide explains how to give your client (the site owner) full control over their website without depending on your accounts.

## What They'll Own

After transfer, the client will have:
- GitHub account with the repository
- Netlify account with the deployed site
- Full ability to edit, deploy, and manage
- Access to form submissions
- Ability to invite CMS editors

---

## Option A: Fresh Setup Under Client's Accounts (Recommended)

This is the cleanest approach—everything is in their name from the start.

### Step 1: Client Creates Accounts

Have your client create:

1. **GitHub account**
   - Go to https://github.com/signup
   - Use their business email (harvestandspice@gmail.com)
   - Username suggestion: `harvestandspice` or `harvest-and-spice`

2. **Netlify account**
   - Go to https://app.netlify.com/signup
   - **Sign up with GitHub** (the account they just created)
   - This links the accounts automatically

### Step 2: Transfer the GitHub Repository

**From your GitHub account:**

1. Go to https://github.com/meninoebom/harvest-and-spice
2. **Settings** → **General** → scroll to "Danger Zone"
3. Click **"Transfer ownership"**
4. Enter the client's GitHub username
5. Confirm the transfer

**Client accepts:**
1. They'll receive an email to accept the transfer
2. Click the link to accept
3. Repo is now at: `github.com/[their-username]/harvest-and-spice`

### Step 3: Client Connects to Netlify

**Client does this (or you do it logged into their account):**

1. Log into Netlify with their GitHub account
2. **"Add new site"** → **"Import an existing project"**
3. Select GitHub → Choose `harvest-and-spice` repo
4. Leave build settings empty
5. Click **"Deploy site"**

### Step 4: Enable CMS

Still in client's Netlify account:

1. **Site settings** → **Identity** → **Enable Identity**
2. **Registration** → **"Invite only"**
3. **Services** → **Git Gateway** → **Enable**
4. **Identity** tab → **Invite users**
   - Invite client's email
   - Invite any other editors

### Step 5: Update CMS Config

Update the repo to point to their site URL:

```yaml
# admin/config.yml
site_url: https://harvestandspice.com  # or their Netlify URL
```

### Step 6: Set Up Custom Domain

1. In Netlify: **Domain settings** → **Add custom domain**
2. In Namecheap (or their registrar):
   - Point DNS to Netlify
   - Or transfer domain to their own Namecheap account

---

## Option B: Transfer Existing Netlify Site

If you've already set up Netlify under your account:

### Transfer Netlify Site

1. In your Netlify account, go to the site
2. **Site settings** → **General** → **Transfer site**
3. Enter client's Netlify team name or email
4. They accept the transfer

### Then Transfer GitHub Repo

Follow Step 2 from Option A above.

---

## Option C: Add Client as Collaborator (Shared Control)

If you want to stay involved but give them access:

### GitHub Collaborator
1. Repo **Settings** → **Collaborators**
2. Add client's GitHub username
3. They can now push changes

### Netlify Team Member
1. **Team settings** → **Members**
2. Invite client's email as "Owner"
3. They have full control alongside you

---

## Post-Transfer Checklist

After transfer, verify everything works:

- [ ] Client can log into GitHub
- [ ] Client can log into Netlify
- [ ] Client can access site dashboard
- [ ] Site deploys correctly
- [ ] Client can log into CMS (/admin)
- [ ] Client can edit and publish content
- [ ] Form submissions arrive at their email
- [ ] Custom domain works (if set up)

---

## What the Client Needs to Know

### Day-to-Day Content Editing

1. Go to `https://[site].netlify.app/admin`
2. Log in with email
3. Edit content → Click "Publish"
4. Changes are live in ~1 minute

### Checking Form Submissions

1. Log into Netlify
2. Go to **Forms** tab
3. Click on "contact" form
4. View all submissions

### If Something Breaks

- **Site down:** Check Netlify status at https://netlifystatus.com
- **Deploy failed:** Check Deploys tab in Netlify for error
- **Need code changes:** Contact developer (you)

---

## Ongoing Support Options

Consider setting expectations:

| Support Level | What's Included |
|--------------|-----------------|
| **Self-service** | Client manages everything, you're done |
| **On-call** | Client manages day-to-day, calls you for issues |
| **Retainer** | Monthly fee for ongoing updates and support |

---

## Account Recovery

Make sure client has:

- [ ] GitHub password saved securely
- [ ] Netlify password saved (or GitHub login)
- [ ] Recovery email set up on both accounts
- [ ] 2FA backup codes saved (if enabled)

**Recommendation:** Have them use a password manager like 1Password or Bitwarden.
