"use client";

import { motion } from "framer-motion";
import { Gamepad2, Trophy, Target, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const GAMES = [
    { title: "Race Predictor", description: "Predict podium finishes and win prizes", icon: Target, players: "45K" },
    { title: "Fantasy League", description: "Build your dream team and compete", icon: Trophy, players: "120K" },
    { title: "Trivia Challenge", description: "Test your F1 knowledge weekly", icon: Gamepad2, players: "80K" },
    { title: "Photo Caption Contest", description: "Caption race photos for prizes", icon: Gift, players: "25K" }
];

export default function GamesPage() {
    return (
        <div className="min-h-screen bg-background">
            <section className="relative bg-gradient-to-b from-zinc-900 to-background py-20 border-b border-white/10">
                <div className="container mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
                        <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Interactive Fun</Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            Games & <span className="text-primary">Contests</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Play, compete, and win amazing prizes every race weekend with our interactive fan games.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-6">
                    {GAMES.map((game, index) => (
                        <motion.div key={game.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}>
                            <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 group">
                                <CardContent className="p-8">
                                    <game.icon className="w-12 h-12 text-primary mb-4" />
                                    <h3 className="text-2xl font-black italic uppercase mb-2 group-hover:text-primary transition-colors">{game.title}</h3>
                                    <p className="text-muted-foreground mb-4">{game.description}</p>
                                    <div className="flex items-center justify-between">
                                        <Badge className="bg-zinc-800 text-foreground">{game.players} Players</Badge>
                                        <Button>Play Now</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
