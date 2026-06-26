# She Wanders ✈ — Personal Travel & Lifestyle Website

A dark, animated personal website for a solo traveller, fashion blogger, cloud engineer, model, and motivational speaker. Built with pure HTML, CSS, and vanilla JavaScript — no frameworks, no build tools.

---

## 📁 Project Structure

```
she-wanders/
├── index.html                  ← Main page
├── styles.css                  ← All styles
├── script.js                   ← Interactivity (photo tooltips, nav highlight)
├── README.md                   ← This file
└── photos/
    ├── countries/              ← Hover-preview photos for country tags
    │   ├── france.jpg
    │   ├── japan.jpg
    │   ├── bali.jpg
    │   ├── uk.jpg
    │   ├── australia.jpg
    │   ├── newzealand.jpg
    │   ├── india.jpg
    │   ├── vietnam.jpg
    │   ├── italy.jpg
    │   ├── spain.jpg
    │   ├── netherlands.jpg
    │   ├── germany.jpg
    │   ├── portugal.jpg
    │   ├── greece.jpg
    │   ├── thailand.jpg
    │   ├── singapore.jpg
    │   ├── maldives.jpg
    │   ├── switzerland.jpg
    │   └── austria.jpg
    └── destinations/           ← Full background photos for travel cards
        ├── paris.jpg
        ├── tokyo.jpg
        ├── bali.jpg
        ├── london.jpg
        ├── sydney.jpg
        ├── india.jpg
        ├── vietnam.jpg
        ├── amsterdam.jpg
        ├── newzealand.jpg
        └── barcelona.jpg
```

---

## 🖼️ How to Add Your Photos

### Country Tags (hover preview)

In `index.html`, each country tag already has a `data-photo` attribute pointing to a file in `photos/countries/`. Just drop your `.jpg` (or `.png`, `.webp`) into that folder with the matching filename.

```html
<!-- Already in index.html — just add the photo file -->
<span class="country-tag highlight"
      data-photo="photos/countries/france.jpg">🇫🇷 France</span>
```

**Tip:** Aim for landscape images around **400×250px**, compressed under **100KB**. Use [squoosh.app](https://squoosh.app) to resize and compress for free.

---

### Destination Cards (full background)

Each travel card has a `data-photo` attribute on its `.dest-bg` div. Drop your photo in `photos/destinations/` with the matching filename. The coloured gradient stays as a fallback if the image is missing.

```html
<!-- Already in index.html — just add the photo file -->
<div class="dest-bg bg-paris"
     data-photo="photos/destinations/paris.jpg">🗼</div>
```

**Tip:** Portrait images around **600×800px** work best for these cards. Compress to under **200KB** each.

---

## 🚀 Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `she-wanders` or `yourusername.github.io`).
2. Upload all files — including the `photos/` folder — to the repository.
3. Go to **Settings → Pages** in your repo.
4. Under **Source**, select `main` branch and `/ (root)`.
5. Click **Save**. Your site will be live at:
   - `https://yourusername.github.io/she-wanders/` (project repo), or
   - `https://yourusername.github.io/` (if repo is named `yourusername.github.io`)

---

## ✏️ Customisation Checklist

- [ ] Replace `#` in the social buttons with your actual Instagram, LinkedIn, YouTube, Blog URLs
- [ ] Add photos to `photos/countries/` (one per country tag)
- [ ] Add photos to `photos/destinations/` (one per travel card)
- [ ] Update your name/tagline in the hero section of `index.html`
- [ ] Update the stat numbers (36+ countries, 5 continents, etc.) if needed

---

## 🛠️ Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, grid, animations, pseudo-element tooltips
- **Vanilla JS** — photo tooltip wiring, scroll-spy nav highlight
- **Google Fonts** — Playfair Display, Inter, Dancing Script, Space Mono

No npm, no build step. Just open `index.html` in a browser (via a local server for photos to load — see below).

### Local testing

```bash
# Python (built-in, no install needed)
python3 -m http.server 8080
# then open http://localhost:8080
```

Or use the **Live Server** extension in VS Code.

---

*Crafted with wanderlust & ambition ✈*
