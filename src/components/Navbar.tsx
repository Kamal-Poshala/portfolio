"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navItems = [
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Education", href: "/#education" },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
          KP.
        </Link>

        <div className="hidden sm:flex space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/resume"
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
