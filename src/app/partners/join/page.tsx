"use client";

import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Handshake, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const B2B_OPPORTUNITIES = [
    {
        title: "Brand Partnerships",
        description: "Align your brand with excellence and reach millions of passionate fans worldwide",
        icon: Award,
        benefits: ["Global exposure", "Premium hospitality", "Content rights", "Activation opportunities"]
    },
    {
        title: "Corporate Hospitality",
        description: "Entertain clients and partners with unforgettable VIP race experiences",
        icon: Handshake,
        benefits: ["Paddock access", "Gourmet dining", "Networking events", "Customizable packages"]
    },
    {
        title: "Technical Collaboration",
        description: "Partner on innovation and showcase your technical expertise",
        icon: TrendingUp,
        benefits: ["R&D collaboration", "Product development", "Technical showcase", "Innovation credits"]
    }
];

export default function PartnersJoinPage() {
    return (
        <div className="min-h-screen bg-background">
            <section className="relative bg-gradient-to-b from-zinc-900 to-background py-20 border-b border-white/10">
                <div className="container mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
                        <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">B2B Solutions</Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            Business <span className="text-primary">Partnerships</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Explore bespoke partnership solutions designed to elevate your brand and drive business growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {B2B_OPPORTUNITIES.map((opportunity, index) => (
                        <motion.div key={opportunity.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}>
                            <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 h-full group">
                                <CardContent className="p-8">
                                    <opportunity.icon className="w-12 h-12 text-primary mb-4" />
                                    <h3 className="text-2xl font-black italic uppercase mb-3 group-hover:text-primary transition-colors">{opportunity.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-6">{opportunity.description}</p>
                                    <ul className="space-y-2">
                                        {opportunity.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm">
                                                <Briefcase className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
                    <Card className="bg-gradient-to-r from-primary/10 to-transparent border-primary/30 overflow-hidden">
                        <CardContent className="p-12 text-center relative">
                            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full transform scale-150 opacity-20" />
                            <div className="relative z-10">
                                <Briefcase className="w-16 h-16 text-primary mx-auto mb-4" />
                                <h2 className="text-3xl font-black italic uppercase mb-4">Start Your Partnership Journey</h2>
                                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                    Our partnerships team is ready to create a tailored solution that meets your business objectives.
                                </p>
                                <Button size="lg" className="font-bold uppercase tracking-wider px-8">Schedule Consultation</Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
