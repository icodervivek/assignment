# Profile Layout with Gallery – Next.js + TypeScript

This project is a **Profile Layout page** built with **Next.js** and **TypeScript**. It features a tabbed About section and a dynamic image gallery that supports user-uploaded images saved in `localStorage`. The UI is fully responsive and styled using **Tailwind CSS**.

---

## Features

- **Tabbed About Section**
  - Switch between "About Me", "Experiences", and "Recommended".
  - Scrollable content with custom scrollbar styling.
  
- **Gallery Section**
  - Displays a set of sample images by default.
  - Users can upload multiple images at once.
  - Uploaded images are saved in `localStorage`.
  - Horizontal scrolling with Previous/Next buttons.
  - Responsive grid layout with hover effects.

- **Responsive Design**
  - Left-side panel hidden on mobile devices.
  - Right-side content adapts to screen width.

- **Smooth Transitions**
  - Hover animations for gallery images.
  - Animated tab selection and scrollable content.

---

## Tech Stack

- **Next.js (App Router / `use client`)**
- **TypeScript**
- **React Hooks (`useState`, `useEffect`)**
- **Tailwind CSS**
- **LocalStorage** for storing user-uploaded images.

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/icodervivek/assignment.git
```

2. Navigate to the project directory:

```bash
cd assignment
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage

1. Navigate through the tabs to read about the profile.
2. Upload images using the **+ ADD IMAGE** button.
3. Scroll through images using the Previous and Next buttons.
4. Uploaded images are persisted in the browser via `localStorage`.

---

## Notes

- This project is **TypeScript-ready** and fully compatible with **Next.js 13+ App Router**.
- UI and text are based on a sample profile; can be customized as needed.
- Only **user-uploaded images** are saved in `localStorage`. Sample images are always displayed by default.

---
