"use client";

import { motion } from "framer-motion";
import { Trophy, TrendingUp, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DRIVER_STANDINGS = [
    { position: 1, driver: "Max Verstappen", team: "Red Bull Racing", points: 575, wins: 19, podiums: 21 },
    { position: 2, driver: "Sergio Perez", team: "Red Bull Racing", points: 285, wins: 2, podiums: 8 },
    { position: 3, driver: "Lewis Hamilton", team: "Mercedes", points: 234, wins: 0, podiums: 5 },
    { position: 4, driver: "Fernando Alonso", team: "Aston Martin", points: 206, wins: 0, podiums: 8 },
    { position: 5, driver: "Carlos Sainz", team: "Ferrari", points: 200, wins: 1, podiums: 7 },
];

const CONSTRUCTOR_STANDINGS = [
    { position: 1, team: "Red Bull Racing", points: 860, wins: 21, color: "bg-blue-600" },
    { position: 2, team: "Mercedes", points: 409, wins: 0, color: "bg-cyan-400" },
    { position: 3, team: "Ferrari", points: 406, wins: 1, color: "bg-red-600" },
    { position: 4, team: "Aston Martin", points: 280, wins: 0, color: "bg-green-600" },
    { position: 5, team: "McLaren", points: 302, wins: 0, color: "bg-orange-500" },
];

export default function StandingsPage() {
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
                            Live Standings
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            Championship <span className="text-primary">Standings</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Track the battle for supremacy in both driver and constructor championships.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Driver Standings */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-black italic uppercase mb-6 flex items-center gap-3">
                            <Trophy className="w-8 h-8 text-primary" />
                            Driver Standings
                        </h2>
                        <div className="space-y-4">
                            {DRIVER_STANDINGS.map((driver, index) => (
                                <motion.div
                                    key={driver.position}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                                >
                                    <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 group">
                                        <CardContent className="p-6">
                                            <div className="flex items-center gap-4">
                                                {/* Position */}
                                                <div className={`text-4xl font-black ${driver.position === 1 ? 'text-primary' : 'text-muted-foreground'}`}>
                                                    {driver.position}
                                                </div>

                                                {/* Driver Info */}
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                                        {driver.driver}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground">{driver.team}</p>
                                                </div>

                                                {/* Stats */}
                                                <div className="hidden md:flex gap-6 text-center">
                                                    <div>
                                                        <div className="text-xs text-muted-foreground uppercase">Wins</div>
                                                        <div className="text-lg font-bold">{driver.wins}</div>
                                                    </div>
                                                    <div>
                                                        <div className="text-xs text-muted-foreground uppercase">Podiums</div>
                                                        <div className="text-lg font-bold">{driver.podiums}</div>
                                                    </div>
                                                </div>

                                                {/* Points */}
                                                <div className="text-right">
                                                    <div className="text-3xl font-black text-primary">{driver.points}</div>
                                                    <div className="text-xs text-muted-foreground uppercase">Points</div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Constructor Standings */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-black italic uppercase mb-6 flex items-center gap-3">
                            <Award className="w-8 h-8 text-primary" />
                            Constructor Standings
                        </h2>
                        <div className="space-y-4">
                            {CONSTRUCTOR_STANDINGS.map((team, index) => (
                                <motion.div
                                    key={team.position}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                                >
                                    <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
                                        <CardContent className="p-6 relative">
                                            {/* Team Color Accent */}
                                            <div className={`absolute left-0 top-0 bottom-0 w-1 ${team.color}`}></div>

                                            <div className="flex items-center gap-4 pl-4">
                                                {/* Position */}
                                                <div className={`text-4xl font-black ${team.position === 1 ? 'text-primary' : 'text-muted-foreground'}`}>
                                                    {team.position}
                                                </div>

                                                {/* Team Info */}
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                                        {team.team}
                                                    </h3>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <TrendingUp className="w-4 h-4 text-green-500" />
                                                        <span className="text-sm text-muted-foreground">{team.wins} Wins</span>
                                                    </div>
                                                </div>

                                                {/* Points */}
                                                <div className="text-right">
                                                    <div className="text-3xl font-black text-primary">{team.points}</div>
                                                    <div className="text-xs text-muted-foreground uppercase">Points</div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
