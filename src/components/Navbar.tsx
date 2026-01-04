"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? "text-black font-medium"
      : "text-gray-600 hover:text-black";

  return (
    <nav className="bg-white border-b">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="font-semibold text-lg">
          Kamal Poshala
        </Link>

        <div className="flex space-x-4 sm:space-x-6 text-sm">
          <Link href="/projects" className={linkClass("/projects")}>
            Projects
          </Link>
          <Link href="/resume" className={linkClass("/resume")}>
            Resume
          </Link>
          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
