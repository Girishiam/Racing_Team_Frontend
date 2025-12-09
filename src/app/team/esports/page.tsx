"use client";

import { motion } from "framer-motion";
import { Gamepad2, Trophy, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ESPORTS_DRIVERS = [
    {
        name: "Alex \"Velocity\" Chen",
        realName: "Alexander Chen",
        nationality: "Canadian",
        rank: 1,
        wins: 24,
        championships: 3,
        platform: "PC"
    },
    {
        name: "Sarah \"Apex\" Williams",
        realName: "Sarah Williams",
        nationality: "Australian",
        rank: 2,
        wins: 18,
        championships: 2,
        platform: "PC"
    },
    {
        name: "Marco \"Nitro\" Rossi",
        realName: "Marco Rossi",
        nationality: "Italian",
        rank: 3,
        wins: 15,
        championships: 1,
        platform: "Console"
    }
];

const ACHIEVEMENTS = [
    { title: "World Championship Titles", value: "6", icon: Trophy },
    { title: "Tournament Wins", value: "57", icon: Zap },
    { title: "Active Sim Racers", value: "150+", icon: Users },
    { title: "Prize Money Won", value: "$2.5M", icon: Trophy }
];

export default function EsportsPage() {
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
                            Virtual Racing
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            Esports <span className="text-primary">Division</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Competing at the highest level of sim racing with world-class virtual drivers and cutting-edge technology.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                {/* Achievements */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="grid md:grid-cols-4 gap-6">
                        {ACHIEVEMENTS.map((achievement, index) => (
                            <motion.div
                                key={achievement.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                            >
                                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 group">
                                    <CardContent className="p-6 text-center">
                                        <achievement.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                                        <div className="text-4xl font-black text-primary mb-2">{achievement.value}</div>
                                        <div className="text-sm text-muted-foreground uppercase">{achievement.title}</div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Esports Drivers */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-black italic uppercase mb-8 flex items-center gap-3">
                        <Gamepad2 className="w-8 h-8 text-primary" />
                        Pro Sim Racers
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {ESPORTS_DRIVERS.map((driver, index) => (
                            <motion.div
                                key={driver.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                            >
                                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 group">
                                    <CardContent className="p-0">
                                        {/* Header */}
                                        <div className="bg-gradient-to-r from-primary/20 to-transparent border-b border-white/10 p-6">
                                            <div className="flex items-start justify-between mb-2">
                                                <div className="text-6xl font-black text-primary/30">#{driver.rank}</div>
                                                <Badge className="bg-zinc-800 text-foreground">{driver.platform}</Badge>
                                            </div>
                                            <h3 className="text-2xl font-black italic uppercase mb-1 group-hover:text-primary transition-colors">
                                                {driver.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">{driver.realName}</p>
                                            <Badge className="mt-2 bg-primary/20 text-primary border-primary/30">
                                                {driver.nationality}
                                            </Badge>
                                        </div>

                                        {/* Stats */}
                                        <div className="p-6">
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="text-center">
                                                    <div className="text-2xl font-black text-primary">{driver.championships}</div>
                                                    <div className="text-xs text-muted-foreground uppercase">Titles</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-2xl font-black">{driver.wins}</div>
                                                    <div className="text-xs text-muted-foreground uppercase">Wins</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-2xl font-black">#{driver.rank}</div>
                                                    <div className="text-xs text-muted-foreground uppercase">Rank</div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Join CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <Card className="bg-gradient-to-r from-primary/10 to-transparent border-primary/30 overflow-hidden">
                        <CardContent className="p-12 text-center relative">
                            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full transform scale-150 opacity-20" />
                            <div className="relative z-10">
                                <Gamepad2 className="w-16 h-16 text-primary mx-auto mb-4" />
                                <h2 className="text-3xl font-black italic uppercase mb-4">Join Our Esports Team</h2>
                                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                    Think you&apos;ve got the skills? Compete in our trials and earn a spot on the official esports roster.
                                </p>
                                <div className="flex gap-4 justify-center">
                                    <Button size="lg" className="font-bold uppercase tracking-wider px-8">
                                        Apply Now
                                    </Button>
                                    <Button size="lg" variant="outline" className="font-bold uppercase tracking-wider px-8">
                                        View Schedule
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
