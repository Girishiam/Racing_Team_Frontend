"use client";

import { motion } from "framer-motion";
import { Star, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const VIP_PACKAGES = [
    {
        name: "Paddock Club",
        price: "$2,999",
        features: ["Paddock access", "Gourmet dining", "Driver meet & greet", "Pit lane walk", "Premium seating"],
        color: "from-yellow-500/20"
    },
    {
        name: "Team Garage",
        price: "$5,999",
        features: ["All Paddock Club benefits", "Garage tour", "Team briefing", "Photo with car", "Signed merchandise"],
        color: "from-primary/20",
        featured: true
    },
    {
        name: "Ultimate Experience",
        price: "$12,999",
        features: ["All Team Garage benefits", "Grid walk", "Post-race celebration", "Driver dinner", "Trophy presentation"],
        color: "from-purple-500/20"
    }
];

export default function VIPPage() {
    return (
        <div className="min-h-screen bg-background">
            <section className="relative bg-gradient-to-b from-zinc-900 to-background py-20 border-b border-white/10">
                <div className="container mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
                        <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Premium Access</Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            VIP <span className="text-primary">Hospitality</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Experience race day like never before with exclusive paddock access, premium dining, and unforgettable moments.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-6">
                    {VIP_PACKAGES.map((pkg, index) => (
                        <motion.div key={pkg.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}>
                            <Card className={`bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 h-full group ${pkg.featured ? 'ring-2 ring-primary' : ''}`}>
                                <CardContent className="p-8 relative overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} to-transparent opacity-50`} />
                                    {pkg.featured && <Badge className="absolute top-4 right-4 bg-primary text-white">Best Value</Badge>}
                                    <div className="relative z-10">
                                        <Star className="w-12 h-12 text-primary mb-4" />
                                        <h3 className="text-3xl font-black italic uppercase mb-2 group-hover:text-primary transition-colors">{pkg.name}</h3>
                                        <div className="text-4xl font-black text-primary mb-6">{pkg.price}</div>
                                        <ul className="space-y-3 mb-8">
                                            {pkg.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <Trophy className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Button className="w-full" variant={pkg.featured ? "default" : "outline"}>Book Now</Button>
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
