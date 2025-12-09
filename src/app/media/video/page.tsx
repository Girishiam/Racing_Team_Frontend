"use client";

import { motion } from "framer-motion";
import { Play, Film, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const VIDEO_CATEGORIES = [
    {
        name: "Race Highlights",
        count: 24,
        videos: [
            { title: "Monaco GP 2024 - Epic Finish", duration: "8:45", views: "3.2M", thumbnail: "race" },
            { title: "Silverstone Showdown", duration: "10:12", views: "2.8M", thumbnail: "race" },
            { title: "Spa Spectacular", duration: "9:30", views: "2.1M", thumbnail: "race" }
        ]
    },
    {
        name: "Behind the Scenes",
        count: 18,
        videos: [
            { title: "Pit Stop Perfection: 1.9s Record", duration: "5:20", views: "1.5M", thumbnail: "bts" },
            { title: "Factory Tour: Where Magic Happens", duration: "15:45", views: "2.3M", thumbnail: "bts" },
            { title: "Race Week Preparation", duration: "12:30", views: "980K", thumbnail: "bts" }
        ]
    },
    {
        name: "Driver Onboard",
        count: 32,
        videos: [
            { title: "Pole Lap - Driver POV", duration: "1:42", views: "4.1M", thumbnail: "onboard" },
            { title: "Wet Weather Masterclass", duration: "3:15", views: "3.5M", thumbnail: "onboard" },
            { title: "Qualifying Hotlap Analysis", duration: "4:50", views: "1.8M", thumbnail: "onboard" }
        ]
    },
    {
        name: "Interviews & Press",
        count: 45,
        videos: [
            { title: "Post-Race Interview: Victory Lane", duration: "6:30", views: "890K", thumbnail: "interview" },
            { title: "Team Principal Press Conference", duration: "18:20", views: "650K", thumbnail: "interview" },
            { title: "Driver Q&A Session", duration: "25:15", views: "1.2M", thumbnail: "interview" }
        ]
    }
];

export default function VideoPage() {
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
                            Video Library
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            Video <span className="text-primary">Hub</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Exclusive access to race highlights, behind-the-scenes content, driver interviews, and onboard footage.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                {VIDEO_CATEGORIES.map((category, categoryIndex) => (
                    <motion.div
                        key={category.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + categoryIndex * 0.1, duration: 0.6 }}
                        className="mb-16"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-4xl font-black italic uppercase flex items-center gap-3">
                                <Film className="w-8 h-8 text-primary" />
                                {category.name}
                            </h2>
                            <Badge className="bg-zinc-800 text-foreground">
                                {category.count} Videos
                            </Badge>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {category.videos.map((video, videoIndex) => (
                                <motion.div
                                    key={video.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + categoryIndex * 0.1 + videoIndex * 0.05, duration: 0.5 }}
                                >
                                    <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden group cursor-pointer">
                                        <CardContent className="p-0">
                                            {/* Video Thumbnail */}
                                            <div className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 aspect-video flex items-center justify-center">
                                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                                                <motion.div
                                                    whileHover={{ scale: 1.1 }}
                                                    className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-xl"
                                                >
                                                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                                                </motion.div>
                                                <Badge className="absolute bottom-2 right-2 bg-black/80 text-white text-xs flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {video.duration}
                                                </Badge>
                                            </div>

                                            {/* Video Info */}
                                            <div className="p-4">
                                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                                    {video.title}
                                                </h3>
                                                <p className="text-xs text-muted-foreground">{video.views} views</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <Card className="bg-gradient-to-r from-primary/10 to-transparent border-primary/30 overflow-hidden">
                        <CardContent className="p-12 text-center relative">
                            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full transform scale-150 opacity-20" />
                            <div className="relative z-10">
                                <Film className="w-16 h-16 text-primary mx-auto mb-4" />
                                <h2 className="text-3xl font-black italic uppercase mb-4">Subscribe for More</h2>
                                <p className="text-muted-foreground max-w-2xl mx-auto">
                                    Get notified when we upload new content. Never miss a race highlight, interview, or exclusive behind-the-scenes footage.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
