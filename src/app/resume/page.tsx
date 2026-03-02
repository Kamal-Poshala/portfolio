export default function ResumePage() {
  return (
    <section className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
      <div className="text-center mb-12 relative">
        <div className="flex items-center justify-center gap-4 mb-2">
          <span className="text-cyan-500 font-bold text-2xl opacity-80 select-none">{"{"}</span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-fuchsia-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            System Record
          </h1>
          <span className="text-fuchsia-500 font-bold text-2xl opacity-80 select-none">{"}"}</span>
        </div>
        <p className="text-lg text-cyan-400/80 font-mono flex items-center justify-center gap-3">
          <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-cyan-500" />
          Curriculum Vitae Access
          <span className="w-12 h-[1px] bg-gradient-to-r from-cyan-500 to-transparent" />
        </p>
      </div>

      <div className="relative group">
        {/* Glow border effects */}
        <div className="absolute inset-[-2px] rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 opacity-20 group-hover:opacity-40 blur-md transition-opacity duration-500" />
        <div className="absolute inset-0 border border-cyan-500/30 rounded-xl pointer-events-none" />

        <div className="relative w-full bg-[#080814]/90 backdrop-blur-md rounded-xl overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.15)]">
          {/* Top Decorative Header */}
          <div className="w-full h-8 bg-[#050510] border-b border-cyan-500/20 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="ml-4 text-[10px] font-mono text-cyan-500/50 uppercase tracking-widest">resume.pdf</span>
          </div>

          <iframe
            src="/Resume4.pdf"
            className="w-full h-[600px] sm:h-[800px] bg-white/5"
            title="Resume PDF"
          />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <a
          href="/Resume4.pdf"
          download="Kamal_Poshala_Resume.pdf"
          className="group relative px-6 py-3.5 bg-gradient-to-r from-cyan-600 to-blue-800 text-white font-bold tracking-widest uppercase font-mono text-sm rounded flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:shadow-[0_0_40px_rgba(6,182,212,0.8)] transition-all z-20"
        >
          <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out" />
          <span className="relative z-10 flex items-center gap-2">
            Download Databank
          </span>
        </a>
      </div>
    </section>
  );
}
