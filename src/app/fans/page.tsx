"use client";

import { motion } from "framer-motion";
import { Users, Heart, Gift, Star, Download, Gamepad2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FAN_ZONES = [
    {
        title: "Fan Club",
        description: "Join our official fan club for exclusive benefits, early ticket access, and members-only content",
        icon: Users,
        href: "/fans/club",
        color: "from-primary/20"
    },
    {
        title: "Games & Contests",
        description: "Play interactive games, predict race results, and win amazing prizes every race weekend",
        icon: Gamepad2,
        href: "/fans/games",
        color: "from-blue-500/20"
    },
    {
        title: "Downloads",
        description: "Free wallpapers, screensavers, and digital content to show your team pride",
        icon: Download,
        href: "/fans/downloads",
        color: "from-purple-500/20"
    },
    {
        title: "VIP Hospitality",
        description: "Experience race day like never before with exclusive paddock access and premium packages",
        icon: Star,
        href: "/fans/vip",
        color: "from-yellow-500/20"
    }
];

export default function FansPage() {
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
                            Fan Zone
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            For The <span className="text-primary">Fans</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Your passion drives us forward. Explore exclusive content, join our community, and get closer to the action.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                {/* Fan Zones Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {FAN_ZONES.map((zone, index) => (
                        <motion.div
                            key={zone.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                        >
                            <Link href={zone.href}>
                                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 h-full group cursor-pointer overflow-hidden">
                                    <CardContent className="p-8 relative">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${zone.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                        <div className="relative z-10">
                                            <zone.icon className="w-16 h-16 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                                            <h3 className="text-3xl font-black italic uppercase mb-3 group-hover:text-primary transition-colors">
                                                {zone.title}
                                            </h3>
                                            <p className="text-muted-foreground mb-4">
                                                {zone.description}
                                            </p>
                                            <Button variant="outline" className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                                                Explore →
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Community Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-black italic uppercase mb-8 flex items-center gap-3">
                        <Heart className="w-8 h-8 text-primary" />
                        Our Community
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { label: "Global Fans", value: "5.2M", icon: Users },
                            { label: "Fan Club Members", value: "850K", icon: Heart },
                            { label: "Social Followers", value: "12M", icon: Star },
                            { label: "Prizes Awarded", value: "$2M+", icon: Gift }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
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

                {/* Newsletter CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <Card className="bg-gradient-to-r from-primary/10 to-transparent border-primary/30 overflow-hidden">
                        <CardContent className="p-12 text-center relative">
                            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full transform scale-150 opacity-20" />
                            <div className="relative z-10">
                                <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
                                <h2 className="text-3xl font-black italic uppercase mb-4">Stay Connected</h2>
                                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                    Subscribe to our newsletter for exclusive updates, behind-the-scenes content, and special fan offers.
                                </p>
                                <Button size="lg" className="font-bold uppercase tracking-wider px-8">
                                    Subscribe Now
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
