export default function ResumePage() {
  return (
    <section className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
      <div className="mb-12 border-b border-[#1e3a8a]/30 pb-6 relative">
        {/* Minimal System Marker */}
        <div className="absolute left-0 top-0 w-8 h-1 bg-[#3b82f6]" />

        <h1 className="text-3xl md:text-4xl font-light tracking-wide text-white uppercase mt-4">
          System Record
        </h1>

        <p className="text-[#9ca3af] font-mono text-sm mt-3 tracking-wide">
          <span className="text-[#3b82f6] mr-2">/</span>
          Curriculum Vitae Access
        </p>
      </div>

      <div className="relative group">
        {/* subtle highlight border */}
        <div className="absolute inset-0 border border-[#1e3a8a]/40 bg-[#0a0a0f] pointer-events-none z-0" />

        <div className="relative z-10 w-full overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          {/* Top Decorative Header */}
          <div className="w-full h-8 bg-[#1e2029] border-b border-[#1e3a8a]/50 flex items-center px-4 gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]/10" />
            <span className="ml-4 text-[10px] font-mono text-[#9ca3af] uppercase tracking-widest">resume.pdf</span>
          </div>

          <iframe
            src="/Resume4.pdf"
            className="w-full h-[600px] sm:h-[800px] bg-white"
            title="Resume PDF"
          />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <a
          href="/Resume4.pdf"
          download="Kamal_Poshala_Resume.pdf"
          className="group relative px-8 py-3 bg-[#0f0f14] border border-[#1e3a8a]/50 hover:bg-[#1e3a8a]/20 text-[#d1d5db] hover:text-[#ffffff] font-mono text-xs tracking-widest uppercase transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
        >
          <span className="flex items-center gap-3">
            <span className="text-[#3b82f6]">&gt;</span> Download Databank
          </span>
        </a>
      </div>
    </section>
  );
}
