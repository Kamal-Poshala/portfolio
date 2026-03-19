export default function Footer() {
  return (
    <footer className="border-t border-[#0ea5e9]/20 mt-10 bg-white/50 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#0ea5e9]/50 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-10 flex flex-col justify-center items-center gap-4 text-center">
        <p className="text-sm font-mono text-slate-500">
          © {new Date().getFullYear()} Kamal Poshala. All systems operational.
        </p>
        <p className="text-[10px] font-mono text-[#0ea5e9] uppercase tracking-widest">
          SYSTEM ARCHITECTURE • DISTRIBUTED NETWORKS
        </p>
      </div>
    </footer>
  );
}
