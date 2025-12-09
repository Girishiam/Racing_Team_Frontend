"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Camera, Download, Share2, ZoomIn, X, Gauge, Zap, Weight, Settings } from "lucide-react";
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

const BIKE_GALLERY = [
    {
        id: 1,
        src: "/images/bikes/1.jpg",
        name: "Thunder Bolt RS-X",
        model: "2024 Championship Edition",
        category: "Racing Bikes",
        specs: {
            engine: "1000cc V4",
            power: "220 HP",
            weight: "157 kg",
            topSpeed: "340 km/h"
        },
        description: "Our flagship racing machine, engineered for ultimate performance and precision on the track."
    },
    {
        id: 2,
        src: "/images/bikes/2.jpg",
        name: "Velocity Pro GT",
        model: "2024 Track Edition",
        category: "Racing Bikes",
        specs: {
            engine: "998cc Inline-4",
            power: "215 HP",
            weight: "162 kg",
            topSpeed: "335 km/h"
        },
        description: "Precision-crafted for speed demons, combining aerodynamics with raw power."
    },
    {
        id: 3,
        src: "/images/bikes/3.jpg",
        name: "Apex Racer MX",
        model: "2024 Competition Series",
        category: "Racing Bikes",
        specs: {
            engine: "1050cc V-Twin",
            power: "225 HP",
            weight: "155 kg",
            topSpeed: "345 km/h"
        },
        description: "The pinnacle of racing technology, designed to dominate every corner and straight."
    },
    {
        id: 4,
        src: "/images/bikes/4.jpg",
        name: "Storm Chaser R1",
        model: "2024 Elite Performance",
        category: "Racing Bikes",
        specs: {
            engine: "999cc Inline-4",
            power: "218 HP",
            weight: "160 kg",
            topSpeed: "338 km/h"
        },
        description: "Built for champions, this machine delivers unmatched acceleration and handling."
    },
    {
        id: 5,
        src: "/images/bikes/5.jpg",
        name: "Nitro Force ZX",
        model: "2024 Grand Prix Edition",
        category: "Racing Bikes",
        specs: {
            engine: "1100cc V4",
            power: "230 HP",
            weight: "153 kg",
            topSpeed: "350 km/h"
        },
        description: "The ultimate expression of speed, power, and cutting-edge racing technology."
    },
    {
        id: 6,
        src: "/images/bikes/6.jpg",
        name: "Phoenix Turbo X",
        model: "2024 Championship Spec",
        category: "Racing Bikes",
        specs: {
            engine: "1000cc Supercharged",
            power: "235 HP",
            weight: "158 kg",
            topSpeed: "355 km/h"
        },
        description: "Supercharged performance meets legendary reliability in this championship winner."
    },
    {
        id: 7,
        src: "/images/bikes/7.jpg",
        name: "Titan Racer GP",
        model: "2024 Limited Edition",
        category: "Racing Bikes",
        specs: {
            engine: "1050cc V4 Turbo",
            power: "240 HP",
            weight: "151 kg",
            topSpeed: "360 km/h"
        },
        description: "Limited edition masterpiece, pushing the boundaries of what's possible on two wheels."
    }
];

const CATEGORIES = ["All", "Race Day", "Behind the Scenes", "Portraits", "Special"];

interface ModalImage {
    src: string;
    title?: string;
    category?: string;
    views?: string;
    name?: string;
    model?: string;
    specs?: {
        engine: string;
        power: string;
        weight: string;
        topSpeed: string;
    };
    description?: string;
}

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState<ModalImage | null>(null);

    const filteredImages = selectedCategory === "All"
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

    const openModal = (image: ModalImage) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

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
                                    <div
                                        className="relative aspect-[4/3] overflow-hidden bg-zinc-900"
                                        onClick={() => openModal(image)}
                                    >
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
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    openModal(image);
                                                }}
                                                className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
                                            >
                                                <ZoomIn className="w-5 h-5 text-white" />
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={(e) => e.stopPropagation()}
                                                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                                            >
                                                <Download className="w-5 h-5 text-white" />
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={(e) => e.stopPropagation()}
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

            {/* Bikes Section */}
            <section className="py-16 bg-zinc-950/30 border-t border-white/10">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                            Our Machines
                        </Badge>
                        <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">
                            Racing <span className="text-primary">Bikes</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Explore our championship-winning machines, engineered for speed, precision, and victory.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {BIKE_GALLERY.map((bike, index) => (
                            <motion.div
                                key={bike.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden group cursor-pointer h-full">
                                    <CardContent className="p-0">
                                        {/* Bike Image */}
                                        <div
                                            className="relative aspect-[4/3] overflow-hidden bg-zinc-900"
                                            onClick={() => openModal(bike)}
                                        >
                                            <Image
                                                src={bike.src}
                                                alt={bike.name}
                                                fill
                                                className="object-cover transition-all duration-500 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                                            {/* Zoom Button */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        openModal(bike);
                                                    }}
                                                    className="w-14 h-14 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg"
                                                >
                                                    <ZoomIn className="w-6 h-6 text-white" />
                                                </motion.button>
                                            </div>

                                            {/* Category Badge */}
                                            <Badge className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white border-white/20">
                                                {bike.category}
                                            </Badge>
                                        </div>

                                        {/* Bike Details */}
                                        <div className="p-6">
                                            <h3 className="text-2xl font-black italic uppercase mb-1 group-hover:text-primary transition-colors">
                                                {bike.name}
                                            </h3>
                                            <p className="text-sm text-primary mb-4">{bike.model}</p>

                                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                                {bike.description}
                                            </p>

                                            {/* Specs Grid */}
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="flex items-center gap-2 bg-white/5 rounded-lg p-2">
                                                    <Settings className="w-4 h-4 text-primary" />
                                                    <div>
                                                        <p className="text-xs text-muted-foreground">Engine</p>
                                                        <p className="text-sm font-bold">{bike.specs.engine}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 bg-white/5 rounded-lg p-2">
                                                    <Zap className="w-4 h-4 text-primary" />
                                                    <div>
                                                        <p className="text-xs text-muted-foreground">Power</p>
                                                        <p className="text-sm font-bold">{bike.specs.power}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 bg-white/5 rounded-lg p-2">
                                                    <Weight className="w-4 h-4 text-primary" />
                                                    <div>
                                                        <p className="text-xs text-muted-foreground">Weight</p>
                                                        <p className="text-sm font-bold">{bike.specs.weight}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 bg-white/5 rounded-lg p-2">
                                                    <Gauge className="w-4 h-4 text-primary" />
                                                    <div>
                                                        <p className="text-xs text-muted-foreground">Top Speed</p>
                                                        <p className="text-sm font-bold">{bike.specs.topSpeed}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Close Button */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0.1 }}
                            onClick={closeModal}
                            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-10 border border-white/20"
                        >
                            <X className="w-6 h-6 text-white" />
                        </motion.button>

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-6xl w-full max-h-[90vh] overflow-y-auto"
                        >
                            <div className="relative">
                                {/* Image */}
                                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/20">
                                    <Image
                                        src={selectedImage.src}
                                        alt={selectedImage.title || selectedImage.name || "Image"}
                                        fill
                                        className="object-contain"
                                        sizes="90vw"
                                    />
                                </div>

                                {/* Image Details */}
                                <div className="mt-6 bg-zinc-950/80 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                                    {selectedImage.name ? (
                                        // Bike Details
                                        <>
                                            <div className="flex items-start justify-between mb-4">
                                                <div>
                                                    <h2 className="text-3xl font-black italic uppercase mb-2">
                                                        {selectedImage.name}
                                                    </h2>
                                                    <p className="text-primary text-lg">{selectedImage.model}</p>
                                                </div>
                                                <Badge className="bg-primary/20 text-primary border-primary/30">
                                                    {selectedImage.category}
                                                </Badge>
                                            </div>

                                            <p className="text-muted-foreground mb-6">
                                                {selectedImage.description}
                                            </p>

                                            {selectedImage.specs && (
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                    <div className="flex items-center gap-3 bg-white/5 rounded-lg p-4">
                                                        <Settings className="w-6 h-6 text-primary" />
                                                        <div>
                                                            <p className="text-xs text-muted-foreground uppercase">Engine</p>
                                                            <p className="text-lg font-bold">{selectedImage.specs.engine}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3 bg-white/5 rounded-lg p-4">
                                                        <Zap className="w-6 h-6 text-primary" />
                                                        <div>
                                                            <p className="text-xs text-muted-foreground uppercase">Power</p>
                                                            <p className="text-lg font-bold">{selectedImage.specs.power}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3 bg-white/5 rounded-lg p-4">
                                                        <Weight className="w-6 h-6 text-primary" />
                                                        <div>
                                                            <p className="text-xs text-muted-foreground uppercase">Weight</p>
                                                            <p className="text-lg font-bold">{selectedImage.specs.weight}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3 bg-white/5 rounded-lg p-4">
                                                        <Gauge className="w-6 h-6 text-primary" />
                                                        <div>
                                                            <p className="text-xs text-muted-foreground uppercase">Top Speed</p>
                                                            <p className="text-lg font-bold">{selectedImage.specs.topSpeed}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        // Gallery Image Details
                                        <>
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <h2 className="text-2xl font-black italic uppercase mb-2">
                                                        {selectedImage.title}
                                                    </h2>
                                                    {selectedImage.views && (
                                                        <div className="flex items-center gap-2 text-muted-foreground">
                                                            <Camera className="w-4 h-4" />
                                                            <span>{selectedImage.views} views</span>
                                                        </div>
                                                    )}
                                                </div>
                                                {selectedImage.category && (
                                                    <Badge className="bg-primary/20 text-primary border-primary/30">
                                                        {selectedImage.category}
                                                    </Badge>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
