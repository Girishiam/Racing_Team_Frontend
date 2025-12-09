"use client";

import { motion } from "framer-motion";
import { Users, Target, Heart, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const DRIVERS = [
    {
        name: "Alessandro Rossi",
        number: 11,
        nationality: "Italian",
        age: 28,
        championships: 2,
        podiums: 45,
        wins: 18,
        bio: "Two-time world champion known for aggressive overtaking and exceptional wet-weather performance."
    },
    {
        name: "Marcus Chen",
        number: 22,
        nationality: "Singaporean",
        age: 25,
        championships: 0,
        podiums: 12,
        wins: 3,
        bio: "Rising star with exceptional qualifying pace and technical feedback skills."
    },
];

const TEAM_MEMBERS = [
    { name: "Dr. Sarah Mitchell", role: "Team Principal", department: "Leadership" },
    { name: "James Rodriguez", role: "Technical Director", department: "Engineering" },
    { name: "Emily Watson", role: "Race Engineer", department: "Track Operations" },
    { name: "David Kim", role: "Aerodynamics Lead", department: "Engineering" },
    { name: "Sophie Laurent", role: "Strategy Director", department: "Performance" },
    { name: "Michael Zhang", role: "Chief Mechanic", department: "Track Operations" },
];

export default function DriversPage() {
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
                            Our Drivers
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            Meet The <span className="text-primary">Pilots</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            World-class talent behind the wheel, pushing the limits of speed and precision.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Drivers Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {DRIVERS.map((driver, index) => (
                            <motion.div
                                key={driver.number}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                            >
                                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                                    <CardContent className="p-0">
                                        {/* Driver Number Header */}
                                        <div className="bg-gradient-to-r from-primary/20 to-transparent border-b border-white/10 p-6">
                                            <div className="flex items-center justify-between">
                                                <div className="text-8xl font-black text-primary/30">#{driver.number}</div>
                                                <Badge className="bg-zinc-900 text-foreground">{driver.nationality}</Badge>
                                            </div>
                                        </div>

                                        {/* Driver Info */}
                                        <div className="p-8">
                                            <h2 className="text-3xl font-black italic uppercase mb-2 group-hover:text-primary transition-colors">
                                                {driver.name}
                                            </h2>
                                            <p className="text-muted-foreground mb-6">{driver.bio}</p>

                                            {/* Stats Grid */}
                                            <div className="grid grid-cols-4 gap-4 mb-6">
                                                <div className="text-center">
                                                    <div className="text-2xl font-black text-primary">{driver.age}</div>
                                                    <div className="text-xs text-muted-foreground uppercase">Age</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-2xl font-black text-primary">{driver.championships}</div>
                                                    <div className="text-xs text-muted-foreground uppercase">Titles</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-2xl font-black text-foreground">{driver.wins}</div>
                                                    <div className="text-xs text-muted-foreground uppercase">Wins</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-2xl font-black text-foreground">{driver.podiums}</div>
                                                    <div className="text-xs text-muted-foreground uppercase">Podiums</div>
                                                </div>
                                            </div>

                                            <Button className="w-full bg-primary hover:bg-primary/90">
                                                View Full Profile
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Team Members Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-black italic uppercase mb-8 flex items-center gap-3">
                            <Users className="w-8 h-8 text-primary" />
                            Key Team Members
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {TEAM_MEMBERS.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                                >
                                    <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300">
                                        <CardContent className="p-6">
                                            <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                                            <p className="text-sm text-primary mb-2">{member.role}</p>
                                            <Badge variant="outline" className="text-xs text-muted-foreground">
                                                {member.department}
                                            </Badge>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
