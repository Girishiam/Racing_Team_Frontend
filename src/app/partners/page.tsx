"use client";

import { motion } from "framer-motion";
import { Handshake, TrendingUp, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SPONSOR_TIERS = [
    {
        tier: "Title Partner",
        description: "Maximum brand visibility across all team assets and global marketing campaigns",
        benefits: ["Primary logo placement on car", "Naming rights", "Global media exposure", "Exclusive hospitality"],
        investment: "Premium"
    },
    {
        tier: "Official Partner",
        description: "Significant brand presence and association with championship-winning performance",
        benefits: ["Logo on car & team wear", "Hospitality packages", "Content rights", "B2B opportunities"],
        investment: "High"
    },
    {
        tier: "Technical Partner",
        description: "Collaborate on innovation while showcasing your technical expertise",
        benefits: ["Technical collaboration", "Product development", "Brand association", "Networking"],
        investment: "Medium"
    }
];

const PARTNERSHIP_STATS = [
    { label: "Global Reach", value: "1.5B", icon: Users },
    { label: "TV Viewers", value: "500M", icon: TrendingUp },
    { label: "Social Engagement", value: "50M", icon: Award },
    { label: "Race Markets", value: "24", icon: Handshake }
];

export default function PartnersLandingPage() {
    return (
        <div className="min-h-screen bg-background">
            <section className="relative bg-gradient-to-b from-zinc-900 to-background py-20 border-b border-white/10">
                <div className="container mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
                        <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Partnership Opportunities</Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            Our <span className="text-primary">Partners</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Join forces with a championship-winning team and unlock unparalleled brand exposure on the global stage.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                {/* Stats */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mb-16">
                    <div className="grid md:grid-cols-4 gap-6">
                        {PARTNERSHIP_STATS.map((stat, index) => (
                            <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}>
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

                {/* Partnership Tiers */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="mb-16">
                    <h2 className="text-4xl font-black italic uppercase mb-8 flex items-center gap-3">
                        <Handshake className="w-8 h-8 text-primary" />
                        Partnership Levels
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {SPONSOR_TIERS.map((sponsor, index) => (
                            <motion.div key={sponsor.tier} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}>
                                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 h-full group">
                                    <CardContent className="p-8">
                                        <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">{sponsor.investment} Investment</Badge>
                                        <h3 className="text-2xl font-black italic uppercase mb-3 group-hover:text-primary transition-colors">{sponsor.tier}</h3>
                                        <p className="text-sm text-muted-foreground mb-6">{sponsor.description}</p>
                                        <ul className="space-y-2 mb-6">
                                            {sponsor.benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <Award className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Button className="w-full">Learn More</Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
                    <Card className="bg-gradient-to-r from-primary/10 to-transparent border-primary/30 overflow-hidden">
                        <CardContent className="p-12 text-center relative">
                            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full transform scale-150 opacity-20" />
                            <div className="relative z-10">
                                <Handshake className="w-16 h-16 text-primary mx-auto mb-4" />
                                <h2 className="text-3xl font-black italic uppercase mb-4">Ready to Partner?</h2>
                                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                    Let&apos;s discuss how a partnership can accelerate your brand&apos;s global reach and business objectives.
                                </p>
                                <Button size="lg" className="font-bold uppercase tracking-wider px-8">Contact Us</Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
