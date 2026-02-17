import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import { ArrowRight } from "lucide-react";

export default function Blog() {
    const allPostsData = getSortedPostsData();

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
                    Technical Insights
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Deep dives into engineering challenges, system architectures, and AI research.
                </p>
            </div>

            <div className="grid gap-8">
                {allPostsData.map(({ id, date, title, description }: any) => (
                    <Link href={`/blog/${id}`} key={id} className="group block">
                        <article className="bg-card/50 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 h-full flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-sm text-primary font-medium px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                                    {date}
                                </span>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {title}
                            </h2>

                            <p className="text-gray-400 leading-relaxed mb-6 flex-1">
                                {description}
                            </p>

                            <div className="flex items-center text-sm font-medium text-blue-400 group-hover:translate-x-1 transition-transform">
                                Read Article <ArrowRight className="ml-2 w-4 h-4" />
                            </div>
                        </article>
                    </Link>
                ))}

                {allPostsData.length === 0 && (
                    <div className="text-center py-12 bg-card/30 rounded-xl border border-white/5">
                        <p className="text-gray-400">No posts found yet. Check back soon!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
