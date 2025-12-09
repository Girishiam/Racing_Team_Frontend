"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarDays, Timer } from "lucide-react";

const IMAGES = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
];

const TEXT_CONTENT = [
    {
        title: "PUSH THE LIMITS",
        subtitle: "Precision engineering meets raw adrenaline on the asphalt.",
    },
    {
        title: "BEYOND SPEED",
        subtitle: "Every millisecond counts in the pursuit of perfection.",
    },
    {
        title: "RACE READY",
        subtitle: "Forged in competition, driven by passion.",
    },
    {
        title: "DOMINATE THE TRACK",
        subtitle: "Where strategy and courage collide.",
    },
    {
        title: "PURE PERFORMANCE",
        subtitle: "Unleashing the beast within the machine.",
    },
    {
        title: "VICTORY LAP",
        subtitle: "The sweet taste of triumph after the struggle.",
    },
    {
        title: "LEGENDS ARISE",
        subtitle: "History is written by the fastest.",
    },
];

export function HeroBanner() {
    const [current, setCurrent] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Auto-scroll effect
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);
    const blur = useTransform(scrollY, [0, 500], ["0px", "10px"]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
    const y = useTransform(scrollY, [0, 500], ["0%", "20%"]);

    // Auto-rotate images (No longer pauses on hover)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % IMAGES.length);
        }, 8000); // 8 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative h-screen min-h-[600px] w-full overflow-hidden bg-zinc-950 flex items-center"
        >
            {/* Background Images with Transitions */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    style={{ scale, y, filter: `blur(${blur})` }}
                    className="absolute inset-0 z-0"
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={IMAGES[current]}
                            alt="Motorsport Banner"
                            fill
                            className="object-cover object-center"
                            priority={true}
                            quality={85}
                        />
                        {/* Cinematic Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-90" />
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-900/20 to-transparent opacity-100" />
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Hero Content - Typography */}
            <motion.div
                style={{ opacity }}
                className="absolute inset-0 z-10 flex flex-col justify-center px-4 md:px-12 lg:px-24 container mx-auto h-full"
            >
                <div className="max-w-5xl space-y-6 pt-10 md:pt-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ y: 30, opacity: 0, filter: "blur(10px)" }}
                            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                            exit={{ y: -30, opacity: 0, filter: "blur(10px)" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col"
                        >
                            <motion.h1
                                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 drop-shadow-2xl uppercase leading-[0.9] md:leading-[0.85]"
                            >
                                {TEXT_CONTENT[current].title}
                            </motion.h1>
                            <motion.p
                                className="text-lg md:text-2xl lg:text-3xl text-zinc-300 font-light tracking-wide mt-6 border-l-4 border-primary pl-6 max-w-2xl"
                            >
                                {TEXT_CONTENT[current].subtitle}
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Action Buttons - Replacing "Discover More" */}
                    <motion.div
                        key={`btns-${current}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex flex-wrap gap-4 mt-10"
                    >
                        <Button
                            size="lg"
                            className="group relative overflow-hidden rounded-none skew-x-[-10deg] border border-primary bg-primary/20 text-white hover:bg-primary px-8 py-6 text-lg font-bold uppercase tracking-widest transition-all duration-300 backdrop-blur-sm"
                            asChild
                        >
                            <Link href="/calendar" className="flex items-center gap-3">
                                <span className="skew-x-[10deg] flex items-center gap-2">
                                    <CalendarDays className="h-5 w-5" />
                                    Race Calendar
                                </span>
                                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[10deg] translate-x-[-150%] transition-transform duration-700 group-hover:translate-x-[150%]" />
                            </Link>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="group relative overflow-hidden rounded-none skew-x-[-10deg] border-white/30 bg-black/40 text-white hover:bg-white/10 hover:border-white px-8 py-6 text-lg font-bold uppercase tracking-widest transition-all duration-300 backdrop-blur-sm"
                            asChild
                        >
                            <Link href="/machine/specs" className="flex items-center gap-3">
                                <span className="skew-x-[10deg] flex items-center gap-2">
                                    <Timer className="h-5 w-5" />
                                    Tech Specs
                                </span>
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Racing Stats Card - Fixed Middle Right */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute right-4 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 z-20 hidden md:block"
            >
                <div className="w-[280px] lg:w-[320px] bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                    {/* Card Header */}
                    <div className="bg-gradient-to-r from-primary/20 to-transparent border-b border-white/10 px-5 py-4">
                        <h3 className="text-lg font-black uppercase italic text-foreground flex items-center gap-2">
                            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                            </svg>
                            Race Hub
                        </h3>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 space-y-4">
                        {/* Next Race */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Next Race</span>
                                <span className="text-xs text-primary font-bold">LIVE</span>
                            </div>
                            <div className="bg-zinc-900/50 rounded-lg p-3 border border-white/5">
                                <h4 className="font-bold text-foreground text-sm">Monaco Grand Prix</h4>
                                <p className="text-xs text-muted-foreground mt-1">Circuit de Monaco</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-xs text-foreground font-semibold">Dec 15, 2024</span>
                                </div>
                            </div>
                        </div>

                        {/* Previous Race Stats */}
                        <div className="space-y-2">
                            <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Last Race</span>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="bg-zinc-900/50 rounded-lg p-2 border border-white/5 text-center">
                                    <div className="text-lg font-black text-primary">P2</div>
                                    <div className="text-[10px] text-muted-foreground uppercase">Position</div>
                                </div>
                                <div className="bg-zinc-900/50 rounded-lg p-2 border border-white/5 text-center">
                                    <div className="text-lg font-black text-foreground">1:42.3</div>
                                    <div className="text-[10px] text-muted-foreground uppercase">Best Lap</div>
                                </div>
                                <div className="bg-zinc-900/50 rounded-lg p-2 border border-white/5 text-center">
                                    <div className="text-lg font-black text-foreground">+0.8s</div>
                                    <div className="text-[10px] text-muted-foreground uppercase">Gap</div>
                                </div>
                            </div>
                        </div>

                        {/* Upcoming Events */}
                        <div className="space-y-2">
                            <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Upcoming</span>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between py-2 border-b border-white/5">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1 h-8 bg-primary rounded-full"></div>
                                        <div>
                                            <p className="text-xs font-semibold text-foreground">Practice Session</p>
                                            <p className="text-[10px] text-muted-foreground">Dec 13, 10:00 AM</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-2 border-b border-white/5">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1 h-8 bg-white/20 rounded-full"></div>
                                        <div>
                                            <p className="text-xs font-semibold text-foreground">Qualifying</p>
                                            <p className="text-[10px] text-muted-foreground">Dec 14, 2:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card Footer */}
                    <div className="bg-zinc-900/50 border-t border-white/10 px-5 py-3">
                        <Link
                            href="/calendar"
                            className="text-xs font-bold text-primary hover:text-primary/80 transition-colors flex items-center justify-between group"
                        >
                            <span>View Full Calendar</span>
                            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* Progress Indicators */}
            <div className="absolute bottom-8 right-8 z-20 flex gap-2">
                {IMAGES.map((_, idx) => (
                    <div
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer hover:bg-primary/50 ${idx === current ? "w-8 bg-primary" : "w-1.5 bg-white/20"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}