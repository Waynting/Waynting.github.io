# Wei-Ting Liu - Portfolio Website

A one-page portfolio website built with Next.js and shadcn/ui, showcasing my background in Information Management at National Taiwan University.

## Features

- 📄 CV download functionality
- 🌓 Dark mode support
- 📱 Responsive design
- 🎨 Modern UI with shadcn/ui components
- 🚀 Built with Next.js 15 and TypeScript
- 🔍 SEO optimized with meta tags and structured data

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

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes
- **Language**: TypeScript

## Project Structure

```
portfolio-site/
├── app/
│   ├── page.tsx        # Main portfolio page
│   ├── layout.tsx      # Root layout with metadata
│   └── globals.css     # Global styles
├── components/
│   ├── ui/             # shadcn/ui components
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
└── public/
    └── CV_WaynLiu.pdf  # CV file for download
```

## Contact

- Email: wayntingliu@gmail.com
- GitHub: [Waynting](https://github.com/Waynting)
- LinkedIn: [waiting5928](https://www.linkedin.com/in/waiting5928/)
- Website: [waynspace.com](https://waynspace.com)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.