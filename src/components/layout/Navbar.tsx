"use client";

import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import * as React from "react";

const NAV_STRUCTURE = [
    {
        label: "Race Calendar",
        href: "/calendar",
        description: "Upcoming fixtures",
        children: [
            { title: "Results & Standings", href: "/calendar/standings", description: "Points table" },
            { title: "The Series", href: "/calendar/series", description: "Rules & Regs" },
            { title: "Track Guide", href: "/calendar/tracks", description: "Circuit maps" },
        ]
    },
    {
        label: "The Team",
        href: "/team",
        description: "Our people",
        children: [
            { title: "Drivers", href: "/team/drivers", description: "Profiles & stats" },
            { title: "Management", href: "/team/management", description: "Leadership" },
            { title: "Academy", href: "/team/academy", description: "Rising stars" },
            { title: "Esports", href: "/team/esports", description: "Sim racing" },
            { title: "Careers", href: "/careers", description: "Join us" },
        ]
    },
    {
        label: "The Machine",
        href: "/machine",
        description: "Technology",
        children: [
            { title: "The Car", href: "/machine/specs", description: "Tech specs" },
            { title: "Innovation", href: "/machine/innovation", description: "R&D" },
            { title: "Partners", href: "/machine/partners", description: "Suppliers" },
        ]
    },
    {
        label: "Media",
        href: "/media",
        description: "Content Hub",
        children: [
            { title: "News", href: "/media/news", description: "Latest updates" },
            { title: "Videos", href: "/media/video", description: "Highlights" },
            { title: "Gallery", href: "/media/gallery", description: "Photos" },
        ]
    },
    {
        label: "Fans",
        href: "/fans",
        description: "Fan Zone",
        children: [
            { title: "Fan Club", href: "/fans/club", description: "Join now" },
            { title: "Games", href: "/fans/games", description: "Play & win" },
            { title: "Downloads", href: "/fans/downloads", description: "Wallpapers" },
            { title: "Hospitality", href: "/fans/vip", description: "VIP passes" },
        ]
    },
    {
        label: "Partners",
        href: "/partners",
        children: [
            { title: "Sponsors", href: "/partners", description: "Our supporters" },
            { title: "Business", href: "/partners/join", description: "B2B" },
        ]
    },
    {
        label: "Sustainability",
        href: "/sustainability",
        children: [
            { title: "Net Zero", href: "/sustainability/net-zero", description: "Goals" },
            { title: "Diversity", href: "/sustainability/diversity", description: "Inclusion" },
        ]
    }
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // Mobile menu

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-500 ease-in-out",
                isScrolled
                    ? "bg-zinc-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
                {/* LOGO (TEXT) */}
                <Link href="/" className="flex items-center gap-1 group mr-8 shrink-0 relative z-50">
                    <div className="relative overflow-hidden">
                        <span className="font-black text-2xl tracking-tighter italic uppercase text-foreground relative z-10 group-hover:-translate-y-full transition-transform duration-500 block">
                            Moto <span className="text-primary">Sports</span>
                        </span>
                        <span className="font-black text-2xl tracking-tighter italic uppercase text-foreground absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 block">
                            Moto <span className="text-primary">Sports</span>
                        </span>
                    </div>
                </Link>

                {/* DESKTOP NAV (CUSTOM HOVER DROPDOWNS) */}
                <nav className="hidden lg:flex items-center gap-8">
                    <Link href="/" className="text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors">
                        Home
                    </Link>
                    {NAV_STRUCTURE.map((item) => (
                        <div key={item.label} className="group relative h-full flex items-center">
                            <Link
                                href={item.href}
                                className="flex items-center gap-1 text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors cursor-pointer"
                            >
                                {item.label}
                                <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
                            </Link>

                            {/* DROPDOWN MENU */}
                            {item.children && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2 pointer-events-none group-hover:pointer-events-auto min-w-[240px] z-50">
                                    <div className="bg-zinc-950/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl overflow-hidden">
                                        <ul className="flex flex-col py-2">
                                            {item.children.map((child) => (
                                                <li key={child.title}>
                                                    <Link
                                                        href={child.href}
                                                        className="group/item block px-5 py-3 hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent transition-all duration-200 border-l-2 border-transparent hover:border-primary"
                                                    >
                                                        <div className="flex items-start gap-3">
                                                            <div className="flex-1">
                                                                <span className="block font-bold text-sm text-foreground group-hover/item:text-primary transition-colors duration-200">
                                                                    {child.title}
                                                                </span>
                                                                <span className="block text-xs text-muted-foreground mt-0.5 group-hover/item:text-foreground/80 transition-colors duration-200">
                                                                    {child.description}
                                                                </span>
                                                            </div>
                                                            <svg
                                                                className="w-4 h-4 text-muted-foreground group-hover/item:text-primary transition-all duration-200 opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* RIGHT SIDE (Mobile Menu Only) */}
                <div className="flex items-center gap-2 relative z-[60]">

                    {/* Mobile Sheet */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden hover:text-primary hover:bg-white/10">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-zinc-950/95 backdrop-blur-xl border-l border-white/10 overflow-y-auto w-full sm:w-[400px] p-0 z-[100]">
                            <div className="p-6">
                                <SheetTitle className="text-left text-2xl font-black uppercase italic border-b border-white/10 pb-4 mb-4 flex items-center gap-2">
                                    Moto<span className="text-primary">Sports</span>
                                </SheetTitle>
                                <SheetDescription className="sr-only">Mobile Navigation</SheetDescription>

                                <div className="flex flex-col gap-1 pb-20 mt-4">
                                    <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-bold p-3 hover:text-primary transition-colors bg-white/5 rounded-md mb-2">
                                        Home
                                    </Link>
                                    {NAV_STRUCTURE.map((item) => (
                                        <div key={item.label} className="flex flex-col mb-2">
                                            <span className="text-muted-foreground text-xs uppercase font-extrabold tracking-widest mt-4 mb-2 pl-2 border-b border-white/5 pb-1">
                                                {item.label}
                                            </span>
                                            <div className="pl-2 border-l border-white/10 ml-2">
                                                {item.children?.map((child) => (
                                                    <Link
                                                        key={child.title}
                                                        href={child.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className="text-base font-medium p-3 pl-4 hover:text-primary hover:bg-white/5 rounded-md transition-all flex flex-col group"
                                                    >
                                                        <span className="group-hover:translate-x-1 transition-transform">{child.title}</span>
                                                        <span className="text-xs text-muted-foreground font-normal group-hover:text-white/60">{child.description}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
