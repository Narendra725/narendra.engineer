# Architecture Documentation

## Overview

This portfolio is a static website built with vanilla HTML5, CSS3, and JavaScript (ES6+). It uses **no frameworks**, **no build tools**, and **no runtime dependencies**, making it lightweight, fast, and trivially deployable.

## Design Principles

### 1. Separation of Concerns
Each concern lives in its own file:
- **Structure** → `index.html`
- **Tokens** → `variables.css` (single source of truth for design)
- **Component styles** → `assets/css/components/*.css`
- **Utilities** → `assets/js/utils/*.js`
- **Features** → `assets/js/components/*.js`

### 2. Module Pattern
All JavaScript uses the **IIFE Module Pattern** (`const Module = (() => { ... })()`), which:
- Prevents global namespace pollution
- Provides clear public API (`return { init }`)
- Works in all browsers without a bundler

### 3. Progressive Enhancement
The site works without JavaScript. CSS handles all visual presentation. JS enhances with animations and interactivity.

### 4. Performance
- **Throttled scroll handlers** prevent excessive repaints
- **IntersectionObserver** for scroll animations (no scroll event overhead)
- **CSS animations** prefer `transform` and `opacity` for GPU acceleration
- **`will-change`** applied judiciously to animated elements

### 5. Accessibility
- Semantic HTML5 elements (`header`, `main`, `section`, `article`, `footer`)
- ARIA labels on all interactive elements
- `:focus-visible` styles for keyboard navigation
- `aria-live` region for form status announcements
- `prefers-reduced-motion` media query disables all animations

## JavaScript Architecture

```
Utils (global)
├── helpers.js  → throttle, debounce, DOM selectors, validation
└── animations.js → IntersectionObserver, cursor tracker, skill bars

Components (depend on Utils)
├── navbar.js    → scroll behavior, mobile menu
├── typewriter.js → typing animation
├── skills.js    → percentage labels
└── contact.js  → form validation & async submission

Entry Point
└── main.js → DOMContentLoaded → initializes all modules
```

## CSS Architecture

```
variables.css → Design tokens (colors, spacing, typography, shadows)
    ↓
main.css → Reset, base styles, layout, shared components (buttons)
    ↓
animations.css → Keyframes, reveal classes, page load sequences
    ↓
components/*.css → Scoped component styles
    ↓
responsive.css → Media queries (overrides, layout shifts) — always last
```

## Deployment Architecture

```
Developer (local) → git push → GitHub (main branch)
                                    ↓
                           GitHub Actions CI/CD
                                    ↓
                         validate.yml (file checks)
                                    ↓
                          deploy.yml (Pages deploy)
                                    ↓
                         GitHub Pages CDN (live site)
```
