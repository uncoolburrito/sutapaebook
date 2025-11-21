"use client";

import { GlassPanel } from "@/components/ui/glass-panel";
import { cn } from "@/lib/utils";
import { HTMLMotionProps } from "framer-motion";
import * as React from "react";

interface CardProps extends HTMLMotionProps<"div"> {
    hoverEffect?: boolean;
}

export function Card({ className, children, hoverEffect = true, ...props }: CardProps & { children?: React.ReactNode }) {
    return (
        <GlassPanel
            className={cn(
                "p-6",
                hoverEffect && "hover:bg-white/80 dark:hover:bg-white/15 transition-colors duration-300",
                className
            )}
            intensity="low"
            {...props}
        >
            {children}
        </GlassPanel>
    );
}
