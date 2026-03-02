"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "About", href: "/#about" },
    { name: "Modules", href: "/#projects" },
    { name: "Metrics", href: "/#experience" },
    { name: "Research", href: "/#research" },
    { name: "Blueprints", href: "/#skills" },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#0f0f14]/80 backdrop-blur-md border-b border-[#1e3a8a]/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex justify-between items-center relative">
        <Link href="/" className="font-mono text-xl tracking-tighter flex items-center gap-2 group text-[#3b82f6]">
          <span className="opacity-50 group-hover:opacity-100 transition-opacity">{"//"}</span>
          <span className="text-white font-medium tracking-wide group-hover:text-[#e0e7ff] transition-colors">K. POSHALA</span>
        </Link>

        {/* Minimal System Line */}
        <div className="hidden lg:block absolute bottom-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6]/50 to-transparent" />

        <div className="hidden sm:flex space-x-8 text-[11px] font-mono uppercase tracking-widest text-[#9ca3af]">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-white transition-colors relative group py-2 flex items-center gap-2"
            >
              <span className="text-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
              <span>{item.name}</span>
            </Link>
          ))}
          <Link
            href="/resume"
            className="px-6 py-1.5 border border-[#1e3a8a] text-[#ffffff] hover:bg-[#3b82f6]/10 hover:border-[#3b82f6] transition-all flex items-center justify-center font-medium ml-4"
          >
            SYS. RESUME
          </Link>
        </div>
      </div>
    </nav>
  );
}
