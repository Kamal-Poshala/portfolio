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

export const metadata: Metadata = {
  title: "Kamal Poshala | Full-Stack Software Developer",
  description:
    "Full-Stack Software Developer specializing in scalable web applications, backend systems, and applied machine learning.",
  metadataBase: new URL("https://kamal-portfolio.vercel.app"),
  openGraph: {
    title: "Kamal Poshala | Full-Stack Software Developer",
    description:
      "Portfolio showcasing full-stack projects, backend systems, distributed workflows, and applied machine learning.",
    url: "https://kamal-portfolio.vercel.app",
    siteName: "Kamal Poshala Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kamal Poshala Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamal Poshala | Full-Stack Software Developer",
    description:
      "Full-Stack Software Developer with backend, systems, and applied ML experience.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
