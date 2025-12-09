"use client";

import { motion } from "framer-motion";
import { MapPin, Gauge } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TRACKS = [
    {
        name: "Monaco Grand Prix",
        location: "Monte Carlo, Monaco",
        circuit: "Circuit de Monaco",
        length: "3.337 km",
        laps: 78,
        lapRecord: "1:12.909",
        recordHolder: "Lewis Hamilton",
        corners: 19,
        type: "Street Circuit",
        difficulty: "Extreme"
    },
    {
        name: "Silverstone Circuit",
        location: "Silverstone, UK",
        circuit: "Silverstone Circuit",
        length: "5.891 km",
        laps: 52,
        lapRecord: "1:27.097",
        recordHolder: "Max Verstappen",
        corners: 18,
        type: "Permanent",
        difficulty: "High"
    },
    {
        name: "Spa-Francorchamps",
        location: "Stavelot, Belgium",
        circuit: "Circuit de Spa-Francorchamps",
        length: "7.004 km",
        laps: 44,
        lapRecord: "1:46.286",
        recordHolder: "Valtteri Bottas",
        corners: 19,
        type: "Permanent",
        difficulty: "High"
    },
    {
        name: "Suzuka Circuit",
        location: "Suzuka, Japan",
        circuit: "Suzuka International Racing Course",
        length: "5.807 km",
        laps: 53,
        lapRecord: "1:30.983",
        recordHolder: "Lewis Hamilton",
        corners: 18,
        type: "Permanent",
        difficulty: "Extreme"
    },
    {
        name: "Monza Circuit",
        location: "Monza, Italy",
        circuit: "Autodromo Nazionale di Monza",
        length: "5.793 km",
        laps: 53,
        lapRecord: "1:21.046",
        recordHolder: "Rubens Barrichello",
        corners: 11,
        type: "Permanent",
        difficulty: "Medium"
    },
    {
        name: "Circuit of the Americas",
        location: "Austin, Texas, USA",
        circuit: "Circuit of the Americas",
        length: "5.513 km",
        laps: 56,
        lapRecord: "1:36.169",
        recordHolder: "Charles Leclerc",
        corners: 20,
        type: "Permanent",
        difficulty: "High"
    }
];

export default function TracksPage() {
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
                            Circuit Guide
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            Track <span className="text-primary">Guide</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Explore the world&apos;s most iconic racing circuits, from street tracks to legendary permanent venues.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Tracks Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6">
                        {TRACKS.map((track, index) => (
                            <motion.div
                                key={track.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden group h-full">
                                    <CardContent className="p-0">
                                        {/* Header */}
                                        <div className="bg-gradient-to-r from-primary/20 to-transparent border-b border-white/10 p-6">
                                            <div className="flex items-start justify-between mb-2">
                                                <div className="flex-1">
                                                    <h3 className="text-2xl font-black italic uppercase mb-2 group-hover:text-primary transition-colors">
                                                        {track.name}
                                                    </h3>
                                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <MapPin className="w-4 h-4 text-primary" />
                                                        {track.location}
                                                    </div>
                                                </div>
                                                <Badge
                                                    className={
                                                        track.difficulty === "Extreme"
                                                            ? "bg-red-500/20 text-red-400 border-red-500/30"
                                                            : track.difficulty === "High"
                                                                ? "bg-orange-500/20 text-orange-400 border-orange-500/30"
                                                                : "bg-green-500/20 text-green-400 border-green-500/30"
                                                    }
                                                >
                                                    {track.difficulty}
                                                </Badge>
                                            </div>
                                        </div>

                                        {/* Stats */}
                                        <div className="p-6">
                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                <div>
                                                    <div className="text-xs text-muted-foreground uppercase mb-1">Circuit Length</div>
                                                    <div className="text-xl font-bold text-primary">{track.length}</div>
                                                </div>
                                                <div>
                                                    <div className="text-xs text-muted-foreground uppercase mb-1">Total Laps</div>
                                                    <div className="text-xl font-bold">{track.laps}</div>
                                                </div>
                                                <div>
                                                    <div className="text-xs text-muted-foreground uppercase mb-1">Corners</div>
                                                    <div className="text-xl font-bold">{track.corners}</div>
                                                </div>
                                                <div>
                                                    <div className="text-xs text-muted-foreground uppercase mb-1">Type</div>
                                                    <div className="text-xl font-bold">{track.type}</div>
                                                </div>
                                            </div>

                                            {/* Lap Record */}
                                            <div className="border-t border-white/10 pt-4">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Gauge className="w-4 h-4 text-primary" />
                                                    <span className="text-xs text-muted-foreground uppercase">Lap Record</span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="text-2xl font-black text-primary">{track.lapRecord}</div>
                                                    <div className="text-sm text-muted-foreground">{track.recordHolder}</div>
                                                </div>
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
