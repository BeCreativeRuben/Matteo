# Matteo Lifestyle Website

A modern, minimalist single-page website showcasing Matteo's lifestyle in Vienna, Austria. Built with React and featuring a sophisticated grayscale design aesthetic.

## Features

- **Single-page design** with smooth scrolling navigation
- **Grayscale aesthetic** - elegant black, white, and gray color palette
- **Responsive design** - works seamlessly on all devices
- **Sections**:
  - Hero section with introduction
  - About section with image collage
  - Life in Vienna showcase
  - Cycling passion section
  - Photo gallery with lightbox
  - Contact form and social links
  - Footer with navigation

## Technology Stack

- React 18.2.0
- React Icons
- Modern CSS with Flexbox/Grid
- Create React App

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build

```bash
npm run build
```

Builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Vienna.jsx
│   ├── Cycling.jsx
│   ├── Gallery.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── styles/
│       ├── Header.css
│       ├── Hero.css
│       ├── About.css
│       ├── Vienna.css
│       ├── Cycling.css
│       ├── Gallery.css
│       ├── Contact.css
│       └── Footer.css
├── styles/
│   └── App.css
├── App.jsx
└── index.js
```

## Design Philosophy

The website follows a minimalist, image-first approach with:
- High-contrast black and white photography
- Clean typography (Inter font family)
- Card-based layouts for content sections
- Metadata bars with icons for context
- Smooth animations and transitions
- Dark backgrounds with white text throughout

## Customization

### Adding Real Images

Replace placeholder divs in components with actual `<img>` tags:
- Hero section: `src/components/Hero.jsx`
- About section: `src/components/About.jsx`
- Vienna section: `src/components/Vienna.jsx`
- Cycling section: `src/components/Cycling.jsx`
- Gallery section: `src/components/Gallery.jsx`

### Updating Content

Edit the content directly in each component file. All text content is easily editable.

### Social Media Links

Update social media links in:
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

## License

© 2024 Matteo. All rights reserved.
