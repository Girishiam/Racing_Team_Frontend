"use client";

import { motion } from "framer-motion";
import { Users, Award, TrendingUp, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LEADERSHIP = [
    {
        name: "Dr. Sarah Mitchell",
        role: "Team Principal",
        bio: "Former aerodynamics engineer with 15 years of F1 experience. Led the team to 3 championship titles.",
        achievements: ["3x Championship Winner", "Engineer of the Year 2019"],
        department: "Leadership"
    },
    {
        name: "James Rodriguez",
        role: "Technical Director",
        bio: "Innovative mind behind our cutting-edge powertrain developments and aerodynamic solutions.",
        achievements: ["20+ Patents", "Technical Innovation Award"],
        department: "Engineering"
    },
    {
        name: "Emily Watson",
        role: "Sporting Director",
        bio: "Strategic mastermind responsible for race strategy and driver development programs.",
        achievements: ["Strategy Expert", "15 Years Experience"],
        department: "Operations"
    },
    {
        name: "Michael Chen",
        role: "Chief Engineer",
        bio: "Leads the engineering team with expertise in vehicle dynamics and performance optimization.",
        achievements: ["PhD in Mechanical Engineering", "100+ Race Wins"],
        department: "Engineering"
    },
    {
        name: "Sophie Laurent",
        role: "Commercial Director",
        bio: "Drives partnerships and commercial growth, securing key sponsorships and brand collaborations.",
        achievements: ["$500M+ Partnerships", "Brand Builder"],
        department: "Commercial"
    },
    {
        name: "David Kim",
        role: "Head of Aerodynamics",
        bio: "Pioneering aerodynamicist pushing the boundaries of downforce and efficiency.",
        achievements: ["CFD Expert", "Wind Tunnel Specialist"],
        department: "Engineering"
    }
];

export default function ManagementPage() {
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
                            Leadership Team
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            Team <span className="text-primary">Management</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Meet the visionary leaders driving our pursuit of excellence on and off the track.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Management Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {LEADERSHIP.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 h-full group">
                                    <CardContent className="p-6">
                                        {/* Avatar Placeholder */}
                                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-zinc-900 mb-4 flex items-center justify-center border-2 border-primary/30 group-hover:border-primary transition-colors">
                                            <Users className="w-12 h-12 text-primary/50" />
                                        </div>

                                        {/* Info */}
                                        <h3 className="text-2xl font-black italic uppercase mb-1 group-hover:text-primary transition-colors">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm text-primary mb-2">{member.role}</p>
                                        <Badge className="mb-4 bg-zinc-800 text-muted-foreground text-xs">
                                            {member.department}
                                        </Badge>

                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                            {member.bio}
                                        </p>

                                        {/* Achievements */}
                                        <div className="space-y-2">
                                            {member.achievements.map((achievement, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-xs">
                                                    <Award className="w-3 h-3 text-primary" />
                                                    <span className="text-muted-foreground">{achievement}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="mt-16"
                    >
                        <h2 className="text-4xl font-black italic uppercase mb-8 flex items-center gap-3">
                            <TrendingUp className="w-8 h-8 text-primary" />
                            Team Performance
                        </h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { label: "Championships", value: "12", icon: Award },
                                { label: "Race Wins", value: "287", icon: Target },
                                { label: "Podiums", value: "542", icon: TrendingUp },
                                { label: "Team Members", value: "800+", icon: Users }
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                                >
                                    <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 group">
                                        <CardContent className="p-6 text-center">
                                            <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                                            <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                                            <div className="text-sm text-muted-foreground uppercase">{stat.label}</div>
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
