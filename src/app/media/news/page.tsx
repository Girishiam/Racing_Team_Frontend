"use client";

import { motion } from "framer-motion";
import { Newspaper, Video, Image as ImageIcon, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const NEWS_ARTICLES = [
    {
        id: 1,
        title: "Dominant Victory at Monaco Secures Championship Lead",
        excerpt: "Our team delivered a masterclass performance on the streets of Monte Carlo, extending our championship advantage with a commanding 1-2 finish.",
        category: "Race Report",
        date: "May 28, 2024",
        readTime: "5 min read",
        featured: true
    },
    {
        id: 2,
        title: "New Aerodynamic Package Shows Promising Results in Testing",
        excerpt: "Latest wind tunnel data confirms significant downforce improvements with the upgraded front wing design.",
        category: "Technical",
        date: "May 25, 2024",
        readTime: "4 min read",
        featured: false
    },
    {
        id: 3,
        title: "Driver Lineup Confirmed for Upcoming Season",
        excerpt: "Team announces contract extensions for both drivers through 2026, ensuring stability and continuity.",
        category: "Team News",
        date: "May 20, 2024",
        readTime: "3 min read",
        featured: false
    },
    {
        id: 4,
        title: "Behind the Scenes: Race Weekend Preparation",
        excerpt: "An exclusive look at the meticulous planning and execution that goes into every race weekend.",
        category: "Feature",
        date: "May 15, 2024",
        readTime: "7 min read",
        featured: false
    },
];

export default function NewsPage() {
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
                            Latest Updates
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            Team <span className="text-primary">News</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Stay updated with the latest news, race reports, and behind-the-scenes stories from our team.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* News Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    {/* Featured Article */}
                    {NEWS_ARTICLES.filter(article => article.featured).map((article, index) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="mb-12"
                        >
                            <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                                <CardContent className="p-0">
                                    <div className="grid md:grid-cols-2 gap-0">
                                        {/* Image Placeholder */}
                                        <div className="bg-gradient-to-br from-primary/20 to-zinc-900 h-64 md:h-auto flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
                                            <ImageIcon className="w-24 h-24 text-white/20" />
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 md:p-12 flex flex-col justify-center">
                                            <div className="flex items-center gap-3 mb-4">
                                                <Badge className="bg-primary/20 text-primary border-primary/30">
                                                    {article.category}
                                                </Badge>
                                                <Badge variant="outline" className="text-muted-foreground">
                                                    Featured
                                                </Badge>
                                            </div>
                                            <h2 className="text-3xl md:text-4xl font-black italic uppercase mb-4 group-hover:text-primary transition-colors">
                                                {article.title}
                                            </h2>
                                            <p className="text-muted-foreground mb-6 text-lg">
                                                {article.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                    <span>{article.date}</span>
                                                    <span>•</span>
                                                    <span>{article.readTime}</span>
                                                </div>
                                                <Button className="bg-primary hover:bg-primary/90">
                                                    Read More
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}

                    {/* Regular Articles Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {NEWS_ARTICLES.filter(article => !article.featured).map((article, index) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                            >
                                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 h-full group">
                                    <CardContent className="p-0">
                                        {/* Image Placeholder */}
                                        <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 h-48 flex items-center justify-center border-b border-white/10">
                                            <Newspaper className="w-16 h-16 text-white/20" />
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <Badge className="mb-3 bg-zinc-800 text-muted-foreground">
                                                {article.category}
                                            </Badge>
                                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                                {article.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                                {article.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                                <span>{article.date}</span>
                                                <span>{article.readTime}</span>
                                            </div>
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
