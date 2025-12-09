"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const NEWS_ARTICLES = [
    {
        id: 1,
        slug: "monaco-victory",
        title: "Dominant Victory at Monaco Secures Championship Lead",
        excerpt: "Our team delivered a masterclass performance on the streets of Monte Carlo, extending our championship advantage with a commanding 1-2 finish.",
        category: "Race Report",
        date: "May 28, 2024",
        readTime: "5 min read",
        featured: true,
        image: "/images/News/news.jpg"
    },
    {
        id: 2,
        slug: "aerodynamic-upgrade",
        title: "New Aerodynamic Package Shows Promising Results in Testing",
        excerpt: "Latest wind tunnel data confirms significant downforce improvements with the upgraded front wing design.",
        category: "Technical",
        date: "May 25, 2024",
        readTime: "4 min read",
        featured: false,
        image: "/images/bikes/1.jpg"
    },
    {
        id: 3,
        slug: "driver-contracts",
        title: "Driver Lineup Confirmed for Upcoming Season",
        excerpt: "Team announces contract extensions for both drivers through 2026, ensuring stability and continuity.",
        category: "Team News",
        date: "May 20, 2024",
        readTime: "3 min read",
        featured: false,
        image: "/images/Teams_Member/driver1.jpg"
    },
    {
        id: 4,
        title: "Behind the Scenes: Race Weekend Preparation",
        excerpt: "An exclusive look at the meticulous planning and execution that goes into every race weekend.",
        category: "Feature",
        date: "May 15, 2024",
        readTime: "7 min read",
        featured: false,
        image: "/images/Gallery/4.jpg"
    },
    {
        id: 5,
        title: "Championship Battle Intensifies",
        excerpt: "With only five races remaining, the fight for the title has never been more exciting as teams push their limits.",
        category: "Race Report",
        date: "May 10, 2024",
        readTime: "6 min read",
        featured: false,
        image: "/images/Gallery/3.jpg"
    },
    {
        id: 6,
        title: "Sustainability Initiative Launched",
        excerpt: "Team announces groundbreaking partnership to achieve net-zero carbon emissions by 2030.",
        category: "Team News",
        date: "May 5, 2024",
        readTime: "4 min read",
        featured: false,
        image: "/images/bikes/5.jpg"
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
                    {NEWS_ARTICLES.filter(article => article.featured).map((article) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="mb-12"
                        >
                            <Link href={`/media/news/${article.slug}`}>
                                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden group cursor-pointer">
                                    <CardContent className="p-0">
                                        <div className="grid md:grid-cols-2 gap-0">
                                            {/* Featured Image */}
                                            <div className="relative h-64 md:h-auto overflow-hidden bg-zinc-900">
                                                <Image
                                                    src={article.image}
                                                    alt={article.title}
                                                    fill
                                                    className="object-cover transition-all duration-500 group-hover:scale-110"
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
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
                            </Link>
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
                                <Link href={`/media/news/${article.slug}`}>
                                    <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 h-full group cursor-pointer">
                                        <CardContent className="p-0">
                                            {/* Article Image */}
                                            <div className="relative h-48 overflow-hidden bg-zinc-900">
                                                <Image
                                                    src={article.image}
                                                    alt={article.title}
                                                    fill
                                                    className="object-cover transition-all duration-500 group-hover:scale-110"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                                <Badge className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white border-white/20">
                                                    {article.category}
                                                </Badge>
                                            </div>

                                            {/* Content */}
                                            <div className="p-6">
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
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
