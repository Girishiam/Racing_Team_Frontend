"use client";

import { motion } from "framer-motion";
import { Settings, Zap, Award, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MACHINE_SECTIONS = [
    {
        title: "Technical Specifications",
        description: "Explore the cutting-edge technology and engineering excellence that powers our championship-winning machine.",
        icon: Settings,
        href: "/machine/specs",
        features: ["Engine Specs", "Performance Data", "Chassis Details", "Technology Systems"]
    },
    {
        title: "Innovation Lab",
        description: "Discover our research and development initiatives pushing the boundaries of motorsport technology.",
        icon: Zap,
        href: "/machine/innovation",
        features: ["R&D Projects", "Future Tech", "Testing Programs", "Innovations"]
    },
    {
        title: "Technical Partners",
        description: "Meet the world-class suppliers and partners who help us achieve technical excellence.",
        icon: Award,
        href: "/machine/partners",
        features: ["Key Suppliers", "Partnerships", "Collaborations", "Technology Partners"]
    }
];

export default function MachinePage() {
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
                            Engineering Excellence
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            The <span className="text-primary">Machine</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Where cutting-edge technology meets raw power. Explore the engineering marvel that drives our championship ambitions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Sections Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {MACHINE_SECTIONS.map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <Link href={section.href}>
                                    <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 h-full group cursor-pointer">
                                        <CardContent className="p-8">
                                            <section.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />

                                            <h2 className="text-2xl font-black italic uppercase mb-3 group-hover:text-primary transition-colors">
                                                {section.title}
                                            </h2>

                                            <p className="text-muted-foreground mb-6 line-clamp-3">
                                                {section.description}
                                            </p>

                                            <ul className="space-y-2 mb-6">
                                                {section.features.map((feature) => (
                                                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <ArrowRight className="w-4 h-4 text-primary" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                            <Button className="w-full bg-primary hover:bg-primary/90 group-hover:translate-x-1 transition-transform duration-300">
                                                Explore
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
