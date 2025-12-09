"use client";

import { motion } from "framer-motion";
import { Leaf, Target, Users, ArrowRight, Zap, Recycle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SUSTAINABILITY_SECTIONS = [
    {
        title: "Net Zero Goals",
        description: "Our commitment to achieving carbon neutrality and environmental sustainability in motorsport.",
        icon: Target,
        href: "/sustainability/net-zero",
        features: ["Carbon Reduction", "Renewable Energy", "Sustainable Fuels", "Green Technology"]
    },
    {
        title: "Diversity & Inclusion",
        description: "Building a more diverse and inclusive motorsport community for everyone.",
        icon: Users,
        href: "/sustainability/diversity",
        features: ["Equal Opportunities", "Community Programs", "Education Initiatives", "Inclusive Culture"]
    }
];

const INITIATIVES = [
    {
        icon: Leaf,
        title: "Environmental Impact",
        description: "Reducing our carbon footprint through sustainable practices and green technology.",
        color: "text-green-500"
    },
    {
        icon: Zap,
        title: "Clean Energy",
        description: "Transitioning to renewable energy sources and sustainable fuel alternatives.",
        color: "text-yellow-500"
    },
    {
        icon: Recycle,
        title: "Circular Economy",
        description: "Implementing recycling programs and reducing waste across all operations.",
        color: "text-blue-500"
    }
];

export default function SustainabilityPage() {
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
                        <Badge className="mb-4 bg-green-500/20 text-green-500 border-green-500/30">
                            Building a Better Future
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            Sustainability <span className="text-primary">& Impact</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Racing towards a sustainable future. Our commitment to environmental responsibility and social impact in motorsport.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Sections */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {SUSTAINABILITY_SECTIONS.map((section, index) => (
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

                                            <h2 className="text-3xl font-black italic uppercase mb-3 group-hover:text-primary transition-colors">
                                                {section.title}
                                            </h2>

                                            <p className="text-muted-foreground mb-6">
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
                                                Learn More
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Initiatives Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-black italic uppercase mb-8">
                            Our <span className="text-primary">Initiatives</span>
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {INITIATIVES.map((initiative, index) => (
                                <motion.div
                                    key={initiative.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                                >
                                    <Card className="bg-zinc-950/50 border-white/10 h-full">
                                        <CardContent className="p-6 text-center">
                                            <initiative.icon className={`w-12 h-12 ${initiative.color} mx-auto mb-4`} />
                                            <h3 className="text-xl font-bold mb-2">{initiative.title}</h3>
                                            <p className="text-sm text-muted-foreground">{initiative.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Commitment Section */}
            <section className="py-16 border-t border-white/10 bg-zinc-950/30">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-4xl font-black italic uppercase mb-6">
                            Our <span className="text-primary">Commitment</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            We believe in racing responsibly. Our sustainability strategy focuses on reducing environmental impact,
                            promoting diversity and inclusion, and creating positive change in the motorsport community and beyond.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 bg-white/5 rounded-lg">
                                <div className="text-4xl font-black text-green-500 mb-2">2030</div>
                                <div className="text-sm text-muted-foreground uppercase">Net Zero Target</div>
                            </div>
                            <div className="p-6 bg-white/5 rounded-lg">
                                <div className="text-4xl font-black text-primary mb-2">50%</div>
                                <div className="text-sm text-muted-foreground uppercase">Emissions Reduction</div>
                            </div>
                            <div className="p-6 bg-white/5 rounded-lg">
                                <div className="text-4xl font-black text-blue-500 mb-2">100%</div>
                                <div className="text-sm text-muted-foreground uppercase">Renewable Energy</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
