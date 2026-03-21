# ✦ Portfolio — 

> personal portfolio with modular architecture, designed for GitHub Pages deployment.

## 🌐 Live Site

**[Portfolio](https://Narendra725.github.io/narendra.engineer)**

---

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD — auto-deploys to GitHub Pages on push
│
├── assets/
│   ├── css/
│   │   ├── variables.css       # Design tokens (colors, spacing, typography)
│   │   ├── main.css            # Base styles, resets, shared components
│   │   ├── animations.css      # Keyframes, scroll reveals, transitions
│   │   ├── responsive.css      # Media queries (mobile-first)
│   │   └── components/
│   │       ├── navbar.css
│   │       ├── hero.css
│   │       ├── about.css
│   │       ├── projects.css
│   │       ├── skills.css
│   │       ├── contact.css
│   │       └── footer.css
│   │
│   ├── js/
│   │   ├── main.js             # Entry point — initializes all modules
│   │   ├── utils/
│   │   │   ├── helpers.js      # throttle, debounce, DOM utils, validation
│   │   │   └── animations.js   # IntersectionObserver, cursor, skill bars
│   │   └── components/
│   │       ├── navbar.js       # Scroll behavior, mobile menu
│   │       ├── typewriter.js   # Animated typewriter effect
│   │       ├── skills.js       # Skill percentage labels
│   │       └── contact.js      # Form validation & submission
│   │
│   ├── images/                 # Place your photos here
│   └── resume.pdf              # Your resume (linked in navbar)
│
├── docs/
│   ├── ARCHITECTURE.md         # System design decisions
│   └── DEPLOYMENT.md           # Step-by-step deployment guide
│  
│
├── index.html                  # Main entry point
├── .gitignore
├── .editorconfig
├── .prettierrc
├── .eslintrc.json
└── README.md
```

---

## 🚀 Quick Start

### 1. Clone or fork this repository

```bash
git clone https://Narendra725.github.io/narendra.engineer.git
cd YOURREPO
```

### 2. Customize your content

Edit `index.html` — search for `Your Name`, `your@email.com`, `yourusername` and replace with your info.


### 3. Run locally

Open `index.html` directly in your browser, OR use a simple HTTP server:

```bash
# Python
python3 -m http.server 3000

# Node.js (npx)
npx serve .
```

Visit `http://localhost:3000`

---

## 🌐 Deploy to GitHub Pages

### Option A — GitHub Actions (Recommended, auto-deploys on push)

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set **Source** to `GitHub Actions`
4. Push any change to `main` — it deploys automatically! ✅

### Option B — Manual (Branch-based)

1. Go to **Settings → Pages**
2. Set **Source** to `Deploy from a branch`
3. Choose `main` branch, `/ (root)` folder
4. Save — GitHub Pages will serve your site

### Your site URL will be:
```
https://Narendra&25.github.io/narendra.engineer
```


---

## ✏️ Customization Guide

| What to change | Where |
|---|---|
| Your name | `index.html` → hero section |
| Typewriter phrases | `assets/js/components/typewriter.js` → `PHRASES` array |
| Projects | `index.html` → `.projects-grid` section |
| Skills & percentages | `index.html` → `.skill-fill data-width` attributes |
| Colors / fonts | `assets/css/variables.css` |
| Contact form backend | `assets/js/components/contact.js` → `simulateSubmit()` |
| Social links | `index.html` → contact & footer sections |
| Resume | Replace `assets/resume.pdf` |

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary Accent | `#00ffc8` (Mint) |
| Background | `#040d14` (Deep Navy) |
| Display Font | Fraunces (variable serif) |
| Mono Font | Space Mono |

---

## 📋 Features

- **Zero dependencies** — pure HTML, CSS, JavaScript
- **Modular architecture** — each concern in its own file
- **Performance** — throttled scroll handlers, IntersectionObserver
- **Accessibility** — semantic HTML, ARIA labels, focus styles, `prefers-reduced-motion`
- **Responsive** — mobile-first, works on all screen sizes
- **Custom cursor** — desktop-only, degrades gracefully
- **Scroll animations** — staggered reveal on scroll
- **Animated skill bars** — trigger when visible
- **Typewriter effect** — cycling phrases in hero
- **Contact form** — client-side validation, ready for Formspree

---

## 🔧 Connecting the Contact Form

The form uses a `simulateSubmit()` placeholder. To make it real:

**Formspree (easiest — free tier available):**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form, copy your Form ID
3. In `assets/js/components/contact.js`, uncomment the Formspree block and add your ID


---

## 📄 License

MIT — feel free to use and customize for your own portfolio.

---

