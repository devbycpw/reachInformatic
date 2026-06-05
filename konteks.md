# Project Context: Redesign Portal Administratif Mahasiswa

## 1. Project Objective
Act as an expert Frontend Developer and UI/UX Designer. The goal is to redesign a legacy academic portal for university students into a modern, highly responsive, and aesthetically pleasing web application.

## 2. Tech Stack Constraints (STRICT)
- **HTML:** Semantic HTML5.
- **CSS:** Tailwind CSS ONLY (use CDN or local Tailwind CLI). Do not write custom CSS unless absolutely necessary for specific animations.
- **JavaScript:** Vanilla JavaScript (ES6+). 
- **NO FRAMEWORKS:** Strictly NO React, Vue, Svelte, Next.js, or Astro.
- **Icons:** Use Lucide Icons or Phosphor Icons (via CDN).

## 3. Architecture & Workflow Strategy
Since we cannot use modern component-based frameworks, we will use a Vanilla JS modular approach to keep the code DRY (Don't Repeat Yourself).
- **Component Injection:** The Sidebar and Header should be written in separate HTML files (e.g., `components/sidebar.html`) and injected into the main pages using Vanilla JS `fetch()`.
- **State Management:** Use `localStorage` to handle mock data (KRS selection, user profile, attendance logs).
- **Focus Order:** 
  1. Build the Master Layout (Sidebar + Header injection).
  2. Build `krs.html` (The most dynamic page with complex state/tables).
  3. Replicate styles to `index.html`, `jadwal-absen.html`, `khs.html`, `profil.html`.
  4. Build `login.html` (Standalone layout).

## 4. UI/UX & Design Language
- **Desktop Sidebar:** Implement a "Collapsible Mini-Rail" concept. It sits at `w-20` (icons only) by default and expands to `w-64` (with text labels) on hover or toggle. Ensure animations use `transform` and `opacity` for 120fps smooth performance (avoid layout thrashing).
- **Mobile Navigation:** The sidebar must transform into a fixed Bottom Navigation Bar on mobile screens (`md` breakpoint in Tailwind).
- **Theme:** Clean, modern startup vibe. Use a light background (e.g., `bg-slate-50`), crisp white cards with soft shadows (`shadow-sm`, `rounded-xl`), and subtle glassmorphism (`backdrop-blur-md`, `bg-white/80`) for sticky headers or floating elements.
- **Active States:** Use distinct visual cues for active menu items (e.g., a colored vertical left border with a low-opacity background).

## 5. Current Pages & Data to Migrate
- `index.html`: Dashboard with stats (Total SKS, GPA) and a visual study timeline.
- `krs.html`: Interactive page to add/drop courses (Draft vs Approved state).
- `jadwal-absen.html`: Schedule table and attendance history log.
- `khs.html`: Transcript table with auto-calculated weighted grades and print layout.
- `profil.html`: Form to update personal and bank details.
- `login.html`: Simple card-based auth page.

## First Task
Please acknowledge this context. Then, generate the initial code for the modular layout architecture: the `index.html` structure (container) and the Vanilla JS function (`app.js`) to fetch and inject a modern Tailwind sidebar.