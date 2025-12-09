"use client";

import { motion } from "framer-motion";
import { BookOpen, Scale, Flag, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const REGULATIONS = [
    {
        title: "Technical Regulations",
        icon: BookOpen,
        items: [
            "Engine: 1.6L V6 Turbo Hybrid",
            "Power Unit: Max 1000 HP",
            "Weight: Minimum 798 kg",
            "Fuel: 110 kg maximum per race",
            "DRS: Drag Reduction System zones"
        ]
    },
    {
        title: "Sporting Regulations",
        icon: Flag,
        items: [
            "Race Distance: 305 km (190 miles)",
            "Practice: 3 sessions (FP1, FP2, FP3)",
            "Qualifying: Q1, Q2, Q3 format",
            "Points: 25-18-15-12-10-8-6-4-2-1",
            "Sprint Races: 8-7-6-5-4-3-2-1"
        ]
    },
    {
        title: "Safety Regulations",
        icon: Scale,
        items: [
            "Halo cockpit protection mandatory",
            "Fire-resistant suits (FIA 8856-2018)",
            "HANS device required",
            "Crash testing standards",
            "Medical car on standby"
        ]
    }
];

const CHAMPIONSHIP_FORMAT = [
    { round: "Practice", duration: "60 min", description: "Three practice sessions" },
    { round: "Qualifying", duration: "60 min", description: "Q1, Q2, Q3 knockout format" },
    { round: "Race", duration: "~2 hrs", description: "305 km or 2 hour limit" },
];

export default function SeriesPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-zinc-900 to-background py-20 border-b border-white/10">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                            Championship Info
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            The <span className="text-primary">Series</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Understanding the rules, regulations, and format that govern the pinnacle of motorsport.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                {/* Championship Format */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-black italic uppercase mb-8 flex items-center gap-3">
                        <Clock className="w-8 h-8 text-primary" />
                        Race Weekend Format
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {CHAMPIONSHIP_FORMAT.map((session, index) => (
                            <motion.div
                                key={session.round}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                            >
                                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 h-full group">
                                    <CardContent className="p-6">
                                        <div className="text-center">
                                            <div className="text-5xl font-black text-primary/30 mb-2">{index + 1}</div>
                                            <h3 className="text-2xl font-black italic uppercase mb-2 group-hover:text-primary transition-colors">
                                                {session.round}
                                            </h3>
                                            <Badge className="mb-4 bg-zinc-800 text-foreground">
                                                {session.duration}
                                            </Badge>
                                            <p className="text-sm text-muted-foreground">
                                                {session.description}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Regulations */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <h2 className="text-4xl font-black italic uppercase mb-8 flex items-center gap-3">
                        <Scale className="w-8 h-8 text-primary" />
                        Regulations
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {REGULATIONS.map((regulation, index) => (
                            <motion.div
                                key={regulation.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                            >
                                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 h-full group">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <regulation.icon className="w-6 h-6 text-primary" />
                                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                                {regulation.title}
                                            </h3>
                                        </div>
                                        <ul className="space-y-2">
                                            {regulation.items.map((item, idx) => (
                                                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                                    <span className="text-primary mt-1">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Points System */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-16"
                >
                    <h2 className="text-4xl font-black italic uppercase mb-8 flex items-center gap-3">
                        <Award className="w-8 h-8 text-primary" />
                        Points System
                    </h2>
                    <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300">
                        <CardContent className="p-8">
                            <div className="grid grid-cols-5 md:grid-cols-10 gap-4 text-center">
                                {[25, 18, 15, 12, 10, 8, 6, 4, 2, 1].map((points, index) => (
                                    <div key={index} className="group">
                                        <div className="text-xs text-muted-foreground mb-2">P{index + 1}</div>
                                        <div className={`text-2xl font-black ${index === 0 ? 'text-primary' : 'text-foreground'} group-hover:text-primary transition-colors`}>
                                            {points}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-muted-foreground text-center mt-6">
                                + 1 point for fastest lap (if finishing in top 10)
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
