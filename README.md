# Fluxmedia — Internship Assignment

## Tech Stack
- React 18 (Create React App)
- CSS (CSS Variables, no external UI library)
- Google Fonts: Syne + Inter

## Project Structure
```
src/
  components/
    Navbar.js        — Fixed nav with mobile hamburger menu
    Hero.js          — Hero section with headline, floating badges, grid visual
    Marquee.js       — Animated logo marquee strip
    About.js         — About section with stat cards
    Services.js      — Services cards "What we can offer you!"
    Testimonials.js  — Auto-cycling testimonial panel
    CtaFooter.js     — CTA banner + Footer
  App.js
  index.css          — Global design system / CSS variables
  index.js
```

## Sections Implemented
1. **Hero** — Bold headline, CTAs, floating stat badges, avatar proof
2. **Marquee** — Animated trusted-brands strip
3. **About** — "Tomorrow should be better than today" + stat cards
4. **Services** — "What we can offer you!" — 3 service cards
5. **Testimonials** — "What our customer says About Us" — auto-carousel
6. **CTA Banner** — Dark full-width CTA block
7. **Footer** — Multi-column footer with social links

## Features
- Fully responsive (mobile, tablet, desktop)
- Scroll-triggered reveal animations
- Hover states on all interactive elements
- Sticky nav with blur-on-scroll
- Mobile hamburger menu with smooth overlay
- Auto-cycling testimonial carousel
- CSS-only animations (float, marquee, fade)

## Run Locally
```bash
npm install
npm start
```

## Deploy to Vercel
1. Push to GitHub
2. Import repo at vercel.com/new
3. Framework Preset: Create React App
4. Deploy ✓

Or via CLI:
```bash
npm install -g vercel
vercel --prod
```
