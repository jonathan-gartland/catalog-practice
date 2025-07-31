# Product Catalog App

A simple Next.js application featuring a catalog-style layout with four product categories.

## Features

- **Home Page**: Displays a hero section with title and four clickable product categories
- **Product Categories**: 
  - Electronics
  - Clothing & Fashion
  - Home & Garden
  - Sports & Outdoor
- **Individual Product Pages**: Detailed pages for each category with images and descriptions
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, modern design with hover effects and smooth transitions

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
app/
├── layout.tsx          # Root layout component
├── page.tsx           # Home page with catalog grid
├── globals.css        # Global styles
└── products/          # Product category pages
    ├── electronics/
    ├── clothing/
    ├── home/
    └── sports/
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Next.js Image Optimization

## Customization

You can easily customize the app by:

1. **Changing Product Categories**: Modify the `products` array in `app/page.tsx`
2. **Updating Images**: Replace the Unsplash image URLs with your own images
3. **Styling**: Modify the CSS classes in `app/globals.css`
4. **Content**: Update the descriptions and titles in each product page

## Deployment

The app can be deployed to Vercel, Netlify, or any other platform that supports Next.js applications. 