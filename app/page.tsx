import Image from "next/image";
import Script from "next/script";
import { ThemeToggle } from "@/components/theme-toggle";


const skills = {
  Stack: ["TypeScript", "React", "Next.js", "PostgreSQL", "Tailwind", "Python", "PyTorch", "C++"],
  Tools: ["REST/GraphQL", "Git", "Service Design", "Design Thinking"],
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
              ["Research", "#research"],
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
                src="/160041.jpg"
                alt="Portrait of Wei-Ting Liu"
                width={120}
                height={120}
                className="rounded-xl object-cover"
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
              Full-stack engineer moving into reinforcement learning R&D, currently designing a dual-loop RL
              system at ABConvert that trains agents to optimize Shopify stores while closing the sim-to-real gap.
              In parallel, researching multi-agent RL for decentralized epidemic surveillance, benchmarking MARL
              against supervised baselines across 26 simulated regions.
            </p>
            <p>
              Grounded in shipped product work: migrated a 10-page marketing site to Next.js at a 97 Lighthouse
              SEO score, built internal analytics dashboards that cut manual metric lookups by ~70%, and led AI
              adoption workshops that moved 80% of a research center&apos;s staff from chat-based AI use to building
              their own tools. B.B.A. student in Information Management and the Trans-disciplinary Program
              (College of Innovation) at NTU.
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
                  <p className="text-sm font-medium">ABConvert — Reinforcement Learning R&D Intern</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Shopify A/B Testing SaaS</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">2026.07 – Present</span>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="pl-3 border-l border-border">Designed a dual-loop RL system that trains agents to optimize Shopify stores, aiming to build an accurate, real-world-calibrated simulator that closes the sim-to-real gap.</li>
              </ul>
            </div>

            <div className="group px-4 py-4 -mx-4 hover:bg-muted/30 transition-colors rounded-sm">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <p className="text-sm font-medium">NTU Insight Center — AI Intern</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">2026.02 – 2026.07</span>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="pl-3 border-l border-border">Developed an internal service-design product and led AI adoption workshops, moving 80% of staff from chat-based AI use to building their own website products.</li>
              </ul>
            </div>

            <div className="group px-4 py-4 -mx-4 hover:bg-muted/30 transition-colors rounded-sm">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <p className="text-sm font-medium">ABConvert — Software Engineer Intern</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Shopify A/B Testing SaaS</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">2026.02 – 2026.06</span>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="pl-3 border-l border-border">Migrated abconvert.io (10 pages) from Webflow to a self-hosted Next.js app, reaching a 97 Lighthouse SEO score and enabling custom interactive components.</li>
                <li className="pl-3 border-l border-border">Built internal dashboard features (experiment research, visualization, analysis) from a cross-team needs survey, eliminating ~70% of manual metric lookups for Customer Success and the CEO.</li>
              </ul>
            </div>

            <div className="group px-4 py-4 -mx-4 hover:bg-muted/30 transition-colors rounded-sm">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <p className="text-sm font-medium">ABConvert — Startup Generalist Summer Intern (Product/AI)</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Shopify A/B Testing SaaS</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">2025.07 – 2025.09</span>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="pl-3 border-l border-border">AI-native generalist: LLM-assisted workflow to compress spec → implementation loop; shipped Next.js + TypeScript frontend (SSR/ISR, streaming UI) at startup pace.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 02 · RESEARCH */}
        <section id="research" className="mb-12 scroll-mt-20">
          <SectionHeader number="02" title="Research Experience" />
          <div className="group px-4 py-4 -mx-4 hover:bg-muted/30 transition-colors rounded-sm">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <p className="text-sm font-medium">Multi-Agent RL for Decentralized Epidemic Surveillance</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Advised by{" "}
                  <a href="https://sites.google.com/view/hsuanweilee/home" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline underline-offset-2">
                    Wayne Lee
                  </a>
                </p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">2026.02 – Present</span>
            </div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li className="pl-3 border-l border-border">Built a CTDE multi-agent RL framework (MAPPO/QMIX) modeling Brazil&apos;s 26 states as agents alerting on dengue from case counts and Google Trends, benchmarked against an information-parity baseline and a supervised oracle.</li>
              <li className="pl-3 border-l border-border">Found MARL systematically underperforms the baseline across algorithm, reward, cost, and environment variations; ruled out five candidate explanations, isolating the bottleneck to RL sample efficiency rather than the surveillance signal. Manuscript in preparation, targeting Oct 2026.</li>
            </ul>
          </div>
        </section>

        {/* 03 · EDUCATION */}
        <section id="education" className="mb-12 scroll-mt-20">
          <SectionHeader number="03" title="Education" />
          <div className="group px-4 py-4 -mx-4 hover:bg-muted/30 transition-colors rounded-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium">National Taiwan University</p>
                <p className="text-xs text-muted-foreground mt-0.5">B.B.A. in Information Management · Double Major: Trans-disciplinary Program (College of Innovation) · Leadership Program</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">2024 – Present</span>
            </div>
          </div>
        </section>

        {/* 04 · SKILLS */}
        <section id="skills" className="mb-12 scroll-mt-20">
          <SectionHeader number="04" title="Skills" />
          <div className="space-y-4">
            {Object.entries(skills).map(([category, list]) => (
              <div key={category} className="grid grid-cols-[120px_1fr] gap-4 text-sm px-4 py-3 -mx-4 hover:bg-muted/30 transition-colors rounded-sm">
                <span className="text-muted-foreground">{category}</span>
                <span>{list.join(", ")}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 05 · PROJECTS */}
        <section id="projects" className="mb-12 scroll-mt-20">
          <SectionHeader number="05" title="Projects" />
          <div className="space-y-2">
            <div className="px-4 py-4 -mx-4 hover:bg-muted/30 transition-colors rounded-sm">
              <div className="flex items-start justify-between gap-4 mb-2">
                <p className="text-sm font-medium">Spotify GuessSong</p>
                <div className="flex gap-3 text-xs text-muted-foreground whitespace-nowrap">
                  <a href="https://github.com/Waynting/spotify-song-guess_web" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub →</a>
                  <a href="https://www.guessong.app/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Live →</a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Next.js 15, TypeScript, React, Tailwind CSS, Spotify Web API, shadcn/ui. Real-time multiplayer music guessing game with 60,000+ monthly active users; host pastes any Spotify playlist URL and the app fetches tracks via Spotify Client Credentials, running a round-by-round quiz with audio clips, live scoring, and answer validation.</p>
            </div>

            <div className="px-4 py-4 -mx-4 hover:bg-muted/30 transition-colors rounded-sm">
              <div className="flex items-start justify-between gap-4 mb-2">
                <p className="text-sm font-medium">ABConvert.io Website Migration</p>
                <div className="flex gap-3 text-xs text-muted-foreground whitespace-nowrap">
                  <a href="https://www.abconvert.io/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Live →</a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Next.js, TypeScript. Migrated abconvert.io (10 pages) from Webflow to a self-hosted Next.js app, reaching a 97 Lighthouse SEO score and enabling custom interactive components.</p>
            </div>
          </div>
        </section>

        {/* 06 · AWARDS & LEADERSHIP */}
        <section id="awards" className="mb-12 scroll-mt-20">
          <SectionHeader number="06" title="Awards & Leadership" />
          <div className="space-y-2">
            <div className="grid grid-cols-[120px_1fr] gap-4 text-sm px-4 py-3 -mx-4 hover:bg-muted/30 transition-colors rounded-sm">
              <span className="text-muted-foreground whitespace-nowrap">2026.07 – 2027.06</span>
              <span>NTU Information Management Student Association — Vice President.</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-4 text-sm px-4 py-3 -mx-4 hover:bg-muted/30 transition-colors rounded-sm">
              <span className="text-muted-foreground whitespace-nowrap">2025</span>
              <span>PDAO Competition — 5th overall, 1st in IM Department.</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-4 text-sm px-4 py-3 -mx-4 hover:bg-muted/30 transition-colors rounded-sm">
              <span className="text-muted-foreground whitespace-nowrap">2024 – Present</span>
              <span>Camera Drift (NTU) — Organizer / Photographer. Cross-campus photo program.</span>
            </div>
          </div>
        </section>

        {/* 07 · CONTACT */}
        <section id="contact" className="mb-16 scroll-mt-20">
          <SectionHeader number="07" title="Contact" />
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
          image: "https://waynspace.com/160041.jpg",
          email: "wayntingliu@gmail.com",
          jobTitle: "Reinforcement Learning R&D Intern",
          alumniOf: { "@type": "CollegeOrUniversity", name: "National Taiwan University", department: "Information Management" },
          sameAs: ["https://github.com/Waynting", "https://www.linkedin.com/in/waiting5928/", "https://www.instagram.com/waiting_941208/"],
          knowsLanguage: ["en", "zh-Hant-TW"],
          knowsAbout: ["Reinforcement Learning", "A/B testing", "Next.js", "TypeScript", "PostgreSQL", "Python", "CUPED", "Full-stack Development"],
        })
      }} />
    </>
  );
}
