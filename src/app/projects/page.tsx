import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-white/50">
      <h1 className="text-3xl font-light mb-8 text-center text-slate-900 border-b border-[#0ea5e9]/20 pb-4">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-50/80 border border-[#0ea5e9]/20 rounded-sm p-6 hover:border-[#0ea5e9]/50 hover:shadow-[0_4px_20px_rgba(14,165,233,0.1)] transition-all"
          >
            <h2 className="text-xl font-medium mb-1 text-slate-900">
              {project.title}
            </h2>

            <p className="text-xs font-mono tracking-widest text-[#0ea5e9] uppercase mb-4">
              {project.category}
            </p>

            <p className="text-slate-600 font-light text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-[10px] uppercase font-mono text-slate-500 border border-[#0ea5e9]/20 bg-white/50"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
