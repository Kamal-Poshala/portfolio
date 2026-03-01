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
    { name: "Blog", href: "/blog" },
    { name: "Education", href: "/#education" },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#030308]/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(6,182,212,0.1)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex justify-between items-center relative">
        <Link href="/" className="font-black text-2xl tracking-tighter flex items-center gap-2 group">
          <span className="text-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity">{"["}</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]">KP.</span>
          <span className="text-purple-500 opacity-80 group-hover:opacity-100 transition-opacity">{">"}</span>
        </Link>

        {/* Cyberpunk Deco Line */}
        <div className="hidden lg:block absolute bottom-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

        <div className="hidden sm:flex space-x-8 text-sm font-bold font-mono uppercase tracking-wider">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-indigo-200/60 hover:text-cyan-400 transition-colors relative group py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            </Link>
          ))}
          <Link
            href="/resume"
            className="px-6 py-2 bg-purple-600/20 border border-purple-500/50 text-purple-200 hover:text-white hover:bg-purple-600/40 rounded shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all flex items-center gap-2"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
