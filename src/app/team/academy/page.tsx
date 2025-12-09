"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy, TrendingUp, Star, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ACADEMY_DRIVERS = [
    {
        name: "Lucas Martinez",
        age: 19,
        nationality: "Spanish",
        category: "F2",
        wins: 5,
        podiums: 12,
        points: 156,
        status: "Rising Star"
    },
    {
        name: "Yuki Tanaka",
        age: 18,
        nationality: "Japanese",
        category: "F3",
        wins: 8,
        podiums: 15,
        points: 203,
        status: "Championship Leader"
    },
    {
        name: "Emma Johnson",
        age: 20,
        nationality: "British",
        category: "F2",
        wins: 3,
        podiums: 9,
        points: 128,
        status: "Rookie of the Year"
    },
    {
        name: "Ahmed Al-Rashid",
        age: 17,
        nationality: "UAE",
        category: "F4",
        wins: 12,
        podiums: 18,
        points: 287,
        status: "Dominant"
    }
];

const PROGRAM_BENEFITS = [
    {
        title: "Professional Coaching",
        description: "One-on-one mentorship from F1 champions and experienced race engineers",
        icon: GraduationCap
    },
    {
        title: "Simulator Training",
        description: "Access to state-of-the-art F1 simulators for track familiarization and setup work",
        icon: Trophy
    },
    {
        title: "Physical Training",
        description: "Personalized fitness programs designed by F1 performance coaches",
        icon: TrendingUp
    },
    {
        title: "Mental Coaching",
        description: "Sports psychology sessions to develop mental resilience and focus",
        icon: Star
    }
];

export default function AcademyPage() {
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
                            Driver Development
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            Racing <span className="text-primary">Academy</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Nurturing the next generation of motorsport champions through world-class training and development.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                {/* Academy Drivers */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-black italic uppercase mb-8 flex items-center gap-3">
                        <Star className="w-8 h-8 text-primary" />
                        Academy Drivers
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {ACADEMY_DRIVERS.map((driver, index) => (
                            <motion.div
                                key={driver.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                            >
                                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 group">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-black italic uppercase mb-1 group-hover:text-primary transition-colors">
                                                    {driver.name}
                                                </h3>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Badge className="bg-zinc-800 text-foreground">{driver.nationality}</Badge>
                                                    <Badge className="bg-primary/20 text-primary border-primary/30">
                                                        {driver.category}
                                                    </Badge>
                                                </div>
                                                <Badge variant="outline" className="text-xs text-muted-foreground">
                                                    {driver.status}
                                                </Badge>
                                            </div>
                                            <div className="text-5xl font-black text-primary/30">{driver.age}</div>
                                        </div>

                                        {/* Stats */}
                                        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                                            <div className="text-center">
                                                <div className="text-2xl font-black text-primary">{driver.wins}</div>
                                                <div className="text-xs text-muted-foreground uppercase">Wins</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-black">{driver.podiums}</div>
                                                <div className="text-xs text-muted-foreground uppercase">Podiums</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-black">{driver.points}</div>
                                                <div className="text-xs text-muted-foreground uppercase">Points</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Program Benefits */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-black italic uppercase mb-8 flex items-center gap-3">
                        <GraduationCap className="w-8 h-8 text-primary" />
                        Program Benefits
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PROGRAM_BENEFITS.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
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

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <Card className="bg-gradient-to-r from-primary/10 to-transparent border-primary/30 overflow-hidden">
                        <CardContent className="p-12 text-center relative">
                            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full transform scale-150 opacity-20" />
                            <div className="relative z-10">
                                <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                                <h2 className="text-3xl font-black italic uppercase mb-4">Join Our Academy</h2>
                                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                    Think you have what it takes? Apply to our driver development program and start your journey to F1.
                                </p>
                                <Button size="lg" className="font-bold uppercase tracking-wider px-8">
                                    Apply Now
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
