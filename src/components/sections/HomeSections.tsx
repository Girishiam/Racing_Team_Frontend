"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Calendar, Users, Cpu, Newspaper, Heart, Handshake, Leaf,
    Trophy, Zap, Target, Award, TrendingUp, Star
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SECTIONS = [
    {
        title: "Race Calendar",
        description: "Follow our journey through the world's most prestigious circuits. Track upcoming races, results, and championship standings.",
        icon: Calendar,
        href: "/calendar",
        color: "from-blue-500/20 to-cyan-500/20",
        iconColor: "text-blue-500",
        features: ["Live Race Schedule", "Championship Standings", "Circuit Guides"]
    },
    {
        title: "The Team",
        description: "Meet the world-class talent behind our success. From drivers to engineers, discover the people pushing the limits.",
        icon: Users,
        href: "/team",
        color: "from-purple-500/20 to-pink-500/20",
        iconColor: "text-purple-500",
        features: ["Driver Profiles", "Team Management", "Academy Program"]
    },
    {
        title: "The Machine",
        description: "Cutting-edge technology and relentless innovation. Explore the engineering marvel that powers our championship ambitions.",
        icon: Cpu,
        href: "/machine/specs",
        color: "from-orange-500/20 to-red-500/20",
        iconColor: "text-orange-500",
        features: ["Technical Specs", "Innovation Lab", "Technical Partners"]
    },
    {
        title: "Media Hub",
        description: "Exclusive content, race highlights, and behind-the-scenes access. Never miss a moment of the action.",
        icon: Newspaper,
        href: "/media/news",
        color: "from-green-500/20 to-emerald-500/20",
        iconColor: "text-green-500",
        features: ["Latest News", "Video Gallery", "Photo Archives"]
    },
    {
        title: "Fan Zone",
        description: "Join our global community of passionate fans. Exclusive content, games, and VIP experiences await.",
        icon: Heart,
        href: "/fans",
        color: "from-pink-500/20 to-rose-500/20",
        iconColor: "text-pink-500",
        features: ["Fan Club", "Interactive Games", "VIP Hospitality"]
    },
    {
        title: "Partners",
        description: "Collaborate with a championship-winning team. Discover partnership opportunities and unlock global brand exposure.",
        icon: Handshake,
        href: "/partners",
        color: "from-yellow-500/20 to-amber-500/20",
        iconColor: "text-yellow-500",
        features: ["Sponsorship Tiers", "B2B Solutions", "Brand Activation"]
    },
    {
        title: "Sustainability",
        description: "Racing towards a greener future. Our commitment to net-zero emissions and diversity in motorsport.",
        icon: Leaf,
        href: "/sustainability/net-zero",
        color: "from-teal-500/20 to-green-500/20",
        iconColor: "text-teal-500",
        features: ["Net Zero Goals", "Diversity & Inclusion", "Green Innovation"]
    }
];

const STATS = [
    { label: "Championships", value: "12", icon: Trophy },
    { label: "Race Wins", value: "287", icon: Zap },
    { label: "Podiums", value: "542", icon: Target },
    { label: "Global Fans", value: "5.2M", icon: Award }
];

export function HomeSections() {
    return (
        <div className="bg-background">
            {/* Stats Section */}
            <section className="relative py-20 border-b border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-background opacity-50" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                            Championship Legacy
                        </Badge>
                        <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">
                            Driven By <span className="text-primary">Excellence</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {STATS.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 group">
                                    <CardContent className="p-6 text-center">
                                        <stat.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                                        <div className="text-5xl font-black text-primary mb-2">{stat.value}</div>
                                        <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Sections Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                            Explore Our World
                        </Badge>
                        <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">
                            Everything <span className="text-primary">Motorsport</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Dive into the heart of racing. From cutting-edge technology to exclusive fan experiences.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {SECTIONS.map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Link href={section.href}>
                                    <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 h-full group cursor-pointer overflow-hidden">
                                        <CardContent className="p-0">
                                            {/* Header with gradient */}
                                            <div className={`bg-gradient-to-br ${section.color} border-b border-white/10 p-6 relative overflow-hidden`}>
                                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                                                <div className="relative z-10 flex items-start justify-between">
                                                    <section.icon className={`w-12 h-12 ${section.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                                                    <Star className="w-5 h-5 text-white/20 group-hover:text-primary/50 transition-colors duration-300" />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-6">
                                                <h3 className="text-2xl font-black italic uppercase mb-3 group-hover:text-primary transition-colors duration-300">
                                                    {section.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                                    {section.description}
                                                </p>

                                                {/* Features */}
                                                <div className="space-y-2 mb-4">
                                                    {section.features.map((feature, idx) => (
                                                        <div key={idx} className="flex items-center gap-2 text-xs">
                                                            <TrendingUp className="w-3 h-3 text-primary" />
                                                            <span className="text-muted-foreground">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* CTA */}
                                                <Button
                                                    variant="outline"
                                                    className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                                                >
                                                    Explore →
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 border-t border-white/10">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="bg-gradient-to-r from-primary/10 to-transparent border-primary/30 overflow-hidden">
                            <CardContent className="p-12 md:p-16 text-center relative">
                                <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full transform scale-150 opacity-20" />
                                <div className="relative z-10">
                                    <Zap className="w-16 h-16 text-primary mx-auto mb-6" />
                                    <h2 className="text-4xl md:text-5xl font-black italic uppercase mb-6">
                                        Join The <span className="text-primary">Journey</span>
                                    </h2>
                                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                                        Be part of our championship story. Follow every race, celebrate every victory, and experience the thrill of motorsport.
                                    </p>
                                    <div className="flex flex-wrap gap-4 justify-center">
                                        <Button size="lg" className="font-bold uppercase tracking-wider px-8" asChild>
                                            <Link href="/fans/club">Join Fan Club</Link>
                                        </Button>
                                        <Button size="lg" variant="outline" className="font-bold uppercase tracking-wider px-8" asChild>
                                            <Link href="/calendar">View Calendar</Link>
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
