# Copilot Instructions for Sports Agency Website

This is a Next.js 15 sports agency website using the App Router with TypeScript, Tailwind CSS 4, and Turbopack.

## Architecture & Structure

- **App Router Layout**: Uses Next.js App Router with `app/page.tsx` as main landing page
- **Component-Based**: All UI components in `/components/` directory with clear section-based naming
- **Single Page Application**: Currently a one-page site with sectioned components imported into `app/page.tsx`

## Development Patterns

### Components
- Use **default exports** for all components (established pattern)
- **Naming Convention**: PascalCase with descriptive suffixes (`HeroSection`, `AboutSection`, `TrustedBy`)
- **File Structure**: One component per file in `/components/` directory
- Mix of functional components, some use `'use client'` directive when needed (e.g., `Header.tsx` for state management)

### Styling & Design
- **Tailwind CSS 4**: Primary styling framework with custom CSS variables in `globals.css`
- **Font Strategy**: Three custom Google Fonts configured in `layout.tsx`:
  - `--font-roboto`: Primary sans-serif (body text)
  - `--font-italiana`: Mono font for headers
  - `--font-nunito`: Serif font for accents
- **Typography Classes**: Use `font-mono`, `font-serif` classes that map to custom font variables
- **Color Scheme**: Dark theme support with CSS custom properties, primarily black/white with gray accents

### Images & Assets
- **Next.js Image**: Always use `next/image` component for optimization
- **Asset Location**: All images, videos in `/public/` directory
- **Video Background**: Uses HTML5 video with autoplay/muted/loop attributes in Hero section

### Icons
- **Lucide React**: Primary icon library (`lucide-react` package)
- Import specific icons: `import { Menu, X, Plus, ArrowUpRight } from 'lucide-react'`

## Key Implementation Details

### Path Aliases
- Uses `@/*` alias pointing to root directory (configured in `tsconfig.json`)
- Import components: `import HeroSection from "@/components/Hero-section"`

### Development Commands
- **Dev Server**: `npm run dev` (uses Turbopack for faster builds)
- **Build**: `npm run build --turbopack`
- **Lint**: `eslint` (ESLint 9 with Next.js config)

### Component Patterns
- **Hero Section**: Video background with overlay, absolute positioning for text layers
- **Header**: Toggle-based mobile menu with state management, absolute positioning
- **Section Components**: Typically use padding/margin classes for spacing, flex layouts

## Technical Stack
- **Next.js**: 15.5.4 with App Router
- **React**: 19.1.0
- **TypeScript**: 5+ with strict mode
- **Tailwind CSS**: Version 4 (latest)
- **Build Tool**: Turbopack enabled for dev and build

When adding new components, follow the established section-based naming pattern and ensure proper TypeScript typing. Use Tailwind utilities consistently with the project's spacing and color conventions.