"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";
import { useEffect, useState } from "react";

export function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        // Show loading on every page load/refresh
        setIsLoading(true);

        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Show for 2 seconds

        return () => clearTimeout(timeout);
    }, []);

    // Don't render until mounted to avoid hydration mismatch
    if (!isMounted) return null;

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-black overflow-hidden"
                >
                    {/* Animated Background Grid */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `
                                linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
                            `,
                            backgroundSize: '50px 50px'
                        }} />
                    </div>

                    {/* Animated Gradient Orbs */}
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                            x: [0, 50, 0],
                            y: [0, -50, 0],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.2, 0.4, 0.2],
                            x: [0, -50, 0],
                            y: [0, 50, 0],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Main Loading Container */}
                    <div className="relative z-10 flex flex-col items-center">
                        {/* Glassmorphic Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                            className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl"
                        >
                            {/* Rotating Ring */}
                            <div className="relative w-48 h-48 mx-auto mb-8">
                                {/* Outer Ring */}
                                <motion.div
                                    className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary"
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />

                                {/* Middle Ring */}
                                <motion.div
                                    className="absolute inset-4 rounded-full border-4 border-transparent border-b-blue-500 border-l-blue-500"
                                    animate={{ rotate: -360 }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />

                                {/* Inner Ring */}
                                <motion.div
                                    className="absolute inset-8 rounded-full border-4 border-transparent border-t-purple-500 border-r-purple-500"
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />

                                {/* Center Logo/Icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            rotate: [0, 180, 360],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="relative"
                                    >
                                        <Zap className="w-16 h-16 text-primary" />

                                        {/* Pulsing Glow */}
                                        <motion.div
                                            className="absolute inset-0 bg-primary/50 rounded-full blur-xl"
                                            animate={{
                                                scale: [1, 1.5, 1],
                                                opacity: [0.5, 0, 0.5],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Brand Text */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="text-center"
                            >
                                <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-2">
                                    MOTO<span className="text-primary">SPORTS</span>
                                </h2>
                                <p className="text-sm text-muted-foreground uppercase tracking-widest">
                                    Racing Excellence
                                </p>
                            </motion.div>

                            {/* Loading Progress Bar */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8 w-64 h-1 bg-white/10 rounded-full overflow-hidden"
                            >
                                <motion.div
                                    className="h-full bg-gradient-to-r from-primary via-blue-500 to-purple-500"
                                    animate={{
                                        x: ["-100%", "100%"],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </motion.div>

                            {/* Loading Dots */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="flex justify-center gap-2 mt-6"
                            >
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="w-2 h-2 bg-primary rounded-full"
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.3, 1, 0.3],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            delay: i * 0.2,
                                            ease: "easeInOut"
                                        }}
                                    />
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Speed Lines Animation */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
                                    style={{
                                        top: `${20 + i * 15}%`,
                                        width: '100%',
                                    }}
                                    animate={{
                                        x: ["-100%", "200%"],
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.3,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </div>

                        {/* Particle Effects */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-primary/50 rounded-full"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                    }}
                                    animate={{
                                        y: [0, -100],
                                        opacity: [0, 1, 0],
                                        scale: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 2 + Math.random() * 2,
                                        repeat: Infinity,
                                        delay: Math.random() * 2,
                                        ease: "easeOut"
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Corner Accents */}
                    <motion.div
                        className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary/30"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    />
                    <motion.div
                        className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary/30"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
