"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const DRIVERS = [
    {
        id: "max-velocity",
        name: "Max Velocity",
        number: 1,
        nationality: "British",
        age: 28,
        championships: 3,
        podiums: 89,
        wins: 45,
        bio: "Three-time world champion known for aggressive overtaking and exceptional wet-weather performance.",
        image: "/images/Teams_Member/driver1.jpg"
    },
    {
        id: "sarah-storm",
        name: "Sarah Storm",
        number: 7,
        nationality: "German",
        age: 26,
        championships: 1,
        podiums: 42,
        wins: 18,
        bio: "Rising star and youngest world champion in team history. Known for tactical brilliance and consistency.",
        image: "/images/Teams_Member/driver2.jpg"
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
                                        {/* Driver Image */}
                                        <div className="relative h-80 overflow-hidden bg-zinc-900">
                                            <Image
                                                src={driver.image}
                                                alt={driver.name}
                                                fill
                                                className="object-cover object-top transition-all duration-500 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                                            {/* Driver Number Overlay */}
                                            <div className="absolute top-4 left-4 text-8xl font-black text-white/20 group-hover:text-primary/30 transition-colors duration-300">
                                                #{driver.number}
                                            </div>

                                            {/* Nationality Badge */}
                                            <Badge className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white border-white/20">
                                                {driver.nationality}
                                            </Badge>
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

                                            <Link href={`/team/drivers/${driver.id}`}>
                                                <Button className="w-full bg-primary hover:bg-primary/90">
                                                    View Full Profile
                                                </Button>
                                            </Link>
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
