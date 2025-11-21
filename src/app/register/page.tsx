"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlassPanel } from "@/components/ui/glass-panel";
import Link from "next/link";
import { UserPlus } from "lucide-react";

export default function RegisterPage() {
    const { login } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        // Store new user in localStorage (simulated DB)
        const storedUsers = localStorage.getItem("ebook-users");
        const users = storedUsers ? JSON.parse(storedUsers) : [];

        if (users.find((u: any) => u.email === email)) {
            setError("User already exists");
            return;
        }

        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem("ebook-users", JSON.stringify(users));

        // Auto login
        login({ name, email });
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background p-4">
            {/* Background Gradients */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[100px] animate-pulse delay-1000" />
            </div>

            <GlassPanel intensity="medium" className="w-full max-w-md p-8 md:p-10 space-y-8">
                <div className="text-center space-y-2">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-secondary/10 mb-4">
                        <UserPlus className="h-8 w-8 text-secondary-foreground" />
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight">Create Account</h1>
                    <p className="text-sm text-muted-foreground">
                        Join the library to start reading
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="bg-white/50 dark:bg-black/20"
                        />
                    </div>
                    <div className="space-y-2">
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="bg-white/50 dark:bg-black/20"
                        />
                    </div>
                    <div className="space-y-2">
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="bg-white/50 dark:bg-black/20"
                        />
                    </div>

                    {error && (
                        <p className="text-sm text-destructive text-center">{error}</p>
                    )}

                    <Button type="submit" className="w-full" size="lg">
                        Register
                    </Button>
                </form>

                <div className="text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary hover:underline font-medium">
                        Sign In
                    </Link>
                </div>
            </GlassPanel>
        </div>
    );
}
