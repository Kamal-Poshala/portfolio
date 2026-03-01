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
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#080314]/80 backdrop-blur-xl border-b border-fuchsia-500/20 shadow-[0_4px_30px_rgba(217,70,239,0.15)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex justify-between items-center relative">
        <Link href="/" className="font-black text-2xl tracking-tighter flex items-center gap-2 group">
          <span className="text-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse">{"["}</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-500 drop-shadow-[0_0_10px_rgba(217,70,239,0.6)]">KP.</span>
          <span className="text-fuchsia-500 opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(217,70,239,0.8)] animate-pulse">{"]"}</span>
        </Link>

        {/* Cyberpunk Deco Line */}
        <div className="hidden lg:block absolute bottom-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/80 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.8)]" />

        <div className="hidden sm:flex space-x-8 text-sm font-bold font-mono uppercase tracking-wider">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-indigo-200/60 hover:text-cyan-400 transition-colors relative group py-2"
            >
              <span className="group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">{item.name}</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-fuchsia-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 shadow-[0_0_10px_rgba(217,70,239,0.8)]" />
            </Link>
          ))}
          <Link
            href="/resume"
            className="px-6 py-2 bg-fuchsia-600/20 border border-fuchsia-500/50 text-fuchsia-200 hover:text-white hover:bg-fuchsia-600/40 rounded shadow-[0_0_15px_rgba(217,70,239,0.3)] hover:shadow-[0_0_25px_rgba(217,70,239,0.6)] transition-all flex items-center gap-2"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
