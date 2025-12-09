"use client";

import { motion } from "framer-motion";
import { Handshake, Award, Zap, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PARTNERS = [
    {
        name: "PowerTech Engines",
        category: "Powertrain",
        partnership: "Official Engine Supplier",
        since: "2018",
        description: "Providing cutting-edge hybrid power units with unmatched reliability and performance"
    },
    {
        name: "AeroFlow Dynamics",
        category: "Aerodynamics",
        partnership: "Technical Partner",
        since: "2020",
        description: "Advanced CFD simulation and wind tunnel testing for optimal aerodynamic efficiency"
    },
    {
        name: "Carbon Composites Ltd",
        category: "Materials",
        partnership: "Chassis Supplier",
        since: "2019",
        description: "Ultra-lightweight carbon fiber components meeting the highest safety standards"
    },
    {
        name: "Precision Electronics",
        category: "Electronics",
        partnership: "Systems Integration",
        since: "2021",
        description: "State-of-the-art ECU, sensors, and telemetry systems for real-time data analysis"
    },
    {
        name: "GripTech Tyres",
        category: "Tyres",
        partnership: "Official Tyre Partner",
        since: "2017",
        description: "High-performance racing tyres engineered for maximum grip and durability"
    },
    {
        name: "FluidDynamics Oil",
        category: "Lubricants",
        partnership: "Technical Partner",
        since: "2019",
        description: "Premium lubricants and fluids optimized for extreme racing conditions"
    }
];

export default function PartnersPage() {
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
                            Technical Suppliers
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            Technical <span className="text-primary">Partners</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Collaborating with industry leaders to deliver cutting-edge technology and performance excellence.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                {/* Partners Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        {PARTNERS.map((partner, index) => (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                            >
                                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 h-full group">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                                <Handshake className="w-6 h-6 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-start justify-between mb-2">
                                                    <h3 className="text-2xl font-black italic uppercase group-hover:text-primary transition-colors">
                                                        {partner.name}
                                                    </h3>
                                                    <Badge className="bg-zinc-800 text-muted-foreground text-xs">
                                                        Since {partner.since}
                                                    </Badge>
                                                </div>
                                                <div className="flex gap-2 mb-3">
                                                    <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                                                        {partner.category}
                                                    </Badge>
                                                    <Badge variant="outline" className="text-xs">
                                                        {partner.partnership}
                                                    </Badge>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-sm text-muted-foreground">
                                            {partner.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Partnership Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-16"
                >
                    <h2 className="text-4xl font-black italic uppercase mb-8 flex items-center gap-3">
                        <Award className="w-8 h-8 text-primary" />
                        Partnership Impact
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { label: "Technical Partners", value: "25+", icon: Handshake },
                            { label: "Countries", value: "12", icon: Award },
                            { label: "Joint Patents", value: "43", icon: Zap },
                            { label: "Innovations", value: "150+", icon: Wrench }
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

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-16"
                >
                    <Card className="bg-gradient-to-r from-primary/10 to-transparent border-primary/30 overflow-hidden">
                        <CardContent className="p-12 text-center relative">
                            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full transform scale-150 opacity-20" />
                            <div className="relative z-10">
                                <Handshake className="w-16 h-16 text-primary mx-auto mb-4" />
                                <h2 className="text-3xl font-black italic uppercase mb-4">Become a Technical Partner</h2>
                                <p className="text-muted-foreground max-w-2xl mx-auto">
                                    Join our network of world-class suppliers and contribute to championship-winning technology.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
