"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Wrench, TrendingUp, Heart, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const JOB_OPENINGS = [
    {
        title: "Senior Aerodynamics Engineer",
        department: "Engineering",
        location: "Milton Keynes, UK",
        type: "Full-time",
        level: "Senior",
        icon: Wrench
    },
    {
        title: "Race Strategy Analyst",
        department: "Performance",
        location: "Milton Keynes, UK",
        type: "Full-time",
        level: "Mid-level",
        icon: TrendingUp
    },
    {
        title: "Composite Technician",
        department: "Manufacturing",
        location: "Milton Keynes, UK",
        type: "Full-time",
        level: "Entry",
        icon: Wrench
    },
    {
        title: "Social Media Manager",
        department: "Marketing",
        location: "Remote",
        type: "Full-time",
        level: "Mid-level",
        icon: Globe
    },
    {
        title: "Data Engineer",
        department: "IT & Analytics",
        location: "Milton Keynes, UK",
        type: "Full-time",
        level: "Senior",
        icon: TrendingUp
    },
    {
        title: "Hospitality Coordinator",
        department: "Events",
        location: "Various",
        type: "Contract",
        level: "Entry",
        icon: Users
    }
];

const BENEFITS = [
    {
        title: "Competitive Salary",
        description: "Industry-leading compensation packages with performance bonuses",
        icon: TrendingUp
    },
    {
        title: "Health & Wellness",
        description: "Comprehensive health insurance, gym membership, and mental health support",
        icon: Heart
    },
    {
        title: "Career Growth",
        description: "Professional development programs and clear progression pathways",
        icon: Briefcase
    },
    {
        title: "Global Opportunities",
        description: "Work with international teams and travel to races worldwide",
        icon: Globe
    }
];

export default function CareersPage() {
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
                            Join Our Team
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            Build Your <span className="text-primary">Career</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Join a world-class team pushing the boundaries of motorsport excellence. Explore opportunities across engineering, operations, and more.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                {/* Benefits */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-black italic uppercase mb-8 flex items-center gap-3">
                        <Heart className="w-8 h-8 text-primary" />
                        Why Join Us
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {BENEFITS.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                            >
                                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 h-full group">
                                    <CardContent className="p-6 text-center">
                                        <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {benefit.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Job Openings */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <h2 className="text-4xl font-black italic uppercase mb-8 flex items-center gap-3">
                        <Briefcase className="w-8 h-8 text-primary" />
                        Open Positions
                    </h2>
                    <div className="space-y-4">
                        {JOB_OPENINGS.map((job, index) => (
                            <motion.div
                                key={job.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                            >
                                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 group">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-6">
                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                                <job.icon className="w-6 h-6 text-primary" />
                                            </div>

                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                                                    {job.title}
                                                </h3>
                                                <div className="flex flex-wrap gap-2">
                                                    <Badge className="bg-zinc-800 text-muted-foreground text-xs">
                                                        {job.department}
                                                    </Badge>
                                                    <Badge className="bg-zinc-800 text-muted-foreground text-xs">
                                                        {job.location}
                                                    </Badge>
                                                    <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                                                        {job.type}
                                                    </Badge>
                                                    <Badge variant="outline" className="text-xs">
                                                        {job.level}
                                                    </Badge>
                                                </div>
                                            </div>

                                            <Button className="shrink-0">
                                                Apply
                                            </Button>
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
                                <Users className="w-16 h-16 text-primary mx-auto mb-4" />
                                <h2 className="text-3xl font-black italic uppercase mb-4">Don&apos;t See Your Role?</h2>
                                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                    We&apos;re always looking for exceptional talent. Send us your CV and we&apos;ll keep you in mind for future opportunities.
                                </p>
                                <Button size="lg" className="font-bold uppercase tracking-wider px-8">
                                    Submit CV
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
