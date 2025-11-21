"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

interface GlassPanelProps extends HTMLMotionProps<"div"> {
    intensity?: "low" | "medium" | "high";
    border?: boolean;
}

import * as React from "react";

export function GlassPanel({
    className,
    children,
    intensity = "medium",
    border = true,
    ...props
}: GlassPanelProps & { children?: React.ReactNode }) {
    const intensityStyles = {
        low: "bg-white/40 dark:bg-white/5 backdrop-blur-md",
        medium: "bg-white/60 dark:bg-white/10 backdrop-blur-xl saturate-150",
        high: "bg-white/80 dark:bg-white/15 backdrop-blur-2xl saturate-200",
    };

    return (
        <motion.div
            className={cn(
                "relative overflow-hidden rounded-3xl transition-colors",
                intensityStyles[intensity],
                border && "border border-white/20 dark:border-white/10 shadow-sm",
                className
            )}
            {...props}
        >
            {/* Inner rim light for extra glass feel */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20 dark:ring-white/5" />
            {children}
        </motion.div>
    );
}
