import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Wei-Ting Liu — Waynspace",
  description: "Portfolio of Wei-Ting Liu, Information Management student at National Taiwan University specializing in Frontend Development and UI/UX Design",
  keywords: ["Wei-Ting Liu", "劉威廷", "NTU", "Information Management", "Frontend Developer", "React", "Next.js", "UI/UX Design"],
  authors: [{ name: "Wei-Ting Liu" }],
  creator: "Wei-Ting Liu",
  openGraph: {
    title: "Wei-Ting Liu — Waynspace",
    description: "Portfolio of Wei-Ting Liu, Information Management student at National Taiwan University",
    url: "https://waynspace.com",
    siteName: "Waynspace",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://waynspace.com/LIU_0457_optimized.jpg",
        width: 1200,
        height: 630,
        alt: "Wei-Ting Liu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wei-Ting Liu — Waynspace",
    description: "Portfolio of Wei-Ting Liu, Information Management student at National Taiwan University",
    images: ["https://waynspace.com/LIU_0457_optimized.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${notoSansTC.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
