import { getAllPostIds, getPostData } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Calendar, User } from "lucide-react";
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
        <article className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
            <Link
                href="/blog"
                className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group"
            >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
            </Link>

            <header className="mb-12">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {postData.date}
                    </span>
                    <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        Kamal Poshala
                    </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    {postData.title}
                </h1>

                <p className="text-xl text-gray-400 leading-relaxed border-l-4 border-primary pl-6 italic">
                    {postData.description}
                </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none 
                prose-headings:text-white prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl 
                prose-p:text-gray-300 prose-p:leading-relaxed 
                prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1 prose-code:rounded
                prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-300
                prose-pre:bg-card/50 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl"
            >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {postData.contentHtml}
                </ReactMarkdown>
            </div>

            <hr className="my-12 border-white/10" />

            <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Kamal Poshala. All rights reserved.
                </p>
                <Link
                    href="/contact"
                    className="text-primary hover:text-white transition-colors text-sm font-medium"
                >
                    Discuss this project →
                </Link>
            </div>
        </article>
    );
}
