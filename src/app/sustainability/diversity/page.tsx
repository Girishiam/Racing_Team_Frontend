"use client";

import { motion } from "framer-motion";
import { Users, Heart, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const INITIATIVES = [
    {
        title: "Women in Motorsport",
        description: "Supporting female talent through scholarships, mentorship programs, and career development",
        impact: "45% increase in female engineers",
        icon: Users
    },
    {
        title: "STEM Education",
        description: "Partnering with schools to inspire the next generation through motorsport-themed learning",
        impact: "50,000 students reached",
        icon: Award
    },
    {
        title: "Inclusive Hiring",
        description: "Building diverse teams that reflect the global fanbase we serve",
        impact: "65% diverse workforce",
        icon: Heart
    },
    {
        title: "Community Outreach",
        description: "Local programs supporting underrepresented communities in motorsport",
        impact: "120 community partnerships",
        icon: TrendingUp
    }
];

export default function DiversityPage() {
    return (
        <div className="min-h-screen bg-background">
            <section className="relative bg-gradient-to-b from-zinc-900 to-background py-20 border-b border-white/10">
                <div className="container mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
                        <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Inclusion & Diversity</Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            Diversity & <span className="text-primary">Inclusion</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Building a more inclusive motorsport community through meaningful action and lasting change.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-6">
                    {INITIATIVES.map((initiative, index) => (
                        <motion.div key={initiative.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}>
                            <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 h-full group">
                                <CardContent className="p-8">
                                    <initiative.icon className="w-12 h-12 text-primary mb-4" />
                                    <h3 className="text-2xl font-black italic uppercase mb-3 group-hover:text-primary transition-colors">{initiative.title}</h3>
                                    <p className="text-muted-foreground mb-4">{initiative.description}</p>
                                    <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                                        <TrendingUp className="w-4 h-4 text-primary" />
                                        <span className="text-sm font-bold text-primary">{initiative.impact}</span>
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
