"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TeamMember } from "@/types";

const TEAM_MEMBERS: TeamMember[] = [
    {
        id: 1,
        name: "Alex Rivera",
        role: "Lead Driver",
        bio: "Champion of the 2024 GT Series with a relentless drive for perfection.",
        stats: { races: 42, podiums: 28, wins: 15 }
    },
    {
        id: 2,
        name: "Sarah Chen",
        role: "Chief Engineer",
        bio: "The mastermind behind our aerodynamic innovations and race strategy.",
        stats: { races: 156, podiums: 89, wins: 45 }
    },
    {
        id: 3,
        name: "Marcus Thorne",
        role: "Driver",
        bio: "Rising star with aggressive tactical skills on the track.",
        stats: { races: 12, podiums: 4, wins: 1 }
    }
];

export default function TeamPage() {
    return (
        <div className="py-20 container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16 text-center"
            >
                <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4">
                    Meet the <span className="text-primary">Crew</span>
                </h1>
                <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {TEAM_MEMBERS.map((member, index) => (
                    <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="h-full border-border/50 bg-secondary/20 backdrop-blur hover:bg-secondary/40 transition-colors group">
                            <CardHeader className="relative p-0 overflow-hidden aspect-square bg-muted/50">
                                {/* Placeholder for image */}
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 font-bold uppercase tracking-widest">
                                    Photo Unavailable
                                </div>
                                <div className="absolute top-4 right-4">
                                    <Badge variant="secondary" className="uppercase font-bold tracking-wider">{member.role}</Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <CardTitle className="text-2xl font-bold uppercase italic mb-2">{member.name}</CardTitle>
                                <CardDescription className="text-muted-foreground mb-6 h-12 line-clamp-2">
                                    {member.bio}
                                </CardDescription>

                                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-4 text-center">
                                    <div>
                                        <div className="text-2xl font-bold text-primary">{member.stats?.races}</div>
                                        <div className="text-xs uppercase text-muted-foreground font-bold tracking-wider">Races</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-primary">{member.stats?.podiums}</div>
                                        <div className="text-xs uppercase text-muted-foreground font-bold tracking-wider">Podiums</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-primary">{member.stats?.wins}</div>
                                        <div className="text-xs uppercase text-muted-foreground font-bold tracking-wider">Wins</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
