import { books } from "@/data/books";
import { notFound, redirect } from "next/navigation";
import { Header } from "@/components/layout/header";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";

interface PageProps {
    params: Promise<{ slug: string; chapter: string }>;
}

export default async function ReaderPage({ params }: PageProps) {
    const { slug, chapter } = await params;
    const book = books.find((b) => b.slug === slug);
    const chapterIndex = parseInt(chapter);

    if (!book || isNaN(chapterIndex) || chapterIndex < 1 || chapterIndex > book.totalChapters) {
        notFound();
    }

    const prevChapter = chapterIndex > 1 ? chapterIndex - 1 : null;
    const nextChapter = chapterIndex < book.totalChapters ? chapterIndex + 1 : null;

    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden bg-background">
            {/* Background Gradients - Softer for reading */}
            <div className="fixed inset-0 -z-10 opacity-50">
                <div className={`absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br ${book.coverColor} opacity-20 blur-[120px]`} />
            </div>

            <Header />

            <main className="flex-1 pt-24 pb-16 px-4 md:px-6">
                <div className="max-w-3xl mx-auto relative">
                    {/* Navigation Bar */}
                    <div className="flex items-center justify-between mb-8 sticky top-24 z-10 py-4">
                        <Button variant="ghost" size="sm" asChild className="backdrop-blur-md bg-white/30 dark:bg-black/30">
                            <Link href={`/books/${book.slug}`}>
                                <ChevronLeft className="mr-2 h-4 w-4" />
                                Back
                            </Link>
                        </Button>
                        <span className="text-sm font-medium text-muted-foreground">
                            Chapter {chapterIndex} of {book.totalChapters}
                        </span>
                    </div>

                    {/* Content Area */}
                    <GlassPanel intensity="low" className="p-8 md:p-12 min-h-[60vh]">
                        <h1 className="text-3xl font-serif font-bold mb-8 text-foreground">
                            Chapter {chapterIndex}
                        </h1>

                        <div className="prose prose-lg dark:prose-invert max-w-none font-serif leading-relaxed text-foreground/90">
                            <p>
                                eta hochhe placeholder text, bujhli? <strong>{book.title}</strong>, Chapter {chapterIndex}.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                    </GlassPanel>

                    {/* Chapter Navigation */}
                    <div className="flex items-center justify-between mt-8">
                        {prevChapter ? (
                            <Button variant="outline" asChild>
                                <Link href={`/read/${book.slug}/${prevChapter}`}>
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Previous Chapter
                                </Link>
                            </Button>
                        ) : (
                            <div /> /* Spacer */
                        )}

                        {nextChapter ? (
                            <Button asChild>
                                <Link href={`/read/${book.slug}/${nextChapter}`}>
                                    Next Chapter
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        ) : (
                            <Button variant="outline" asChild>
                                <Link href={`/books/${book.slug}`}>
                                    Finish Book
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
