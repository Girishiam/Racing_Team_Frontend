"use client";

import { motion } from "framer-motion";
import { Lightbulb, Zap, Wind, Cpu, Gauge } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const INNOVATIONS = [
    {
        title: "Active Aerodynamics",
        category: "Aerodynamics",
        description: "Revolutionary adaptive wing system that adjusts in real-time based on speed and cornering forces",
        impact: "+15% downforce efficiency",
        year: "2024",
        icon: Wind
    },
    {
        title: "Hybrid Power Unit 2.0",
        category: "Powertrain",
        description: "Next-generation energy recovery system with improved MGU-K and MGU-H integration",
        impact: "+50 HP peak power",
        year: "2024",
        icon: Zap
    },
    {
        title: "AI-Powered Telemetry",
        category: "Data Analytics",
        description: "Machine learning algorithms that predict optimal setup changes in real-time during sessions",
        impact: "0.3s lap time gain",
        year: "2023",
        icon: Cpu
    },
    {
        title: "Carbon Fiber Monocoque",
        category: "Chassis",
        description: "Ultra-lightweight composite structure exceeding FIA safety standards while reducing weight",
        impact: "-5kg weight saving",
        year: "2023",
        icon: Gauge
    }
];

const R_AND_D_STATS = [
    { label: "R&D Budget", value: "$450M", icon: Lightbulb },
    { label: "Engineers", value: "350+", icon: Cpu },
    { label: "Patents Filed", value: "127", icon: Zap },
    { label: "Wind Tunnel Hours", value: "1000+", icon: Wind }
];

export default function InnovationPage() {
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
                            R&D Excellence
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            Innovation <span className="text-primary">Lab</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Pushing the boundaries of automotive technology through relentless research and development.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                {/* R&D Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="grid md:grid-cols-4 gap-6">
                        {R_AND_D_STATS.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                            >
                                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 group">
                                    <CardContent className="p-6 text-center">
                                        <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                                        <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                                        <div className="text-sm text-muted-foreground uppercase">{stat.label}</div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Innovations */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <h2 className="text-4xl font-black italic uppercase mb-8 flex items-center gap-3">
                        <Lightbulb className="w-8 h-8 text-primary" />
                        Latest Innovations
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {INNOVATIONS.map((innovation, index) => (
                            <motion.div
                                key={innovation.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                            >
                                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 h-full group">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                                <innovation.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-start justify-between mb-2">
                                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                                        {innovation.title}
                                                    </h3>
                                                    <Badge className="bg-zinc-800 text-muted-foreground text-xs">
                                                        {innovation.year}
                                                    </Badge>
                                                </div>
                                                <Badge className="mb-3 bg-primary/20 text-primary border-primary/30 text-xs">
                                                    {innovation.category}
                                                </Badge>
                                            </div>
                                        </div>

                                        <p className="text-sm text-muted-foreground mb-4">
                                            {innovation.description}
                                        </p>

                                        <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                                            <Zap className="w-4 h-4 text-primary" />
                                            <span className="text-sm font-bold text-primary">{innovation.impact}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-16"
                >
                    <Card className="bg-gradient-to-r from-primary/10 to-transparent border-primary/30 overflow-hidden">
                        <CardContent className="p-12 text-center relative">
                            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full transform scale-150 opacity-20" />
                            <div className="relative z-10">
                                <Lightbulb className="w-16 h-16 text-primary mx-auto mb-4" />
                                <h2 className="text-3xl font-black italic uppercase mb-4">Innovation Partnership</h2>
                                <p className="text-muted-foreground max-w-2xl mx-auto">
                                    Collaborate with our R&D team to develop cutting-edge motorsport technology that pushes the limits of performance.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
