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
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/50/80 backdrop-blur-md border-b border-[#0ea5e9]/20 shadow-[0_4px_30px_rgba(14,165,233,0.05)]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex justify-between items-center relative">
        <Link href="/" className="font-mono text-xl tracking-tighter flex items-center gap-2 group text-[#0ea5e9]">
          <span className="opacity-50 group-hover:opacity-100 transition-opacity">{"//"}</span>
          <span className="text-slate-900 font-medium tracking-wide group-hover:text-[#0ea5e9] transition-colors">K. POSHALA</span>
        </Link>

        {/* Minimal System Line */}
        <div className="hidden lg:block absolute bottom-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-[#0ea5e9]/50 to-transparent" />

        <div className="hidden sm:flex space-x-8 text-[11px] font-mono uppercase tracking-widest text-slate-500">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-slate-900 transition-colors relative group py-2 flex items-center gap-2"
            >
              <span className="text-[#0ea5e9] opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
              <span>{item.name}</span>
            </Link>
          ))}
          <Link
            href="/resume"
            className="px-6 py-1.5 border border-[#0ea5e9]/40 text-slate-900 hover:bg-[#e0f2fe] hover:border-[#0ea5e9] transition-all flex items-center justify-center font-medium ml-4"
          >
            SYS. RESUME
          </Link>
        </div>
      </div>
    </nav>
  );
}
