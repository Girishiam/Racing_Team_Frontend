"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const MEMBERSHIP_TIERS = [
    {
        name: "Bronze",
        price: "$49/year",
        benefits: [
            "Official membership card",
            "Monthly newsletter",
            "10% merchandise discount",
            "Exclusive wallpapers"
        ],
        color: "from-orange-600/20"
    },
    {
        name: "Silver",
        price: "$99/year",
        benefits: [
            "All Bronze benefits",
            "Priority ticket access",
            "Meet & greet opportunities",
            "Signed team merchandise",
            "VIP forum access"
        ],
        color: "from-gray-400/20",
        popular: true
    },
    {
        name: "Gold",
        price: "$249/year",
        benefits: [
            "All Silver benefits",
            "Paddock tour access",
            "Driver video messages",
            "Exclusive team events",
            "Premium merchandise pack",
            "Pit lane walk access"
        ],
        color: "from-yellow-500/20"
    }
];

export default function FanClubPage() {
    return (
        <div className="min-h-screen bg-background">
            <section className="relative bg-gradient-to-b from-zinc-900 to-background py-20 border-b border-white/10">
                <div className="container mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
                        <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Official Fan Club</Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            Join The <span className="text-primary">Club</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Become part of our global family and unlock exclusive benefits, content, and experiences.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {MEMBERSHIP_TIERS.map((tier, index) => (
                        <motion.div key={tier.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}>
                            <Card className={`bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 h-full group ${tier.popular ? 'ring-2 ring-primary' : ''}`}>
                                <CardContent className="p-8 relative overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} to-transparent opacity-50`} />
                                    {tier.popular && <Badge className="absolute top-4 right-4 bg-primary text-white">Most Popular</Badge>}
                                    <div className="relative z-10">
                                        <h3 className="text-3xl font-black italic uppercase mb-2 group-hover:text-primary transition-colors">{tier.name}</h3>
                                        <div className="text-4xl font-black text-primary mb-6">{tier.price}</div>
                                        <ul className="space-y-3 mb-8">
                                            {tier.benefits.map((benefit, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <Star className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Button className="w-full" variant={tier.popular ? "default" : "outline"}>Join Now</Button>
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
