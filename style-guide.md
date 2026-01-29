.menu-overlay {
  background: rgba(255, 255, 255, 0.85);
  padding: 48px 64px;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.menu-overlay h2 {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 32px;
  margin-bottom: 32px;
}

.menu-overlay li {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  line-height: 2;
  color: #3D3D3D;
}
```

Background: large, full-bleed food image. Overlay box: white at 85% opacity, centered, with menu content inside.

### Buttons / CTAs
- Simple, understated
- Border style: `1px solid #3D3D3D`, no fill
- Or subtle fill: `background: #B5704D; color: white;`
- Padding: `12px 32px`
- All caps, letter-spacing `0.1em`
- Hover: invert or darken

### Contact Form
- Clean, minimal inputs
- Border-bottom only (no full box borders)
- Labels above or as placeholders
- Submit button matches CTA style

---

## Decorative Elements

- Thin botanical line drawings as section dividers (like the branch in the sample menu screenshot)
- Keep minimal — one or two instances, not overused
- Optional: subtle texture overlay on hero images (grain, warmth)

---

## Responsive Behavior

- **Desktop**: multi-column layouts, generous spacing
- **Tablet**: reduce columns, maintain proportions
- **Mobile**: single column, full-width images, stacked content, nav becomes hamburger menu
- Touch targets: minimum `44px`

---

## Image Requirements

For build, will need:
- Hero image (full-width, landscape, food or table setting)
- 3 gallery images (food close-ups or event shots)
- Background image for menu sections (food prep, ingredients on wood)
- Logo (SVG preferred)

*Use placeholders from Unsplash (search: "catering food", "vegetable spread", "dinner party table") until client provides assets.*

---

## Summary for Claude Code
```
Build a static HTML/CSS site with:

COLORS:
- Background: #F5F0E8 (cream), #FDFBF7 (white alt)
- Text: #3D3D3D (primary), #6B6B6B (muted)
- Accent: #B5704D (terracotta)
- Overlay: rgba(255, 255, 255, 0.85)

FONTS (Google Fonts):
- Playfair Display: headings
- Cormorant Garamond: subheads, menu items, elegant text
- Lato or Inter: nav, body, labels

KEY PATTERNS:
- Full-bleed hero image with centered text
- Nav: centered logo, split nav items, all caps, wide tracking
- Sections: generous padding (80-120px), max-width 1200px
- 3-column image gallery
- IMPORTANT: Sample menu sections use translucent white boxes 
  (rgba 255,255,255,0.85) overlaid on full-width food photography

VIBE:
- Warm, intimate, plant-forward
- Elegant but approachable
- Lots of white space
- Natural, soft photography
