# Cash App

Base Zero is a playful, profile-based budgeting UI built with Next.js. It highlights shared spending frameworks and an input-first flow where each expense stores an amount and a spend date.

## What you can do

- Choose a budget profile (Personal, Student, Family, Household)
- Explore shared category frameworks across profiles
- Enter amount + date per item
- Preview a modern, responsive landing page

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Project Structure

- `app/page.js` - main landing page layout and UI data
- `app/layout.js` - font setup and metadata
- `app/globals.css` - global styles and animations

## Customization

Update the profile cards, frameworks, and copy in `app/page.js`. The default categories and items are defined as arrays near the top of the file.

## Scripts

- `npm run dev` - start the development server
- `npm run build` - create a production build
- `npm run start` - run the production server
- `npm run lint` - lint the project
