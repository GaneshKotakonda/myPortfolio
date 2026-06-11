# K. Ganesh Reddy — Developer Portfolio

A modern, responsive developer portfolio built with **HTML**, **CSS**, and **Tailwind CSS**.

## Features

- Dark modern theme with clean typography
- Fully responsive, mobile-first layout
- CSS-only animations and hover effects
- Semantic HTML5 structure
- No JavaScript frameworks required

## File Structure

```
finlaticswebdev_project1-main/
├── index.html          # Main portfolio page (all sections)
├── styles.css          # Custom CSS animations & components
├── assets/
│   ├── profile-placeholder.jpg
│   ├── project-1.png
│   └── resume.pdf      # Add your resume here
└── README.md
```

## Sections

1. Header / Navbar
2. Hero
3. About Me
4. Skills
5. Featured Project
6. Experience
7. Achievements
8. Contact
9. Footer

## How to Run

Open `index.html` directly in your browser, or use a local server:

```bash
npx serve .
```

Then visit `http://localhost:3000`

## Customization

- Replace `assets/profile-placeholder.jpg` with your photo
- Replace `assets/project-1.png` with your project screenshot
- Add your resume PDF to `assets/resume.pdf`
- Update content directly in `index.html`

## Tech Stack

- HTML5
- Tailwind CSS (CDN)
- Custom CSS

## Deploy to Vercel

This is a **static site** — no build step required.

**Vercel project settings:**

| Setting | Value |
|---|---|
| Framework Preset | Other |
| Build Command | *(empty)* |
| Output Directory | `.` |
| Install Command | *(empty)* |

The repo includes `vercel.json` with these settings. Push to GitHub and redeploy.

```bash
git add .
git commit -m "Fix Vercel static deployment"
git push
```
