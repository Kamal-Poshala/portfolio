import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Kamal Poshala is a software engineer building full-stack and backend systems — real-time collaborative platforms, distributed REST services, and applied-AI pipelines for multilingual NLP and multimodal media.";

// The site's canonical origin. Override with NEXT_PUBLIC_SITE_URL if the domain
// changes (e.g. a custom domain); localhost is used only in local dev.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://kamal-poshala-portfolio.vercel.app");

export const metadata: Metadata = {
  title: "Kamal Poshala — Software Engineer",
  description,
  metadataBase: new URL(siteUrl),
  authors: [{ name: "Kamal Poshala" }],
  keywords: [
    "Kamal Poshala",
    "Software Engineer",
    "Full-Stack Engineer",
    "Backend Engineer",
    "Applied Machine Learning",
    "Distributed Systems",
    "NLP",
  ],
  openGraph: {
    title: "Kamal Poshala — Software Engineer",
    description,
    url: siteUrl,
    siteName: "Kamal Poshala",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Kamal Poshala — Software Engineer" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamal Poshala — Software Engineer",
    description,
    images: ["/og-image.png"],
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="grid-bg" aria-hidden />
        <Navbar />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
