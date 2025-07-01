This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

# 🗓️ Appointments Frontend

This is the frontend of an appointment calendar application built with **Next.js 14**, **Tailwind CSS**, and **shadcn/ui**. It displays appointments grouped by date, with a responsive interface, filter options, and navigation support.

---

## ✨ Features

- 📅 Grouped appointment list by date
- ✅ "Heute" label shown once at the top (right-aligned)
- 📆 Date picker and view buttons (Liste, Woche, Monat)
- ➕ Action buttons: "Neuer Termin" and "Termine filtern"
- 🧭 Clickable appointment boxes with routing
- 🎨 Responsive and clean UI using Tailwind and shadcn/ui

---

## 🧰 Tech Stack

| Tech                                     | Description                         |
| ---------------------------------------- | ----------------------------------- |
| [Next.js](https://nextjs.org/)           | React framework for SSR & routing   |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework         |
| [shadcn/ui](https://ui.shadcn.com/)      | Styled UI components using Radix UI |
| [date-fns](https://date-fns.org/)        | Date formatting utilities           |
| [lucide-react](https://lucide.dev/)      | Icon set for React                  |

---

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/appointments-frontend.git
cd appointments-frontend


### 2. Install dependencies


pnpm install
# or
npm install
# or
yarn
pnpm dev
# or
npm run dev

### 3. Start the development server

pnpm dev
# or
npm run dev

---

## To check calendar view

http://localhost:3000/calendar

## To check appointments' list view

http://localhost:3000/list

## To check specific appointment
http://localhost:3000/appointments/[id]


##
Since the API Key provided is invalid, the data used is dummy data in vocare-calendar-frontend\src\app\lib\data.ts




```
