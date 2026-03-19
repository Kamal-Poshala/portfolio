export default function ResumePage() {
  return (
    <section className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10 bg-white/50">
      <div className="mb-12 border-b border-[#0ea5e9]/20 pb-6 relative w-full">
        {/* Minimal System Marker */}
        <div className="absolute left-0 top-0 w-8 h-1 bg-[#0ea5e9]" />

        <h1 className="text-3xl md:text-4xl font-light tracking-wide text-slate-900 uppercase mt-4">
          System Record
        </h1>

        <p className="text-slate-500 font-mono text-sm mt-3 tracking-wide">
          <span className="text-[#0ea5e9] mr-2">/</span>
          Curriculum Vitae Access
        </p>
      </div>

      <div className="relative group w-full">
        {/* subtle highlight border */}
        <div className="absolute inset-0 border border-[#0ea5e9]/30 bg-white/50 pointer-events-none z-0" />

        <div className="relative z-10 w-full overflow-hidden shadow-[0_4px_30px_rgba(14,165,233,0.1)]">
          {/* Top Decorative Header */}
          <div className="w-full h-8 bg-slate-50/80 border-b border-[#0ea5e9]/30 flex items-center px-4 gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-50/800" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#0ea5e9]/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#0ea5e9]/10" />
            <span className="ml-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest">resume.pdf</span>
          </div>

          <iframe
            src="/Resume4.pdf"
            className="w-full h-[600px] sm:h-[800px] bg-white/50 border-0"
            title="Resume PDF"
          />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <a
          href="/Resume4.pdf"
          download="Kamal_Poshala_Resume.pdf"
          className="group relative px-8 py-3 bg-white/50 border border-[#0ea5e9]/40 hover:bg-[#e0f2fe] text-slate-700 hover:text-slate-900 hover:border-[#0ea5e9] font-mono text-xs tracking-widest uppercase transition-all shadow-[0_4px_20px_rgba(14,165,233,0.1)]"
        >
          <span className="flex items-center gap-3">
            <span className="text-[#0ea5e9]">&gt;</span> Download Databank
          </span>
        </a>
      </div>
    </section>
  );
}
