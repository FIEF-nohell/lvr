# 🎤 Laura | Artist Landing Page

A sleek, minimal, dark-themed **Next.js** one-pager for the artist **Laura (@LVR)**.  
It dynamically showcases the **latest release**, with rich metadata for SEO and social sharing. Optimized for Spotify and music discovery.

---

## 🔥 Live Preview

[https://lvr.nohell.dev](https://lvr.nohell.dev)

---

## 📁 Project Structure

```bash
├── app/
│   ├── layout.tsx              # Root layout & metadata
│   ├── page.tsx                # Entry point for the landing page
│   └── globals.css             # Global styles
├── components/
│   └── ui/                     # UI elements and layout pieces
│       ├── button.tsx
│       ├── card.tsx
│       ├── artist-page.tsx
│       ├── fullpage-background.tsx
│       └── theme-provider.tsx
├── lib/utils.ts                # Utility functions
├── public/                     # Static assets (e.g. cover images)
```

---

## 🚀 Getting Started

```bash
yarn install
yarn dev
```

Runs on: [http://localhost:3000](http://localhost:3000)

---

## ✨ Features

* 🧑‍🎤 Artist identity-focused design
* 🔄 Showcases **latest track release**
* 📸 Optimized for social media sharing (Open Graph + Twitter)
* 🎧 Integrated Spotify player
* 🌌 Fullscreen animated background
* 📱 Responsive & mobile-friendly layout
* 🎨 Dark mode aesthetic with a modern feel

---

## 🔧 Customization Tips

* Update the **track info & image** in `artist-page.tsx`
* Adjust global metadata in `layout.tsx`
* Background visuals controlled via `fullpage-background.tsx`
* Static assets live in `/public` (e.g. album cover)

---

## ☁️ Deployment

```bash
yarn build
yarn start
```

Or deploy directly to Vercel:

```bash
vercel deploy
```

---

## 👩‍🎤 Credit

Built for **Laura (@LVR)**
Not tied to any specific release – the page dynamically reflects her **latest work**.

```
