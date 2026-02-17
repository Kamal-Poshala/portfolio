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
        <article className="min-h-screen bg-[#05050A]">
            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative pt-32 pb-24 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto">
                {/* Navigation Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-gray-500 mb-12">
                    <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-gray-300 truncate max-w-[200px]">{postData.title}</span>
                </nav>

                <header className="mb-16 text-center max-w-4xl mx-auto">
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 mb-8 font-mono">
                        <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                            <Calendar className="w-4 h-4 text-blue-400" />
                            {postData.date}
                        </span>
                        <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                            <User className="w-4 h-4 text-violet-400" />
                            Kamal Poshala, Rohan M., Kushi R.
                        </span>
                        <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                            <Clock className="w-4 h-4 text-emerald-400" />
                            10 min read
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
                        {postData.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                        {postData.description}
                    </p>
                </header>

                <hr className="border-white/10 mb-16 max-w-3xl mx-auto" />

                <div className="prose prose-xl prose-invert max-w-4xl mx-auto pb-20">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            h2: ({ node, ...props }) => (
                                <div className="mt-20 mb-8 border-b border-white/10 pb-4">
                                    <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3" {...props} />
                                    <div className="h-1 w-20 bg-blue-500 rounded-full mt-4" />
                                </div>
                            ),
                            h3: ({ node, ...props }) => (
                                <h3 className="text-2xl font-semibold text-blue-200 mt-12 mb-6 flex items-center gap-2" {...props} />
                            ),
                            p: ({ node, ...props }) => (
                                <p className="text-gray-300 leading-8 mb-6 text-lg font-light tracking-wide" {...props} />
                            ),
                            table: ({ node, ...props }) => (
                                <div className="my-10 overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-[#0F0F15]">
                                    <table className="w-full border-collapse" {...props} />
                                </div>
                            ),
                            thead: ({ node, ...props }) => (
                                <thead className="bg-white/5 text-white" {...props} />
                            ),
                            th: ({ node, ...props }) => (
                                <th className="p-5 text-left font-semibold border-b border-white/10 text-sm tracking-wider uppercase text-blue-300" {...props} />
                            ),
                            tr: ({ node, ...props }) => (
                                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors" {...props} />
                            ),
                            td: ({ node, ...props }) => (
                                <td className="p-5 text-gray-300 text-base" {...props} />
                            ),
                            blockquote: ({ node, ...props }) => (
                                <blockquote className="my-8 border-l-4 border-blue-500 bg-blue-500/10 p-6 rounded-r-lg italic text-lg text-blue-100" {...props} />
                            ),
                            ul: ({ node, ...props }) => (
                                <ul className="my-6 space-y-3 list-disc list-inside text-gray-300" {...props} />
                            ),
                            li: ({ node, ...props }) => (
                                <li className="pl-2 leading-7" {...props} />
                            ),
                        }}
                    >
                        {postData.contentHtml}
                    </ReactMarkdown>
                </div>

                <div className="max-w-3xl mx-auto mt-20 pt-10 border-t border-white/10">
                    <div className="flex justify-between items-center">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-gray-400 hover:text-white transition-colors group"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to All Insights
                        </Link>

                        <div className="flex gap-4">
                            {/* Placeholder for social share if needed */}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
