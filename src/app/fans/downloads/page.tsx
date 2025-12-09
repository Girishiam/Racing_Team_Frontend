"use client";

import { motion } from "framer-motion";
import { Download, Monitor } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const WALLPAPERS = [
    {
        id: 1,
        title: "Race Action Wallpaper",
        resolution: "3840x2160",
        size: "4K",
        image: "/images/Wallpaper/1.jpg"
    },
    {
        id: 2,
        title: "Victory Celebration",
        resolution: "3840x2160",
        size: "4K",
        image: "/images/Wallpaper/2.jpg"
    },
    {
        id: 3,
        title: "Track Dominance",
        resolution: "3840x2160",
        size: "4K",
        image: "/images/Wallpaper/3.jpg"
    },
    {
        id: 4,
        title: "Team Spirit",
        resolution: "3840x2160",
        size: "4K",
        image: "/images/Wallpaper/4.jpg"
    },
    {
        id: 5,
        title: "Speed & Power",
        resolution: "3840x2160",
        size: "4K",
        image: "/images/Wallpaper/5.jpg"
    },
    {
        id: 6,
        title: "Championship Glory",
        resolution: "3840x2160",
        size: "4K",
        image: "/images/Wallpaper/6.jpg"
    },
    {
        id: 7,
        title: "Racing Excellence",
        resolution: "3840x2160",
        size: "4K",
        image: "/images/Wallpaper/7.jpg"
    }
];

export default function DownloadsPage() {
    return (
        <div className="min-h-screen bg-background">
            <section className="relative bg-gradient-to-b from-zinc-900 to-background py-20 border-b border-white/10">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                            Free Wallpapers
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            Digital <span className="text-primary">Downloads</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Free 4K wallpapers to show your team pride on all your devices. Download and personalize your desktop.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {WALLPAPERS.map((wallpaper, index) => (
                        <motion.div
                            key={wallpaper.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden group cursor-pointer">
                                <CardContent className="p-0">
                                    {/* Wallpaper Preview */}
                                    <div className="relative aspect-video overflow-hidden bg-zinc-900">
                                        <Image
                                            src={wallpaper.image}
                                            alt={wallpaper.title}
                                            fill
                                            className="object-cover transition-all duration-500 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                                        {/* Resolution Badge */}
                                        <Badge className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white border-white/20">
                                            <Monitor className="w-3 h-3 mr-1" />
                                            {wallpaper.size}
                                        </Badge>

                                        {/* Download Button Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Button className="bg-primary hover:bg-primary/90">
                                                    <Download className="w-4 h-4 mr-2" />
                                                    Download
                                                </Button>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                                            {wallpaper.title}
                                        </h3>
                                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                                            <span>{wallpaper.resolution}</span>
                                            <span className="text-primary font-bold">Free</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 text-center"
                >
                    <Card className="bg-zinc-950/50 border-white/10 inline-block">
                        <CardContent className="p-6">
                            <p className="text-muted-foreground">
                                All wallpapers are free for personal use. Available in 4K resolution (3840x2160).
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
