"use client";

import { motion } from "framer-motion";
import { Gauge, Zap, Settings, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const SPECS = {
    engine: {
        type: "V6 Turbo Hybrid",
        displacement: "1.6L",
        power: "1000+ HP",
        rpm: "15,000 RPM",
        fuelFlow: "110 kg/h max"
    },
    performance: {
        topSpeed: "360 km/h",
        acceleration: "0-100 km/h in 2.6s",
        braking: "100-0 km/h in 1.4s",
        gForce: "6G in corners"
    },
    chassis: {
        weight: "798 kg (min)",
        length: "5.6m",
        width: "2.0m",
        height: "0.95m",
        wheelbase: "3.6m"
    },
    technology: {
        ers: "Energy Recovery System",
        drs: "Drag Reduction System",
        telemetry: "Real-time data monitoring",
        materials: "Carbon fiber monocoque"
    }
};

export default function SpecsPage() {
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
                            Technical Specifications
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            The <span className="text-primary">Machine</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Engineering excellence meets raw power. Discover the technology that drives our championship ambitions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Car Gallery */}
            <section className="py-16 border-b border-white/10">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl font-black italic uppercase mb-4">
                            Car <span className="text-primary">Gallery</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl">
                            Explore our championship-winning machine from every angle.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                num: 1,
                                title: "Night City Rush",
                                description: "Urban performance captured in motion through city streets"
                            },
                            {
                                num: 2,
                                title: "Track Domination",
                                description: "Precision cornering at championship-winning speeds"
                            },
                            {
                                num: 3,
                                title: "Speed Blur",
                                description: "Raw power and velocity on the racing circuit"
                            },
                            {
                                num: 4,
                                title: "Championship Colors",
                                description: "Our iconic livery in full racing glory"
                            },
                            {
                                num: 5,
                                title: "Sunset Circuit",
                                description: "Golden hour performance on the track"
                            },
                            {
                                num: 6,
                                title: "Racing Precision",
                                description: "Every detail engineered for victory"
                            },
                            {
                                num: 7,
                                title: "Track Beast",
                                description: "The ultimate racing machine in action"
                            }
                        ].map((view, index) => (
                            <motion.div
                                key={view.num}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden group h-full">
                                    <CardContent className="p-0">
                                        <div className="relative aspect-video overflow-hidden bg-zinc-900">
                                            <Image
                                                src={`/images/bikes/${view.num}.jpg`}
                                                alt={view.title}
                                                fill
                                                className="object-cover transition-all duration-500 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                                            {/* View Number Badge */}
                                            <Badge className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white border-white/20">
                                                View {view.num}
                                            </Badge>
                                        </div>

                                        {/* Card Info */}
                                        <div className="p-5">
                                            <h3 className="text-xl font-black italic uppercase mb-2 group-hover:text-primary transition-colors">
                                                {view.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {view.description}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specs Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Engine */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                        >
                            <Card className="bg-zinc-950/50 border-white/10 h-full">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-2xl font-black italic uppercase">
                                        <Gauge className="w-6 h-6 text-primary" />
                                        Engine
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {Object.entries(SPECS.engine).map(([key, value]) => (
                                        <div key={key} className="flex justify-between items-center py-3 border-b border-white/5">
                                            <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                                            <span className="font-bold text-foreground">{value}</span>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Performance */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <Card className="bg-zinc-950/50 border-white/10 h-full">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-2xl font-black italic uppercase">
                                        <Zap className="w-6 h-6 text-primary" />
                                        Performance
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {Object.entries(SPECS.performance).map(([key, value]) => (
                                        <div key={key} className="flex justify-between items-center py-3 border-b border-white/5">
                                            <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                                            <span className="font-bold text-primary">{value}</span>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Chassis */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <Card className="bg-zinc-950/50 border-white/10 h-full">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-2xl font-black italic uppercase">
                                        <Settings className="w-6 h-6 text-primary" />
                                        Chassis
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {Object.entries(SPECS.chassis).map(([key, value]) => (
                                        <div key={key} className="flex justify-between items-center py-3 border-b border-white/5">
                                            <span className="text-muted-foreground capitalize">{key}</span>
                                            <span className="font-bold text-foreground">{value}</span>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Technology */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <Card className="bg-zinc-950/50 border-white/10 h-full">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-2xl font-black italic uppercase">
                                        <Award className="w-6 h-6 text-primary" />
                                        Technology
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {Object.entries(SPECS.technology).map(([key, value]) => (
                                        <div key={key} className="flex justify-between items-center py-3 border-b border-white/5">
                                            <span className="text-muted-foreground uppercase text-xs tracking-wider">{key}</span>
                                            <span className="font-bold text-foreground text-sm">{value}</span>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
