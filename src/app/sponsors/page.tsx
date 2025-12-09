"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sponsor } from "@/types";

const SPONSORS: Sponsor[] = [
    { name: 'Velocity Oil', tier: 'Platinum' },
    { name: 'TechStream', tier: 'Gold' },
    { name: 'AeroDynamics', tier: 'Gold' },
    { name: 'GripTyres', tier: 'Silver' },
    { name: 'SparkPlugs', tier: 'Silver' },
    { name: 'GearBox', tier: 'Bronze' },
];

export default function SponsorsPage() {
    return (
        <div className="py-20 container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16 text-center"
            >
                <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4">
                    Our <span className="text-primary">Partners</span>
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Powered by industry leaders who share our vision for speed, innovation, and unwavering performance.
                </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
                {SPONSORS.map((sponsor, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="aspect-video bg-secondary/20 border border-white/5 flex items-center justify-center p-8 grayscale hover:grayscale-0 transition-all duration-300 hover:border-primary hover:bg-secondary/40 rounded-lg group"
                    >
                        <div className="text-xl font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                            {sponsor.name}
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-secondary/10 border border-white/5 p-12 text-center rounded-2xl relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full transform scale-150 opacity-20" />
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold uppercase italic mb-4">Join the Race</h2>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                        Discover unique branding opportunities and high-octane engagement for your business. Let's win together.
                    </p>
                    <Button size="lg" className="font-bold uppercase tracking-wider px-8">
                        Become a Sponsor
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}
