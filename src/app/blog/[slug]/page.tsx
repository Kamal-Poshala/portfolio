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

                <div className="prose prose-xl prose-invert max-w-3xl mx-auto
                    prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
                    prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:border-l-4 prose-h2:border-blue-500 prose-h2:pl-6
                    prose-h3:text-2xl prose-h3:text-blue-200 prose-h3:mt-12
                    prose-p:text-gray-300 prose-p:leading-8 prose-p:mb-8 prose-p:font-light
                    prose-a:text-blue-400 prose-a:font-medium prose-a:no-underline hover:prose-a:text-blue-300 hover:prose-a:underline transition-color
                    prose-strong:text-white prose-strong:font-semibold
                    prose-ul:list-disc prose-ul:pl-0 prose-ul:my-8
                    prose-li:text-gray-300 prose-li:leading-8 prose-li:mb-4 prose-li:ml-6
                    prose-table:w-full prose-table:my-12 prose-table:border-separate prose-table:border-spacing-0 prose-table:rounded-xl prose-table:overflow-hidden prose-table:border prose-table:border-white/10
                    prose-th:bg-white/5 prose-th:text-white prose-th:font-semibold prose-th:p-4 prose-th:text-left prose-th:border-b prose-th:border-white/10
                    prose-td:p-4 prose-td:border-b prose-td:border-white/5 prose-td:text-gray-300
                    prose-pre:bg-[#0F0F15] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-pre:p-6 prose-pre:shadow-2xl
                    prose-blockquote:border-l-4 prose-blockquote:border-violet-500 prose-blockquote:bg-violet-500/5 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-blockquote:text-gray-200 prose-blockquote:not-italic"
                >
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
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
