import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import { ArrowRight, Terminal } from "lucide-react";

export default function Blog() {
    const allPostsData = getSortedPostsData();

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-[#0f0f14]">
            <div className="mb-16 border-b border-[#1e3a8a]/30 pb-6 relative">
                {/* Minimal System Marker */}
                <div className="absolute left-0 top-0 w-8 h-1 bg-[#3b82f6]" />

                <h1 className="text-3xl md:text-4xl font-light uppercase tracking-wide text-white mt-4 flex items-center gap-3">
                    <Terminal className="w-6 h-6 text-[#3b82f6]" />
                    Technical Insights
                </h1>
                <p className="text-[#9ca3af] font-mono text-sm mt-3 tracking-wide border-l-2 border-[#1e3a8a] pl-3">
                    Deep dives into engineering challenges, system architectures, and AI research.
                </p>
            </div>

            <div className="grid gap-6">
                {allPostsData.map(({ id, date, title, description }: any) => (
                    <Link href={`/blog/${id}`} key={id} className="group block">
                        <article className="bg-[#0a0a0f] border border-[#1e3a8a]/40 shadow-[0_4px_20px_rgba(0,0,0,0.5)] p-6 md:p-8 hover:border-[#3b82f6]/50 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                            {/* Hover Border Glow effect */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#3b82f6] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-mono text-[#9ca3af] uppercase tracking-widest border border-[#1e3a8a] px-2 py-1 bg-[#1e2029]">
                                    {date}
                                </span>
                            </div>

                            <h2 className="text-xl md:text-2xl font-medium text-white mb-3 group-hover:text-[#e0e7ff] transition-colors leading-tight">
                                {title}
                            </h2>

                            <p className="text-[#d1d5db] font-light text-sm leading-relaxed mb-6 flex-1 max-w-2xl">
                                {description}
                            </p>

                            <div className="flex items-center text-xs font-mono uppercase tracking-widest text-[#3b82f6] group-hover:text-[#e0e7ff] transition-colors">
                                INIT READ <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </article>
                    </Link>
                ))}

                {allPostsData.length === 0 && (
                    <div className="text-center py-12 bg-[#0a0a0f] border border-[#1e3a8a]/30">
                        <p className="text-[#9ca3af] font-mono text-sm">NO_RECORDS_FOUND</p>
                    </div>
                )}
            </div>
        </div>
    );
}
