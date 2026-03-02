export default function Footer() {
  return (
    <footer className="border-t border-[#1e3a8a]/30 mt-10 bg-[#0f0f14] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6]/50 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-10 flex flex-col justify-center items-center gap-4 text-center">
        <p className="text-sm font-mono text-[#9ca3af]">
          © {new Date().getFullYear()} Kamal Poshala. All systems operational.
        </p>
        <p className="text-[10px] font-mono text-[#1e3a8a] uppercase tracking-widest">
          SYSTEM ARCHITECTURE • DISTRIBUTED NETWORKS
        </p>
      </div>
    </footer>
  );
}
