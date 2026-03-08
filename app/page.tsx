import Image from "next/image";
import Script from "next/script";
import { ThemeToggle } from "@/components/theme-toggle";


const skills = {
  Stack: ["TypeScript", "React", "Next.js", "PostgreSQL", "Tailwind", "Python", "C++"],
  Tools: ["REST/GraphQL", "Git", "Vercel"],
  Coursework: ["Data Structures", "Web Programming", "Algorithms", "Operating Systems"],
};

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="border-b border-border pb-3 mb-8">
      <span className="text-xs tracking-[0.18em] uppercase text-muted-foreground">
        {number} · {title}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only absolute left-2 top-2 z-50">
        Skip to content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur border-b border-border/50">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 h-14 flex items-center justify-between">
          {/* Logo */}
          <a href="#main" className="text-sm font-medium hover:opacity-70 transition-opacity">
            Waynspace
          </a>

          {/* Nav */}
          <nav className="hidden sm:flex items-center gap-5">
            {[
              ["About", "#about"],
              ["Experience", "#experience"],
              ["Education", "#education"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Awards", "#awards"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <ThemeToggle />
        </div>
      </header>

      <main id="main" className="max-w-3xl mx-auto px-6 sm:px-8">
        {/* Hero */}
        <section className="pt-16 pb-10">
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold mb-3">Wei-Ting Liu</h1>
              <p className="text-base text-foreground mb-1">
                NTU Information Management + Trans-disciplinary Bachelor Degree.
              </p>
              <p className="text-sm text-muted-foreground mb-1">
                Full-stack engineer with an AI-native mindset, building data-driven products.
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Open to every chance and place to learn.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <a
                  href="/CV_Wei-Ting%20Liu.pdf"
                  download
                  className="text-sm text-foreground hover:opacity-70 transition-opacity"
                >
                  CV ↗
                </a>
                <a
                  href="mailto:wayntingliu@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  wayntingliu@gmail.com
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <a href="https://github.com/Waynting" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/waiting5928/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
                <a href="https://waynspace.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">waynspace.com</a>
                <a href="https://www.instagram.com/waiting_941208/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Instagram</a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/LIU_0457_optimized.jpg"
                alt="Portrait of Wei-Ting Liu"
                width={72}
                height={72}
                className="rounded-full"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAASABIDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBBAf/xAAgEAACAQQBBQAAAAAAAAAAAAABAgMABBEhEgUGIjFB/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwQF/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAECEQMEMf/aAAwDAQACEQMRAD8A0G5vYrW2DSyqGRgQoPPR9VavJ7WV2h4vykBBJGBVP9p1m3T+cZUOT+rXSZiCjsjKVyCAxHurKkzbSMvvOjGOKGdUEoZQSoOTvWc1ctbrtrp6pHJcM7Iq/h2cAb9UUU8eTbJ8o7P/2Q=="
                priority
              />
            </div>
          </div>
        </section>

        {/* 00 · SUMMARY */}
        <section id="about" className="mb-12 scroll-mt-20">
          <SectionHeader number="00" title="Summary" />
          <div className="space-y-3 text-sm leading-relaxed">
            <p>
              Full-stack engineer with an AI-native mindset, building data-driven products in Next.js + TypeScript.
              Experienced in end-to-end delivery — from OAuth/PostgreSQL back-ends to streaming RSC front-ends —
              with a strong foundation in A/B experimentation and measurable outcomes.
            </p>
            <p>
              Thrive in fast-paced, agile environments. B.B.A. student in Information Management and the
              Trans-disciplinary Program (College of Innovation) at NTU.
            </p>
          </div>
        </section>

        {/* 01 · EXPERIENCE */}
        <section id="experience" className="mb-12 scroll-mt-20">
          <SectionHeader number="01" title="Experience" />
          <div className="space-y-2">
            <div className="group px-4 py-4 -mx-4 hover:bg-muted/30 transition-colors rounded-sm">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <p className="text-sm font-medium">ABConvert — Software Engineer Intern</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Shopify A/B Testing SaaS</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">2026.02 – Present</span>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="pl-3 border-l border-border">Building internal ops dashboard (Next.js + TypeScript) centralizing billing, experiment lifecycle, and revenue monitoring across all merchant stores.</li>
                <li className="pl-3 border-l border-border">Use SDD to develop new features and improve existing ones.</li>
              </ul>
            </div>

            <div className="group px-4 py-4 -mx-4 hover:bg-muted/30 transition-colors rounded-sm">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <p className="text-sm font-medium">ABConvert — Startup Generalist Intern (Product/AI)</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Shopify A/B Testing SaaS</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">2025.07 – 2025.09</span>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="pl-3 border-l border-border">AI-native generalist: LLM-assisted workflow to compress spec → implementation loop; shipped Next.js + TypeScript frontend (SSR/ISR, streaming UI) at startup pace.</li>
                <li className="pl-3 border-l border-border">Iterated on experimentation UI (A/B instrumentation, sequential monitoring, CUPED) via agile cycles, validating each increment with live data.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 02 · EDUCATION */}
        <section id="education" className="mb-12 scroll-mt-20">
          <SectionHeader number="02" title="Education" />
          <div className="group px-4 py-4 -mx-4 hover:bg-muted/30 transition-colors rounded-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium">National Taiwan University</p>
                <p className="text-xs text-muted-foreground mt-0.5">B.B.A. in Information Management · Double Major: Trans-disciplinary Program (College of Innovation)</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">2024–2028</span>
            </div>
          </div>
        </section>

        {/* 03 · SKILLS */}
        <section id="skills" className="mb-12 scroll-mt-20">
          <SectionHeader number="03" title="Skills" />
          <div className="space-y-4">
            {Object.entries(skills).map(([category, list]) => (
              <div key={category} className="grid grid-cols-[120px_1fr] gap-4 text-sm px-4 py-3 -mx-4 hover:bg-muted/30 transition-colors rounded-sm">
                <span className="text-muted-foreground">{category}</span>
                <span>{list.join(", ")}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 04 · PROJECTS */}
        <section id="projects" className="mb-12 scroll-mt-20">
          <SectionHeader number="04" title="Projects" />
          <div className="space-y-2">
            <div className="px-4 py-4 -mx-4 hover:bg-muted/30 transition-colors rounded-sm">
              <div className="flex items-start justify-between gap-4 mb-2">
                <p className="text-sm font-medium">Spotify Statistic</p>
                <div className="flex gap-3 text-xs text-muted-foreground whitespace-nowrap">
                  <a href="https://github.com/Waynting/spotify-statistic" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub →</a>
                  <a href="https://spotify-statistic.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Live →</a>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Spotify analytics dashboard</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="pl-3 border-l border-border">Next.js 14 + TypeScript + PostgreSQL</li>
                <li className="pl-3 border-l border-border">OAuth 2.0 (PKCE), cron-based history sync</li>
                <li className="pl-3 border-l border-border">Multi-dimensional breakdowns by artist, genre, and time period</li>
              </ul>
            </div>

            <div className="px-4 py-4 -mx-4 hover:bg-muted/30 transition-colors rounded-sm">
              <div className="flex items-start justify-between gap-4 mb-2">
                <p className="text-sm font-medium">Price Test Tool</p>
                <div className="flex gap-3 text-xs text-muted-foreground whitespace-nowrap">
                  <a href="https://github.com/wen5928/price_test_smalltool" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub →</a>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Pricing simulator for e-commerce</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="pl-3 border-l border-border">Next.js + TypeScript</li>
                <li className="pl-3 border-l border-border">CSV upload, COGS model, OEC optimization</li>
                <li className="pl-3 border-l border-border">Conversion/revenue impact simulation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 05 · AWARDS & LEADERSHIP */}
        <section id="awards" className="mb-12 scroll-mt-20">
          <SectionHeader number="05" title="Awards & Leadership" />
          <div className="space-y-2">
            <div className="grid grid-cols-[120px_1fr] gap-4 text-sm px-4 py-3 -mx-4 hover:bg-muted/30 transition-colors rounded-sm">
              <span className="text-muted-foreground whitespace-nowrap">2024 – Present</span>
              <span>Camera Drift (NTU) — Organizer / Photographer. Cross-campus photo program.</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-4 text-sm px-4 py-3 -mx-4 hover:bg-muted/30 transition-colors rounded-sm">
              <span className="text-muted-foreground whitespace-nowrap">2025</span>
              <span>PDAO Competition — 5th overall, 1st in IM Department.</span>
            </div>
          </div>
        </section>

        {/* 06 · CONTACT */}
        <section id="contact" className="mb-16 scroll-mt-20">
          <SectionHeader number="06" title="Contact" />
          <div className="space-y-2 text-sm">
            <div className="grid grid-cols-[120px_1fr] gap-4 px-4 py-2 -mx-4 hover:bg-muted/30 transition-colors rounded-sm">
              <span className="text-muted-foreground">Email</span>
              <a href="mailto:wayntingliu@gmail.com" className="hover:opacity-70 transition-opacity">wayntingliu@gmail.com</a>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-4 px-4 py-2 -mx-4 hover:bg-muted/30 transition-colors rounded-sm">
              <span className="text-muted-foreground">LinkedIn</span>
              <a href="https://www.linkedin.com/in/waiting5928/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">Wei-Ting Liu</a>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-4 px-4 py-2 -mx-4 hover:bg-muted/30 transition-colors rounded-sm">
              <span className="text-muted-foreground">Phone</span>
              <span>+886 905 172 262</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-4 px-4 py-2 -mx-4 hover:bg-muted/30 transition-colors rounded-sm">
              <span className="text-muted-foreground">Location</span>
              <span>Taipei, Taiwan</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-4 px-4 py-2 -mx-4 hover:bg-muted/30 transition-colors rounded-sm">
              <span className="text-muted-foreground">Languages</span>
              <span>Chinese (Native), English (Professional)</span>
            </div>
            <p className="text-xs text-muted-foreground mt-4 px-4 -mx-0">
              Open to internship and full-time opportunities in SWE, AI/ML, and product engineering.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 py-6 flex items-center justify-between text-xs text-muted-foreground">
          <span>Waynspace · © 2026 Wei-Ting Liu</span>
          <div className="flex gap-4">
            <a href="https://github.com/Waynting" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/waiting5928/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="https://waynspace.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">waynspace.com</a>
            <a href="mailto:wayntingliu@gmail.com" className="hover:text-foreground transition-colors">Email</a>
          </div>
        </div>
      </footer>

      {/* JSON-LD structured data */}
      <Script id="schema-person" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Wei-Ting Liu",
          alternateName: "劉威廷",
          url: "https://waynspace.com",
          image: "https://waynspace.com/LIU_0457_optimized.jpg",
          email: "wayntingliu@gmail.com",
          jobTitle: "Software Engineer Intern",
          alumniOf: { "@type": "CollegeOrUniversity", name: "National Taiwan University", department: "Information Management" },
          sameAs: ["https://github.com/Waynting", "https://www.linkedin.com/in/waiting5928/", "https://www.instagram.com/waiting_941208/"],
          knowsLanguage: ["en", "zh-Hant-TW"],
          knowsAbout: ["A/B testing", "Next.js", "TypeScript", "PostgreSQL", "Pricing", "CUPED", "Full-stack Development"],
        })
      }} />
    </>
  );
}
