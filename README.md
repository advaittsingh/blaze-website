# BLAAZE Website

A modern, responsive website for BLAAZE Entertainment Center built with Next.js 14, React, and TypeScript.

## Features

- **Dark Theme Design**: Modern dark theme with orange/red accent colors
- **Custom Fonts**: Nasalization for headings, Poppins Medium for body text
- **Responsive Layout**: Mobile-first design that works on all devices
- **Multiple Pages**: Home, About Us, Attractions, Plan A Party, Contact
- **Individual Attraction Pages**: Detailed pages for each attraction

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Frontend**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Nasalization (headings), Poppins Medium (body)

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Open in Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
blaze/
├── app/
│   ├── fonts/              # Custom fonts
│   ├── about-us/           # About Us page
│   ├── attractions/        # Attractions pages
│   ├── contact/            # Contact page
│   ├── plan-a-party/       # Plan A Party page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── Header.tsx          # Site header
│   └── Footer.tsx          # Site footer
├── public/
│   └── Logo-typo-4.png     # BLAAZE logo
└── package.json
```

## Available Pages

- `/` - Home page
- `/about-us` - About Us page
- `/attractions` - Attractions overview
- `/attractions/[slug]` - Individual attraction pages (go-karting, bowling, trampoline, vr, arcade, soft-play)
- `/plan-a-party` - Party planning page
- `/contact` - Contact page

## Build for Production

```bash
npm run build
npm start
```

## Customization

- **Colors**: Edit `tailwind.config.ts` to customize the color scheme
- **Fonts**: Fonts are loaded in `app/layout.tsx`
- **Styling**: Global styles are in `app/globals.css`

## Notes

- Replace placeholder images with actual images from your Figma design
- Update contact information in the Contact page
- Customize pricing and package details in the Plan A Party page
- Add actual map embed in the Contact page
