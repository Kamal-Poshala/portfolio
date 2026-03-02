import { getAllPostIds, getPostData } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Calendar, Clock, ChevronRight, Terminal } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static params for all blog posts
export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths.map((path) => ({
        slug: path.params.slug,
    }));
}

// Fetch data for a specific post
async function getData(slug: string) {
    try {
        const postData = await getPostData(slug);
        return postData;
    } catch (error) {
        return null;
    }
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postData = await getData(slug);

    if (!postData) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-[#0f0f14] text-[#d1d5db] selection:bg-[#3b82f6]/30 px-4 sm:px-6 lg:px-8 pb-20">
            {/* Ambient Background Structure */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
                <div className="absolute left-0 top-0 w-[1px] h-full bg-[#1e3a8a]/20 ml-[5%]" />
                <div className="absolute right-0 top-0 w-[1px] h-full bg-[#1e3a8a]/20 mr-[5%]" />
            </div>

            <div className="relative z-10 pt-24 pb-12 max-w-4xl mx-auto">
                {/* Navigation Breadcrumb */}
                <nav className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#9ca3af] mb-12">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <ChevronRight className="w-3 h-3 text-[#1e3a8a]" />
                    <Link href="/blog" className="hover:text-white transition-colors">Insights</Link>
                    <ChevronRight className="w-3 h-3 text-[#1e3a8a]" />
                    <span className="text-[#3b82f6] truncate max-w-[200px]">SemEval Task 9</span>
                </nav>

                <header className="mb-12 border-b border-[#1e3a8a]/30 pb-10 relative">
                    {/* Log Marker */}
                    <div className="absolute left-[-24px] top-2 w-1.5 h-1.5 bg-[#3b82f6] shadow-[0_0_8px_rgba(59,130,246,0.8)]" />

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-widest text-[#9ca3af] mb-6">
                        <span className="flex items-center gap-2 px-2 py-1 bg-[#1e2029] text-[#3b82f6] border border-[#1e3a8a]">
                            Task 9
                        </span>
                        <span className="flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            {postData.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="w-3 h-3" />
                            10 min read
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-light text-white mb-6 leading-tight tracking-wide">
                        {postData.title}
                    </h1>

                    <p className="text-base md:text-xl text-[#9ca3af] leading-relaxed font-light border-l-2 border-[#1e3a8a] pl-4">
                        {postData.description}
                    </p>

                    <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#1e3a8a]/20">
                        <div className="flex -space-x-1">
                            <div className="w-6 h-6 border border-[#1e3a8a] bg-[#1e2029] flex items-center justify-center text-[8px] font-mono text-[#9ca3af]">RM</div>
                            <div className="w-6 h-6 border border-[#1e3a8a] bg-[#1e2029] flex items-center justify-center text-[8px] font-mono text-[#9ca3af]">KK</div>
                            <div className="w-6 h-6 border border-[#3b82f6] bg-[#0a0a0f] flex items-center justify-center text-[8px] font-mono text-[#3b82f6] z-10">KP</div>
                        </div>
                        <span className="text-xs font-mono text-[#9ca3af] uppercase tracking-wide">
                            Authors: <span className="text-white">Kamal Poshala</span>, Rohan Mukka, Kushi Reddy
                        </span>
                    </div>
                </header>

                <div className="prose prose-invert prose-p:font-light prose-p:text-[#d1d5db] max-w-none">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            h2: ({ node, ...props }) => (
                                <h2 className="text-2xl font-light text-white mt-16 mb-6 pb-2 border-b border-[#1e3a8a]/30 uppercase tracking-widest flex items-center gap-3" {...props}>
                                    <Terminal className="w-5 h-5 text-[#3b82f6] inline" />
                                    {props.children}
                                </h2>
                            ),
                            h3: ({ node, ...props }) => (
                                <h3 className="text-lg font-medium text-[#3b82f6] mt-10 mb-4 uppercase tracking-wider" {...props} />
                            ),
                            p: ({ node, ...props }) => (
                                <p className="leading-relaxed mb-6" {...props} />
                            ),
                            a: ({ node, ...props }) => (
                                <a className="text-[#3b82f6] hover:text-[#e0e7ff] underline decoration-[#1e3a8a] hover:decoration-[#3b82f6] transition-colors" {...props} />
                            ),
                            table: ({ node, ...props }) => (
                                <div className="my-8 overflow-x-auto border border-[#1e3a8a]/40 bg-[#0a0a0f]">
                                    <table className="w-full text-left border-collapse text-sm font-mono" {...props} />
                                </div>
                            ),
                            thead: ({ node, ...props }) => (
                                <thead className="bg-[#1e2029] text-[#9ca3af] border-b border-[#1e3a8a]/40" {...props} />
                            ),
                            th: ({ node, ...props }) => (
                                <th className="p-4 font-normal tracking-widest uppercase" {...props} />
                            ),
                            tr: ({ node, ...props }) => (
                                <tr className="border-b border-[#1e3a8a]/20 last:border-0 hover:bg-[#1e3a8a]/10 transition-colors" {...props} />
                            ),
                            td: ({ node, ...props }) => (
                                <td className="p-4 text-[#d1d5db] border-r border-[#1e3a8a]/20 last:border-r-0" {...props} />
                            ),
                            blockquote: ({ node, ...props }) => (
                                <blockquote className="my-8 border-l-2 border-[#3b82f6] pl-6 text-[#9ca3af] bg-[#0a0a0f] py-4 pr-4 text-sm font-mono" {...props} />
                            ),
                            ul: ({ node, ...props }) => (
                                <ul className="my-6 space-y-2 list-none ml-2 text-[#d1d5db]" {...props} />
                            ),
                            li: ({ node, ...props }) => (
                                <li className="leading-relaxed flex before:content-['>'] before:mr-3 before:text-[#3b82f6] before:font-mono" {...props} />
                            ),
                            code: ({ node, ...props }) => (
                                <code className="bg-[#1e2029] border border-[#1e3a8a]/40 text-[#w0e7ff] px-1.5 py-0.5 text-xs font-mono" {...props} />
                            ),
                        }}
                    >
                        {postData.contentHtml}
                    </ReactMarkdown>
                </div>

                <div className="mt-16 pt-8 border-t border-[#1e3a8a]/30 flex justify-between items-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-[#9ca3af] hover:text-white transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform text-[#3b82f6]" />
                        Return to Index
                    </Link>
                </div>
            </div>
        </article>
    );
}
