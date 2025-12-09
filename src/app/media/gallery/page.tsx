"use client";

import { motion } from "framer-motion";
import { Camera, Download, Share2, ZoomIn } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useState } from "react";

const GALLERY_IMAGES = [
    {
        id: 1,
        src: "/images/Gallery/1.jpg",
        title: "Race Action - Monaco GP",
        category: "Race Day",
        views: "2.4M"
    },
    {
        id: 2,
        src: "/images/Gallery/2.jpg",
        title: "Pit Stop Excellence",
        category: "Behind the Scenes",
        views: "1.8M"
    },
    {
        id: 3,
        src: "/images/Gallery/3.jpg",
        title: "Victory Celebration",
        category: "Race Day",
        views: "3.2M"
    },
    {
        id: 4,
        src: "/images/Gallery/4.jpg",
        title: "Team Garage",
        category: "Behind the Scenes",
        views: "950K"
    },
    {
        id: 5,
        src: "/images/Gallery/5.jpg",
        title: "Driver Focus",
        category: "Portraits",
        views: "1.5M"
    },
    {
        id: 6,
        src: "/images/Gallery/6.jpg",
        title: "Track Dominance",
        category: "Race Day",
        views: "2.1M"
    },
    {
        id: 7,
        src: "/images/Gallery/7.jpg",
        title: "Championship Moment",
        category: "Special",
        views: "4.5M"
    }
];

const CATEGORIES = ["All", "Race Day", "Behind the Scenes", "Portraits", "Special"];

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredImages = selectedCategory === "All"
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

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
                            Photo Gallery
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            Visual <span className="text-primary">Stories</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Capturing the intensity, passion, and glory of motorsport through stunning photography.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex flex-wrap gap-3 mb-12"
                >
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-lg font-bold uppercase text-sm transition-all duration-300 ${selectedCategory === category
                                    ? "bg-primary text-white"
                                    : "bg-white/5 text-muted-foreground hover:bg-white/10"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            layout
                        >
                            <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden group cursor-pointer">
                                <CardContent className="p-0">
                                    {/* Image Container */}
                                    <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                                        <Image
                                            src={image.src}
                                            alt={image.title}
                                            fill
                                            className="object-cover transition-all duration-500 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                                        {/* Hover Actions */}
                                        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
                                            >
                                                <ZoomIn className="w-5 h-5 text-white" />
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                                            >
                                                <Download className="w-5 h-5 text-white" />
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                                            >
                                                <Share2 className="w-5 h-5 text-white" />
                                            </motion.button>
                                        </div>

                                        {/* Category Badge */}
                                        <Badge className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white border-white/20">
                                            {image.category}
                                        </Badge>
                                    </div>

                                    {/* Image Info */}
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                                            {image.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Camera className="w-4 h-4" />
                                            <span>{image.views} views</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Load More Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-bold uppercase rounded-lg transition-colors duration-300">
                        Load More Photos
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
