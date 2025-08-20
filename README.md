# 🌸 Flower Shop Catalog (React + Vite)

A simple **catalog showcase** app: list of flowers with **search**, **category filter**, and **sorting**. No cart or payments.

## 🚀 Quick Start

1) **Install Node.js** (v18 or newer recommended).
2) Extract this folder and open a terminal here.
3) Install dependencies:
```bash
npm install
```
4) Start the dev server:
```bash
npm run dev
```
5) Open the URL shown (usually `http://localhost:5173`).

## 🧱 Tech
- React 18 + Vite
- Plain CSS (no Tailwind)
- Static JSON-like data under `src/data/flowers.js`

## 🗂️ Project Structure
```text
flower-shop-catalog/
├─ index.html
├─ package.json
├─ vite.config.js
└─ src/
   ├─ index.css
   ├─ main.jsx
   ├─ App.jsx
   ├─ data/
   │  └─ flowers.js
   └─ components/
      ├─ CategoryPills.jsx
      ├─ ProductCard.jsx
      └─ ProductGrid.jsx
```

## ✨ What’s Included
- Sticky header with brand & search
- Category pills (All, Roses, Lilies, Orchids, Tulips, Bouquets, ...)
- Sort by name / price
- Responsive grid cards with image, description, category, price
- Clean dark UI

## 🧭 Next Steps / Ideas
- Add product detail modal/page
- Add pagination or infinite scroll
- Hook to a real API (e.g., your backend or Firebase)
- Add a contact/about page
- Theme switch (light/dark)