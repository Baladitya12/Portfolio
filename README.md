# 🚀 Baladitya – Personal Portfolio

A visually rich, animated personal portfolio built with **React**, **Three.js**, **GSAP**, and **Tailwind CSS v4** — featuring a custom venom-liquid cursor, particle fields, glitch loaders, and cinematic hero animations.

---

## ✨ Features

- 🌌 **3D Particle Field** – interactive WebGL background via Three.js
- 🕷️ **Venom Cursor Engine** – custom liquid-ink cursor animation (`venomEngine.ts`)
- ⚡ **GSAP Animations** – scroll-triggered, staggered, and timeline-based transitions
- 🎥 **Video Modal** – project demo playback with keyboard/click dismiss
- 📱 **Fully Responsive** – mobile-first layout with Tailwind CSS
- 🔡 **Glitch Loader** – animated intro screen before the main content reveals
- 🧩 **Component-based** – cleanly separated sections: Hero, About, Skills, Projects, Contact, Footer

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Framework | React 18 + TypeScript |
| 3D / Canvas | Three.js |
| Animation | GSAP, Framer Motion |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Build Tool | Vite 5 |

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── assets/          # Hero background, icons, thumbnails
│   └── media/           # Profile images (.webp)
├── src/
│   ├── components/      # All UI sections & shared components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── GlitchLoader.tsx
│   │   ├── Navbar.tsx
│   │   ├── ParticleField.tsx
│   │   ├── SparkCursor.tsx
│   │   ├── VenomButton.tsx
│   │   └── VideoModal.tsx
│   ├── data/
│   │   └── portfolioData.ts   # ← Edit your info here
│   ├── lib/
│   │   └── venomEngine.ts     # Custom cursor animation engine
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js LTS](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation & Dev Server

```bash
# Clone the repo
git clone https://github.com/Baladitya12/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Then open https://portfolio-orpin-eight-41.vercel.app in your browser.

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## ✏️ Customization

All personal data (name, bio, skills, projects, links) lives in one file:

```
src/data/portfolioData.ts
```

To add project screenshots, drop images named `project-<n>-1.jpg`, `project-<n>-2.jpg`, `project-<n>-3.jpg` (1280×720 px) into:

```
public/assets/thumbnails/
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with ❤️ by [Baladitya](https://github.com/Baladitya12)
