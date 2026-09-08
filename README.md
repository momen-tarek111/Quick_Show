<div align="center">

# 🎬 QuickShow — Frontend

### A sleek, responsive Movie Ticket Booking web app built with React & Vite

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

**[🔴 Live Demo](https://quick-show-rose.vercel.app/) · [Backend Repo](https://github.com/momen-tarek111/QuickShow_BackEnd) · [Report a Bug](https://github.com/momen-tarek111/Quick_Show/issues)**

</div>

---

## 📖 Overview

**QuickShow** is the client-side application for a full-stack cinema booking platform. It gives users a fast, modern experience to explore movies, pick showtimes, select seats visually, and pay securely — while giving admins a dedicated dashboard to manage the entire catalog and monitor bookings in real time.

Built with **React + Vite** for near-instant dev feedback and optimized production builds, and styled with **Tailwind CSS** for a clean, cinema-grade UI.

---

## ✨ Key Features

- 🔐 **Seamless Authentication** — Sign up / log in via Email, Social login, or Phone number using **Clerk**, with support for multiple accounts and instant switching without logging out
- 🍿 **Browse & Discover Movies** — Live movie data (posters, cast, ratings, trailers) pulled from **TMDB**
- 🪑 **Interactive Seat Selection** — Visual seat map where users pick their preferred seats before checkout
- ⏱️ **Real-Time Seat Hold Feedback** — Reflects the backend's 10-minute reservation window, so users know exactly how long they have to complete payment
- 💳 **Secure Checkout Flow** — Integrated with Stripe on the backend for a smooth, trustworthy payment experience
- 📧 **Booking Confirmations** — Users receive instant confirmation and pre-showtime reminder emails triggered from the backend
- 🛠️ **Admin Dashboard** — Add new movies, manage showtimes, and view all bookings from a protected admin interface
- 📱 **Fully Responsive UI** — Built mobile-first with Tailwind CSS, consistent across all screen sizes
- ⚡ **Optimized Performance** — Powered by Vite for lightning-fast load times and HMR during development

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Library** | React |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS |
| **HTTP Client** | Axios |
| **Authentication** | Clerk |
| **Deployment** | Vercel |

---

## 📂 Project Structure

```
QuickShow_FrontEnd/
├── src/
│   ├── components/     # Reusable UI components (Navbar, MovieCard, SeatMap, etc.)
│   ├── pages/           # Route-level pages (Home, MovieDetails, Booking, Admin)
│   ├── context/          # Global state (auth, bookings)
│   ├── lib / utils/      # Axios instance, helper functions
│   ├── assets/           # Images & static assets
│   └── App.jsx
├── public/
├── index.html
├── vite.config.js
└── package.json
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory with the following keys:

```env
VITE_CURRENCY=
VITE_CLERK_PUBLISHABLE_KEY=
VITE_BASE_URL=

VITE_TMDB_IMAGE_BASE_URL=
```

> `VITE_BASE_URL` should point to your deployed (or local) backend API — see the [Backend Repository](https://github.com/momen-tarek111/QuickShow_BackEnd).

---

## 🚀 Getting Started Locally

```bash
# 1. Clone the repository
git clone https://github.com/momen-tarek111/Quick_Show.git
cd QuickShow_FrontEnd

# 2. Install dependencies
npm install

# 3. Set up environment variables
# Create a .env file as shown above

# 4. Run the development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

---

## 🔗 Related Repository

- ⚙️ **Backend / API:** [QuickShow Backend](https://github.com/momen-tarek111/QuickShow_BackEnd) — Node.js + Express API handling auth, payments, and background jobs
- 🌐 **Live Demo:** [quick-show-rose.vercel.app](https://quick-show-rose.vercel.app/)

---

## 👤 Author

**Momen Tarek**

- GitHub: [@momen-tarek111](https://github.com/momen-tarek111)
- LinkedIn: [Momen Tarek Nagaty](https://www.linkedin.com/in/momen-tarek-nagaty)

---

<div align="center">

⭐️ If you found this project interesting, consider giving it a star!

</div>