# MessOS Landing Page

The official operating system for hostel messes. MessOS is a premium SaaS platform designed to digitize mess operations across Indian engineering colleges, providing a unified interface for students, mess managers, munshis, and hostel clerks.

![MessOS Banner](public/og-image.png)

## 🚀 Features

- **Unified Portal Access**: Seamless entry points for Students, Staff, and Administrators.
- **QR meal Tracking**: Modernized meal verification system to replace manual paperwork.
- **Two-Step Demo Booking**: Integrated lead capture with preferred slot selection.
- **Responsive design**: Fully optimized for mobile and desktop experiences.
- **Real-time Analytics**: Integrated with Supabase for data persistence and tracking.

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Framer Motion (Animations), Lucide React (Icons)
- **Backend**: Supabase (Database & Edge Functions)
- **Deployment**: Vercel

## 📦 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/rinkudiwakar/MessOS-SAAS.git
    cd MessOS-SAAS
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Setup**:
    Copy the `.env.example` to `.env` and add your Supabase credentials:
    ```bash
    cp .env.example .env
    ```

4.  **Run locally**:
    ```bash
    npm run dev
    ```

## 🏗️ Structure

- `/src/components`: Reusable UI components (Navbar, Hero, LeadModal, etc.)
- `/src/lib`: Shared utilities and Supabase client configuration.
- `/public`: Static assets including mockups and branding.

## 📄 License

This project is proprietary and confidential.

---
Built with ❤️ for Indian hostel students.
