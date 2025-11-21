import { cn } from "@/lib/utils";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "primary" | "accent" | "secondary";
}

export function Tag({ className, variant = "default", ...props }: TagProps) {
    const variants = {
        default: "bg-muted text-muted-foreground",
        primary: "bg-primary/20 text-primary-foreground border-primary/20",
        accent: "bg-accent/20 text-accent-foreground border-accent/20",
        secondary: "bg-secondary/20 text-secondary-foreground border-secondary/20",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors border border-transparent",
                variants[variant],
                className
            )}
            {...props}
        />
    );
}
