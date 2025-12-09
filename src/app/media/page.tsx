"use client";

import { motion } from "framer-motion";
import { Newspaper, Video, Image as ImageIcon, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MEDIA_SECTIONS = [
    {
        title: "Latest News",
        description: "Stay updated with the latest race reports, team announcements, and behind-the-scenes stories.",
        icon: Newspaper,
        href: "/media/news",
        stats: { label: "Articles", value: "150+" },
        color: "text-blue-500"
    },
    {
        title: "Video Gallery",
        description: "Watch race highlights, driver interviews, and exclusive team content from the paddock.",
        icon: Video,
        href: "/media/video",
        stats: { label: "Videos", value: "80+" },
        color: "text-red-500"
    },
    {
        title: "Photo Gallery",
        description: "Explore stunning photography capturing the intensity, passion, and glory of motorsport.",
        icon: ImageIcon,
        href: "/media/gallery",
        stats: { label: "Photos", value: "500+" },
        color: "text-purple-500"
    }
];

export default function MediaPage() {
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
                            Content Hub
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            Media <span className="text-primary">Center</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Your destination for all team content - news, videos, and photography from the world of motorsport.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Media Sections */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {MEDIA_SECTIONS.map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <Link href={section.href}>
                                    <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 h-full group cursor-pointer overflow-hidden">
                                        <CardContent className="p-8 relative">
                                            {/* Background Icon */}
                                            <section.icon className={`absolute -right-8 -top-8 w-40 h-40 ${section.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

                                            <div className="relative z-10">
                                                <section.icon className={`w-12 h-12 ${section.color} mb-6 group-hover:scale-110 transition-transform duration-300`} />

                                                <h2 className="text-2xl font-black italic uppercase mb-3 group-hover:text-primary transition-colors">
                                                    {section.title}
                                                </h2>

                                                <p className="text-muted-foreground mb-6">
                                                    {section.description}
                                                </p>

                                                {/* Stats */}
                                                <div className="flex items-center justify-between mb-6 p-4 bg-white/5 rounded-lg">
                                                    <span className="text-sm text-muted-foreground uppercase tracking-wider">
                                                        {section.stats.label}
                                                    </span>
                                                    <span className={`text-2xl font-black ${section.color}`}>
                                                        {section.stats.value}
                                                    </span>
                                                </div>

                                                <Button className="w-full bg-primary hover:bg-primary/90 group-hover:translate-x-1 transition-transform duration-300">
                                                    View All
                                                    <ArrowRight className="w-4 h-4 ml-2" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Content Section */}
            <section className="py-16 border-t border-white/10">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-center"
                    >
                        <h2 className="text-3xl font-black italic uppercase mb-4">
                            Stay <span className="text-primary">Connected</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                            Follow us on social media for real-time updates, exclusive content, and behind-the-scenes access.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Badge className="px-4 py-2 bg-white/5 text-foreground hover:bg-white/10 transition-colors cursor-pointer">
                                Twitter/X
                            </Badge>
                            <Badge className="px-4 py-2 bg-white/5 text-foreground hover:bg-white/10 transition-colors cursor-pointer">
                                Instagram
                            </Badge>
                            <Badge className="px-4 py-2 bg-white/5 text-foreground hover:bg-white/10 transition-colors cursor-pointer">
                                YouTube
                            </Badge>
                            <Badge className="px-4 py-2 bg-white/5 text-foreground hover:bg-white/10 transition-colors cursor-pointer">
                                Facebook
                            </Badge>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
