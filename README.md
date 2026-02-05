# FinovaTaxPro Frontend

A statically-driven Next.js website for tax and compliance services (CA Firm).
This project was originally a dynamic app but has been converted to a static-like structure where service data is stored locally in TypeScript files, and backend auth/checkout flows are disabled for a simplified presentation-only deployment.

## Features

- **Static Data Architecture**: All service prices, descriptions, and features are served from `data/serviceData.ts`, extracted from the original database.
- **Service Catalog**: Browse categories (e.g., Business Registration, GST, Trademark) and view detailed service pages.
- **Responsive Design**: Built with Tailwind CSS for mobile-first responsiveness.
- **Performance**: Leveraging Next.js 16 and React 19 for optimal rendering speed.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: TypeScript

## Project Structure

```
frontend/
├── app/                  # Next.js App Router pages
│   ├── services/         # Dynamic service pages ([slug])
│   ├── page.tsx          # Homepage
│   └── layout.tsx        # Root layout
├── components/           # Reusable UI components (Navbar, Footer, ServiceCards)
├── data/
│   └── serviceData.ts    # Single source of truth for all service data
└── public/               # Static assets
```

## Setup & Run

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This app can be deployed to Vercel, Netlify, or any static hosting that supports Node.js.
Since all data is local, no external database connection is required for the main display logic.

## Recent Changes

- **Data Migration**: Service data moved from backend DB to `data/serviceData.ts`.
- **Feature Toggles**: Authentication and Payment/Checkout flows have been disabled/removed to serve as a catalog website.
