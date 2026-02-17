import { getAllPostIds, getPostData } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Calendar, User, Clock, ChevronRight } from "lucide-react";
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
        <article className="min-h-screen bg-[#020205] text-slate-300 selection:bg-blue-500/30">
            {/* Subtle, Professional Ambient Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-slate-800/20 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
            </div>

            <div className="relative pt-32 pb-24 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto">
                {/* Navigation Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-slate-500 mb-12 font-medium">
                    <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link href="/blog" className="hover:text-blue-400 transition-colors">Insights</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-slate-300 truncate max-w-[200px]">SemEval Task 9</span>
                </nav>

                <header className="mb-16 border-b border-white/5 pb-16">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-8 font-mono tracking-wide">
                        <span className="flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20">
                            Task 9
                        </span>
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {postData.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            10 min read
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-[1.15] tracking-tight">
                        {postData.title}
                    </h1>

                    <p className="text-xl text-slate-400 leading-relaxed font-light">
                        {postData.description}
                    </p>

                    <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/5">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-[#020205] flex items-center justify-center text-xs font-bold text-white">RM</div>
                            <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-[#020205] flex items-center justify-center text-xs font-bold text-white">KK</div>
                            <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-[#020205] flex items-center justify-center text-xs font-bold text-white z-10">KP</div>
                        </div>
                        <span className="text-sm text-slate-400">
                            Research by <span className="text-white font-medium">Kamal Poshala</span>, Rohan Mukka, & Kushi Reddy
                        </span>
                    </div>
                </header>

                <div className="prose prose-lg md:prose-xl prose-invert max-w-none pb-20">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            h2: ({ node, ...props }) => (
                                <h2 className="text-3xl font-bold text-white mt-20 mb-8 pb-4 border-b border-white/10 tracking-tight" {...props} />
                            ),
                            h3: ({ node, ...props }) => (
                                <h3 className="text-xl font-semibold text-blue-300 mt-12 mb-4 uppercase tracking-wider" {...props} />
                            ),
                            p: ({ node, ...props }) => (
                                <p className="text-slate-300 leading-8 mb-6 font-light" {...props} />
                            ),
                            a: ({ node, ...props }) => (
                                <a className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30 hover:decoration-blue-500 transition-all font-medium" {...props} />
                            ),
                            table: ({ node, ...props }) => (
                                <div className="my-10 overflow-x-auto rounded-lg border border-white/10 bg-[#0A0A0F] shadow-xl">
                                    <table className="w-full text-left border-collapse" {...props} />
                                </div>
                            ),
                            thead: ({ node, ...props }) => (
                                <thead className="bg-white/5 text-white border-b border-white/10" {...props} />
                            ),
                            th: ({ node, ...props }) => (
                                <th className="p-4 font-semibold text-sm tracking-wider uppercase text-slate-200 whitespace-nowrap" {...props} />
                            ),
                            tr: ({ node, ...props }) => (
                                <tr className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors" {...props} />
                            ),
                            td: ({ node, ...props }) => (
                                <td className="p-4 text-slate-400 text-base border-r border-white/5 last:border-0" {...props} />
                            ),
                            blockquote: ({ node, ...props }) => (
                                <blockquote className="my-10 border-l-4 border-blue-500 pl-6 italic text-xl text-slate-200 bg-white/5 py-4 pr-4 rounded-r-lg" {...props} />
                            ),
                            ul: ({ node, ...props }) => (
                                <ul className="my-6 space-y-2 list-disc list-outside ml-6 text-slate-300" {...props} />
                            ),
                            li: ({ node, ...props }) => (
                                <li className="leading-7 pl-2" {...props} />
                            ),
                            code: ({ node, ...props }) => (
                                <code className="bg-white/10 text-blue-200 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
                            ),
                        }}
                    >
                        {postData.contentHtml}
                    </ReactMarkdown>
                </div>

                <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-slate-400 hover:text-white transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        More Research
                    </Link>
                </div>
            </div>
        </article>
    );
}
