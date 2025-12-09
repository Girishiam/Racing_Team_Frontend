"use client";

import { motion } from "framer-motion";
import { Video, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const VIDEOS = [
    {
        id: 1,
        title: "Monaco GP 2024 - Race Highlights",
        duration: "5:42",
        views: "2.4M",
        category: "Race Highlights",
        featured: true
    },
    {
        id: 2,
        title: "Behind the Scenes: Pit Stop Perfection",
        duration: "8:15",
        views: "1.2M",
        category: "Behind the Scenes"
    },
    {
        id: 3,
        title: "Driver Onboard: Qualifying Lap",
        duration: "3:28",
        views: "890K",
        category: "Onboard"
    },
    {
        id: 4,
        title: "Team Radio: Best Moments",
        duration: "6:33",
        views: "1.5M",
        category: "Team Radio"
    },
    {
        id: 5,
        title: "Car Launch 2024 Season",
        duration: "12:45",
        views: "3.1M",
        category: "Special"
    },
    {
        id: 6,
        title: "Driver Interview: Championship Thoughts",
        duration: "7:20",
        views: "750K",
        category: "Interviews"
    },
];

export default function GalleryPage() {
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
                            Video Gallery
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            Watch & <span className="text-primary">Replay</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Relive the action with race highlights, behind-the-scenes content, and exclusive team footage.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Video Gallery */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    {/* Featured Video */}
                    {VIDEOS.filter(v => v.featured).map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="mb-12"
                        >
                            <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                                <CardContent className="p-0">
                                    {/* Video Thumbnail */}
                                    <div className="relative bg-gradient-to-br from-primary/20 to-zinc-900 aspect-video flex items-center justify-center cursor-pointer">
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="relative z-10 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-2xl"
                                        >
                                            <Play className="w-10 h-10 text-white ml-1" fill="white" />
                                        </motion.div>
                                        <Badge className="absolute top-4 left-4 bg-primary text-white">
                                            Featured
                                        </Badge>
                                        <Badge className="absolute bottom-4 right-4 bg-black/80 text-white">
                                            {video.duration}
                                        </Badge>
                                    </div>

                                    {/* Video Info */}
                                    <div className="p-6">
                                        <Badge className="mb-3 bg-zinc-800 text-muted-foreground">
                                            {video.category}
                                        </Badge>
                                        <h2 className="text-2xl font-black italic uppercase mb-2 group-hover:text-primary transition-colors">
                                            {video.title}
                                        </h2>
                                        <p className="text-sm text-muted-foreground">{video.views} views</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}

                    {/* Video Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {VIDEOS.filter(v => !v.featured).map((video, index) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                            >
                                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                                    <CardContent className="p-0">
                                        {/* Video Thumbnail */}
                                        <div className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 aspect-video flex items-center justify-center cursor-pointer">
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-xl"
                                            >
                                                <Play className="w-8 h-8 text-white ml-1" fill="white" />
                                            </motion.div>
                                            <Badge className="absolute bottom-2 right-2 bg-black/80 text-white text-xs">
                                                {video.duration}
                                            </Badge>
                                        </div>

                                        {/* Video Info */}
                                        <div className="p-4">
                                            <Badge className="mb-2 bg-zinc-800 text-muted-foreground text-xs">
                                                {video.category}
                                            </Badge>
                                            <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors line-clamp-2">
                                                {video.title}
                                            </h3>
                                            <p className="text-xs text-muted-foreground">{video.views} views</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
