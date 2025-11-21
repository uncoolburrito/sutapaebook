"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { GlassPanel } from "@/components/ui/glass-panel";
import { cn } from "@/lib/utils";

export function Header() {
    const pathname = usePathname();
    const isReader = pathname.startsWith("/read");

    return (
        <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none">
            <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
                <Link href="/" className="group">
                    <GlassPanel
                        intensity="low"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-white/60 dark:hover:bg-white/10 transition-colors"
                    >
                        <BookOpen className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                        <span className="font-semibold tracking-tight hidden sm:inline-block">
                            Wisdom Library
                        </span>
                    </GlassPanel>
                </Link>

                <div className="flex items-center gap-2">
                    {!isReader && (
                        <nav className="hidden md:flex items-center gap-2 mr-2">
                            {/* Add nav links here if needed */}
                        </nav>
                    )}
                    <GlassPanel intensity="low" className="p-1 rounded-full">
                        <ThemeToggle />
                    </GlassPanel>
                </div>
            </div>
        </header>
    );
}
