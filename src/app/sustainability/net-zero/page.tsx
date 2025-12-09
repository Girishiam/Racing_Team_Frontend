"use client";

import { motion } from "framer-motion";
import { Leaf, Users, Award, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const INITIATIVES = [
    {
        title: "Carbon Neutral by 2030",
        description: "Committed to achieving net-zero carbon emissions across all operations by 2030.",
        icon: Leaf,
        progress: 65,
        metrics: ["100% Renewable Energy", "Carbon Offset Programs", "Sustainable Materials"]
    },
    {
        title: "Diversity & Inclusion",
        description: "Building a diverse workforce that represents the global motorsport community.",
        icon: Users,
        progress: 72,
        metrics: ["40% Female Workforce Target", "Global Talent Programs", "Equal Opportunity"]
    },
    {
        title: "Community Impact",
        description: "Engaging with local communities and inspiring the next generation of engineers.",
        icon: Award,
        progress: 80,
        metrics: ["STEM Education Programs", "Local Partnerships", "Youth Development"]
    },
];

export default function NetZeroPage() {
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
                        <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-500/30">
                            Sustainability
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            Racing Towards <span className="text-primary">Net Zero</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Performance and sustainability go hand in hand. Our commitment to a greener future drives innovation on and off the track.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Initiatives Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {INITIATIVES.map((initiative, index) => {
                            const Icon = initiative.icon;
                            return (
                                <motion.div
                                    key={initiative.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                >
                                    <Card className="bg-zinc-950/50 border-white/10 h-full hover:border-green-500/50 transition-all duration-300">
                                        <CardHeader>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-3 bg-green-500/20 rounded-lg">
                                                    <Icon className="w-6 h-6 text-green-400" />
                                                </div>
                                                <CardTitle className="text-xl font-black italic uppercase">
                                                    {initiative.title}
                                                </CardTitle>
                                            </div>
                                            <p className="text-muted-foreground text-sm">
                                                {initiative.description}
                                            </p>
                                        </CardHeader>
                                        <CardContent>
                                            {/* Progress Bar */}
                                            <div className="mb-4">
                                                <div className="flex justify-between text-sm mb-2">
                                                    <span className="text-muted-foreground">Progress</span>
                                                    <span className="font-bold text-green-400">{initiative.progress}%</span>
                                                </div>
                                                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${initiative.progress}%` }}
                                                        transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                                                        className="h-full bg-gradient-to-r from-green-600 to-green-400"
                                                    />
                                                </div>
                                            </div>

                                            {/* Metrics */}
                                            <div className="space-y-2">
                                                {initiative.metrics.map((metric, idx) => (
                                                    <div key={idx} className="flex items-center gap-2 text-sm">
                                                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                        <span className="text-muted-foreground">{metric}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-black italic uppercase mb-8">Our Impact</h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { value: "65%", label: "Emissions Reduced", icon: TrendingDown },
                                { value: "100%", label: "Renewable Energy", icon: Leaf },
                                { value: "50+", label: "Community Programs", icon: Users },
                                { value: "2030", label: "Net Zero Target", icon: Award },
                            ].map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <Card key={index} className="bg-zinc-950/50 border-white/10 text-center">
                                        <CardContent className="p-6">
                                            <Icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
                                            <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
