"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const RACES = [
    {
        round: 1,
        name: "Bahrain Grand Prix",
        circuit: "Bahrain International Circuit",
        location: "Sakhir, Bahrain",
        date: "March 2-4, 2024",
        status: "completed",
        winner: "Max Verstappen",
        fastestLap: "1:31.447"
    },
    {
        round: 2,
        name: "Saudi Arabian Grand Prix",
        circuit: "Jeddah Corniche Circuit",
        location: "Jeddah, Saudi Arabia",
        date: "March 9-11, 2024",
        status: "completed",
        winner: "Sergio Perez",
        fastestLap: "1:30.734"
    },
    {
        round: 3,
        name: "Australian Grand Prix",
        circuit: "Albert Park Circuit",
        location: "Melbourne, Australia",
        date: "March 24-26, 2024",
        status: "upcoming",
        winner: null,
        fastestLap: null
    },
    {
        round: 4,
        name: "Japanese Grand Prix",
        circuit: "Suzuka International Racing Course",
        location: "Suzuka, Japan",
        date: "April 7-9, 2024",
        status: "upcoming",
        winner: null,
        fastestLap: null
    },
    {
        round: 5,
        name: "Monaco Grand Prix",
        circuit: "Circuit de Monaco",
        location: "Monte Carlo, Monaco",
        date: "May 26-28, 2024",
        status: "live",
        winner: null,
        fastestLap: null
    },
];

export default function CalendarPage() {
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
                            2024 Season
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            Race <span className="text-primary">Calendar</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Follow our journey through the most prestigious circuits around the globe.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Races Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid gap-6">
                        {RACES.map((race, index) => (
                            <motion.div
                                key={race.round}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                                    <CardContent className="p-0">
                                        <div className="flex flex-col md:flex-row">
                                            {/* Round Number */}
                                            <div className="bg-gradient-to-br from-primary/20 to-transparent border-r border-white/10 p-6 md:p-8 flex items-center justify-center min-w-[120px]">
                                                <div className="text-center">
                                                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Round</div>
                                                    <div className="text-5xl font-black text-primary">{race.round}</div>
                                                </div>
                                            </div>

                                            {/* Race Info */}
                                            <div className="flex-1 p-6 md:p-8">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div>
                                                        <h3 className="text-2xl font-black italic uppercase mb-2 group-hover:text-primary transition-colors">
                                                            {race.name}
                                                        </h3>
                                                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                                            <div className="flex items-center gap-2">
                                                                <MapPin className="w-4 h-4 text-primary" />
                                                                {race.location}
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <Calendar className="w-4 h-4 text-primary" />
                                                                {race.date}
                                                            </div>
                                                        </div>
                                                        <p className="text-sm text-muted-foreground mt-2">{race.circuit}</p>
                                                    </div>
                                                    <Badge
                                                        className={
                                                            race.status === "live"
                                                                ? "bg-primary text-white animate-pulse"
                                                                : race.status === "completed"
                                                                    ? "bg-zinc-800 text-muted-foreground"
                                                                    : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                                        }
                                                    >
                                                        {race.status === "live" ? "LIVE NOW" : race.status === "completed" ? "Completed" : "Upcoming"}
                                                    </Badge>
                                                </div>

                                                {/* Results */}
                                                {race.status === "completed" && (
                                                    <div className="flex gap-4 pt-4 border-t border-white/10">
                                                        <div className="flex items-center gap-2">
                                                            <Trophy className="w-4 h-4 text-primary" />
                                                            <span className="text-sm">
                                                                <span className="text-muted-foreground">Winner:</span>{" "}
                                                                <span className="font-bold">{race.winner}</span>
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <Clock className="w-4 h-4 text-primary" />
                                                            <span className="text-sm">
                                                                <span className="text-muted-foreground">Fastest Lap:</span>{" "}
                                                                <span className="font-bold">{race.fastestLap}</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
