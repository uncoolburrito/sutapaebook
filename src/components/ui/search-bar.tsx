"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { GlassPanel } from "@/components/ui/glass-panel";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function SearchBar() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("q", term);
        } else {
            params.delete("q");
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <GlassPanel intensity="low" className="flex items-center px-4 py-1 rounded-full w-full max-w-md mx-auto">
            <Search className="h-4 w-4 text-muted-foreground mr-2" />
            <Input
                type="search"
                placeholder="Search books, authors..."
                className="border-none bg-transparent shadow-none focus-visible:ring-0 px-0 h-9"
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get("q")?.toString()}
            />
        </GlassPanel>
    );
}
