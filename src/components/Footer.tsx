export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 mt-10 bg-[#030308] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-10 flex flex-col justify-center items-center gap-4 text-center">
        <p className="text-sm font-mono text-cyan-500/80">
          © {new Date().getFullYear()} Kamal Poshala. All systems operational.
        </p>
        <p className="text-xs font-mono text-purple-400/50 uppercase tracking-widest">
          Built with Next.js 16, Tailwind 4 & Framer Motion
        </p>
      </div>
    </footer>
  );
}
