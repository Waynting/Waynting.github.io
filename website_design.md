# Waynspace — Design & Style Guide

> **Design Philosophy**: Editorial Minimal. Clean, grayscale, typography-led. No decorative chrome — structure and whitespace do the work.

---

## 1. Design Principles

1. **Typography over decoration** — hierarchy is communicated through size, weight, and spacing, not color or icons.
2. **Grayscale only** — no accent colors in the UI. Color exists only inside article syntax highlighting.
3. **Consistent editorial grammar** — every page follows the same layout pattern: labeled section header → content rows.
4. **Readable at rest** — no hover-triggered reveals for essential information. Hover states are subtle.
5. **No visual noise** — no hero banners, gradient backgrounds, Card wrappers, flip cards, or emoji in navigation.

---

## 2. Color Palette

All values are CSS HSL variables defined in `src/app/globals.css`.

### Light Mode (`:root`)

| Token | HSL | Hex equivalent |
|---|---|---|
| `--background` | `0 0% 100%` | `#ffffff` |
| `--foreground` | `0 0% 15%` | `#262626` |
| `--card` | `0 0% 100%` | `#ffffff` |
| `--muted` | `0 0% 96%` | `#f5f5f5` |
| `--muted-foreground` | `0 0% 40%` | `#666666` |
| `--border` | `0 0% 90%` | `#e6e6e6` |
| `--primary` | `0 0% 15%` | `#262626` |
| `--secondary` | `0 0% 96%` | `#f5f5f5` |

### Dark Mode (`.dark`)

| Token | HSL | Hex equivalent |
|---|---|---|
| `--background` | `0 0% 6%` | `#0f0f0f` |
| `--foreground` | `0 0% 98%` | `#fafafa` |
| `--card` | `0 0% 10%` | `#1a1a1a` |
| `--muted` | `0 0% 15%` | `#262626` |
| `--muted-foreground` | `0 0% 65%` | `#a6a6a6` |
| `--border` | `0 0% 20%` | `#333333` |

### Rules
- **Never use accent colors** in page UI (buttons, links, labels).
- All interactive states use opacity shifts (`opacity: 0.8`) or muted background (`bg-muted/30`), not color changes.
- Theme transitions use `0.2s ease` on `background-color`, `border-color`, and `color`.

---

## 3. Typography

### Font
- **Family**: `Noto Sans TC` (Google Fonts CDN)
- **Weights used**: 300 (light), 400 (regular), 500 (medium), 700 (bold)
- **Fallback stack**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Default body weight**: 400

### Scale

| Usage | Class / CSS | Notes |
|---|---|---|
| Page section label | `text-xs tracking-[0.2em] uppercase` | muted color, above every section |
| Page h1 | `text-3xl sm:text-4xl font-bold` | immediately below section label |
| Article h1 | `font-size: 2.5rem; font-weight: 700` | inside `.article-content` |
| Article h2 | `font-size: 1.75rem` + bottom border | |
| Article h3 | `font-size: 1.5rem` | |
| Article h4 | `font-size: 1.25rem` | |
| Body / article | `font-size: 1rem; line-height: 1.8–1.85` | |
| Muted / meta | `text-xs` or `text-sm text-muted-foreground` | dates, categories, labels |
| Code (inline) | `Monaco, Menlo, Ubuntu Mono, monospace; font-size: 0.875rem` | |

### Monospace (code)
- `Monaco` → `Menlo` → `Ubuntu Mono` → `monospace`

---

## 4. Layout & Spacing

### Container
```
max-w-3xl mx-auto px-6 sm:px-8 lg:px-12
```
Used on every page for text content. Photos gallery uses a wider container (`px-4 sm:px-6 lg:px-8`) after the editorial header.

### Page Header Pattern
Every page starts with this two-line header:
```
[text-xs tracking-[0.2em] uppercase muted-foreground]  ← section label
[text-3xl+ font-bold]                                   ← page title
```

### Section Pattern
Numbered sections (00, 01, 02…) with:
```html
<div class="border-b border-border pb-3 mb-8">
  <span class="text-xs tracking-[0.18em] uppercase text-muted-foreground">00 · Section Name</span>
</div>
```

### Article Row Pattern
Blog listing rows follow the format: `MM/DD · title · category`
```
py-4 border-b border-border/50 hover:bg-muted/30
```
- Left: `MM/DD` date in `text-xs text-muted-foreground`
- Center: title (medium weight) + optional excerpt in muted
- Right: category label in `text-xs text-muted-foreground`

---

## 5. Components

### Header (`src/components/Header.tsx`)
- Height: `h-14`, sticky, `border-b border-border/50`
- Container: `max-w-3xl`
- Logo: `favicon.ico` (20×20, `rounded-sm`) + `"Waynspace"` (`text-sm font-medium`)
- Nav links: plain text, no borders, no backgrounds
  - Active: `border-b border-foreground font-medium`
  - Inactive: `text-muted-foreground hover:text-foreground`

### Footer (`src/components/Footer.tsx`)
- Single flex row inside `max-w-3xl`
- Left: `"Waynspace"` + `"© {year} Wei-Ting Liu"`
- Right: nav links + social text links (GitHub, LinkedIn, Instagram, Medium, Email)

### Navigation (`src/components/Navigation.tsx`)
- Desktop: inline text links
- Mobile: portal overlay menu
- Items: About (`/about`), All Articles (`/blog`), Photos (`/photos`), Camera Float (`/camera-float-ntu`)
- No emoji, no icons, no rounded buttons

### Theme Toggle
- Light / Dark / System modes via `src/components/ThemeProvider.tsx`
- Toggle appears in header

---

## 6. Page Layouts

### Home (`/`)
```
[photo 72px circular right] + Name (bold) + bio paragraph
CV↗ link + 5 social icons (small, muted)
─────────────────────────────
00 · LATEST ARTICLES
[5 article rows — editorial format]
─────────────────────────────
Newsletter section (EmailSubscribe)
```

### Blog Index (`/blog`)
```
[Page header: "BLOG" label + "文章"]
─────────────────────────────
Category filter tabs (text, no pill backgrounds)
─────────────────────────────
Articles grouped by year
  YYYY
  MM/DD · title · category
  ...
```

### Blog Article (`/blog/[...slug]`)
```
[Breadcrumb] → Back to Blog
[Title]
[Date · Read time · Category]
─────────────────────────────
[Cover image — full width within container]
─────────────────────────────
.article-content prose body
```

### About (`/about`)
```
[Page header: "ABOUT" label + Name]
─────────────────────────────
00 · SUMMARY
01 · EXPERIENCE       (left-border bullet list)
02 · PROJECTS         (inline sub-card)
03 · EDUCATION
04 · SKILLS
05 · AWARDS & LEADERSHIP
```

### Photos (`/photos`)
```
[Editorial header: max-w-3xl]
─────────────────────────────
[Full-bleed masonry gallery — wider container]
Lightbox: pure black bg, bare icon controls, "n / total" caption
```

---

## 7. Article Content Styles (`.article-content`)

Defined in `src/app/globals.css`:

| Element | Style |
|---|---|
| `p` | `line-height: 1.85; margin-bottom: 2rem` |
| `h2` | `1.75rem` + `border-bottom: 2px solid border` |
| `h3` | `1.5rem` |
| `blockquote` | Left border `4px solid primary`, `bg-secondary`, italic |
| `code` (inline) | `bg-secondary`, `border`, `border-radius: 0.25rem` |
| `pre` | `bg-card`, `border`, `border-radius: 0.5rem`, copy button on hover |
| `img` | `mx-auto`, `border-radius: 0.5rem`, subtle `box-shadow` |
| `table` | Full width, `bg-card`, `border-collapse`, `th` has `bg-secondary` |
| `hr` | `border-top: 2px solid border`, centered, `width: 80%` |

### Syntax Highlighting
- Theme: GitHub (light) / GitHub Dark (dark mode)
- Implemented via `highlight.js` classes in `globals.css`
- Copy-to-clipboard button appears on `pre:hover`

---

## 8. Interaction & Animation

| Pattern | Value |
|---|---|
| Theme color transitions | `background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease` |
| Hover on article rows | `hover:bg-muted/30` |
| Hover on photos | `bg-black/8` overlay (no scale) |
| Copy button reveal | `opacity: 0` → `opacity: 1` on `pre:hover`, `0.15s ease` |
| Image lazy load | `opacity: 0` → `opacity: 1` on `.loaded`, `0.3s ease` |
| Lightbox | Instant open, pure `bg-black` |

**No** entrance animations, scroll effects, or parallax.

---

## 9. Images

- **CDN**: `https://img.waynspace.com/` (Cloudflare R2)
- **Path format**: `YYYY/MM/slug/filename.webp`
- **Format**: `.webp` always
- **No** local `/public` image paths in published content
- **In articles**: centered, `border-radius: 0.5rem`, subtle shadow
- **In gallery**: no border-radius, no shadow, bare presentation

---

## 10. Do / Don't Checklist

### Do
- Use `border-b border-border` to divide sections
- Use `text-xs tracking-[0.2em] uppercase text-muted-foreground` for labels
- Use `text-muted-foreground` for all secondary text (dates, categories, captions)
- Keep all containers at `max-w-3xl` unless the content is explicitly full-bleed (photos)
- Number all major sections (00, 01, 02…)

### Don't
- Use accent colors (blue, purple, green) in page UI
- Add gradient backgrounds
- Wrap content in Card components with rounded borders + shadows
- Use emoji in navigation or headings
- Add hero sections or full-viewport banners
- Use rounded button borders
- Add animations beyond the approved `0.2s ease` transitions
