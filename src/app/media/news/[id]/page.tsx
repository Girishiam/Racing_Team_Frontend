"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { Calendar, Clock, User, Share2, ArrowLeft, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// News article data
interface NewsArticle {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    author: string;
    image: string;
    content: {
        intro: string;
        sections: {
            heading: string;
            text: string;
        }[];
        conclusion: string;
    };
    tags: string[];
    relatedArticles: string[];
}

const NEWS_DATA: Record<string, NewsArticle> = {
    "monaco-victory": {
        id: "monaco-victory",
        title: "Dominant Victory at Monaco Secures Championship Lead",
        excerpt: "Our team delivered a masterclass performance on the streets of Monte Carlo, extending our championship advantage with a commanding 1-2 finish.",
        category: "Race Report",
        date: "May 28, 2024",
        readTime: "5 min read",
        author: "Sarah Johnson",
        image: "/images/News/news.jpg",
        content: {
            intro: "In what can only be described as a perfect weekend, our team dominated the Monaco Grand Prix from start to finish. Max Velocity claimed his third consecutive victory while Sarah Storm secured a crucial second place, delivering a commanding 1-2 finish that extends our championship lead.",
            sections: [
                {
                    heading: "Qualifying Perfection",
                    text: "The weekend started perfectly with Max Velocity claiming pole position with a stunning lap that was nearly half a second faster than the competition. Sarah Storm locked out the front row, giving us the perfect platform for race day. The team's technical preparations and strategic planning paid dividends as both drivers extracted maximum performance from the car."
                },
                {
                    heading: "Race Day Dominance",
                    text: "From lights out, Max controlled the race with precision and pace. Despite the challenging nature of Monaco's tight streets, he managed the gap to perfection while Sarah held off intense pressure from behind. Our pit crew executed flawless stops, maintaining our advantage throughout the race."
                },
                {
                    heading: "Championship Implications",
                    text: "This victory extends Max's championship lead to 45 points with only five races remaining. The team has now won four consecutive races, demonstrating the consistency and performance needed to secure both drivers' and constructors' championships. Our technical package continues to evolve, and we're confident in maintaining this momentum."
                }
            ],
            conclusion: "This Monaco victory represents everything our team stands for - precision, performance, and teamwork. As we head into the next race, we carry this momentum forward with confidence and determination to continue our championship charge."
        },
        tags: ["Monaco GP", "Victory", "Championship", "Max Velocity", "Sarah Storm"],
        relatedArticles: ["aerodynamic-upgrade", "driver-contracts"]
    },
    "aerodynamic-upgrade": {
        id: "aerodynamic-upgrade",
        title: "New Aerodynamic Package Shows Promising Results",
        excerpt: "Latest wind tunnel data confirms significant downforce improvements with the upgraded front wing design.",
        category: "Technical",
        date: "May 25, 2024",
        readTime: "4 min read",
        author: "Michael Chen",
        image: "/images/bikes/1.jpg",
        content: {
            intro: "Our engineering team has developed a revolutionary aerodynamic package that promises to deliver significant performance gains. After months of development and testing, the new front wing design has shown remarkable improvements in both wind tunnel and track testing.",
            sections: [
                {
                    heading: "Development Process",
                    text: "The development of this aerodynamic package began six months ago when our CFD simulations identified potential gains in front-end downforce. Our engineers worked tirelessly, running thousands of simulations and conducting extensive wind tunnel testing to validate the concept. The result is a design that increases downforce by 8% while maintaining drag levels."
                },
                {
                    heading: "Track Testing Results",
                    text: "Initial track testing at our private facility showed immediate improvements in high-speed cornering stability. Both drivers reported increased confidence in the car's front-end grip, particularly in fast corners. Lap time analysis revealed consistent gains of 0.2-0.3 seconds per lap, which could prove crucial in qualifying and race scenarios."
                },
                {
                    heading: "Race Implementation",
                    text: "The package will make its race debut at the next Grand Prix. Our technical team is confident that the improvements will translate into competitive advantages, particularly on circuits with high-speed corners. We've manufactured sufficient parts to ensure both cars can run the upgrade throughout the race weekend."
                }
            ],
            conclusion: "This aerodynamic upgrade represents our commitment to continuous improvement and technical excellence. It's another step forward in our championship campaign and demonstrates the capabilities of our engineering team."
        },
        tags: ["Aerodynamics", "Technology", "Development", "Performance"],
        relatedArticles: ["monaco-victory", "driver-contracts"]
    },
    "driver-contracts": {
        id: "driver-contracts",
        title: "Driver Lineup Confirmed for Upcoming Season",
        excerpt: "Team announces contract extensions for both drivers through 2026, ensuring stability and continuity.",
        category: "Team News",
        date: "May 20, 2024",
        readTime: "3 min read",
        author: "Emma Williams",
        image: "/images/Teams_Member/driver1.jpg",
        content: {
            intro: "We are thrilled to announce that both Max Velocity and Sarah Storm have signed contract extensions that will keep them with the team through the 2026 season. This commitment ensures stability and continuity as we pursue multiple championships.",
            sections: [
                {
                    heading: "Max Velocity's Extension",
                    text: "Max Velocity, our three-time world champion, has committed his future to the team with a multi-year extension. Since joining us in 2018, Max has been instrumental in our success, delivering 45 race victories and three championships. His leadership both on and off track has been invaluable to the team's development."
                },
                {
                    heading: "Sarah Storm's Commitment",
                    text: "Sarah Storm, the youngest world champion in our team's history, has also extended her contract through 2026. Her tactical brilliance and consistency have made her one of the most formidable drivers on the grid. The partnership between Max and Sarah has proven to be one of the strongest in motorsport."
                },
                {
                    heading: "Team Principal's Statement",
                    text: "Our Team Principal expressed his delight at securing both drivers for the long term: 'Having Max and Sarah committed to our future is crucial for our championship ambitions. They represent the perfect combination of experience and youth, speed and consistency. Together, they give us the best driver lineup in motorsport.'"
                }
            ],
            conclusion: "These contract extensions provide the foundation for continued success. With our driver lineup secured, we can focus entirely on developing the fastest car and winning more championships."
        },
        tags: ["Drivers", "Contracts", "Team News", "Max Velocity", "Sarah Storm"],
        relatedArticles: ["monaco-victory", "aerodynamic-upgrade"]
    }
};

export default function NewsDetailPage() {
    const params = useParams();
    const articleId = params.id as string;
    const article = NEWS_DATA[articleId];

    if (!article) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-black mb-4">Article Not Found</h1>
                    <Link href="/media/news">
                        <Button>Back to News</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Image */}
            <section className="relative h-[60vh] overflow-hidden">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                {/* Back Button */}
                <div className="absolute top-8 left-8 z-10">
                    <Link href="/media/news">
                        <Button variant="outline" className="bg-black/50 backdrop-blur-sm border-white/20 hover:bg-black/70">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to News
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Article Content */}
            <div className="container mx-auto px-4 -mt-32 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Article Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="bg-zinc-950/90 backdrop-blur-sm border-white/10 mb-8">
                            <CardContent className="p-8 md:p-12">
                                <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                                    {article.category}
                                </Badge>

                                <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">
                                    {article.title}
                                </h1>

                                <p className="text-xl text-muted-foreground mb-8">
                                    {article.excerpt}
                                </p>

                                {/* Meta Information */}
                                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground border-t border-white/10 pt-6">
                                    <div className="flex items-center gap-2">
                                        <User className="w-4 h-4 text-primary" />
                                        <span>{article.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-primary" />
                                        <span>{article.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-primary" />
                                        <span>{article.readTime}</span>
                                    </div>
                                    <button className="flex items-center gap-2 hover:text-primary transition-colors ml-auto">
                                        <Share2 className="w-4 h-4" />
                                        <span>Share</span>
                                    </button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Article Body */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <Card className="bg-zinc-950/50 border-white/10 mb-8">
                            <CardContent className="p-8 md:p-12">
                                {/* Introduction */}
                                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                    {article.content.intro}
                                </p>

                                {/* Content Sections */}
                                {article.content.sections.map((section, index) => (
                                    <div key={index} className="mb-8">
                                        <h2 className="text-2xl font-black italic uppercase mb-4 text-primary">
                                            {section.heading}
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {section.text}
                                        </p>
                                    </div>
                                ))}

                                {/* Conclusion */}
                                <div className="border-t border-white/10 pt-8 mt-8">
                                    <p className="text-lg text-muted-foreground leading-relaxed italic">
                                        {article.content.conclusion}
                                    </p>
                                </div>

                                {/* Tags */}
                                <div className="flex items-center gap-2 flex-wrap mt-8 pt-8 border-t border-white/10">
                                    <Tag className="w-4 h-4 text-primary" />
                                    {article.tags.map((tag) => (
                                        <Badge key={tag} variant="outline" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Related Articles */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-black italic uppercase mb-6">
                            Related <span className="text-primary">Articles</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {article.relatedArticles.map((relatedId) => {
                                const related = NEWS_DATA[relatedId];
                                return (
                                    <Link key={relatedId} href={`/media/news/${relatedId}`}>
                                        <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden group h-full">
                                            <CardContent className="p-0">
                                                <div className="relative h-48 overflow-hidden bg-zinc-900">
                                                    <Image
                                                        src={related.image}
                                                        alt={related.title}
                                                        fill
                                                        className="object-cover transition-all duration-500 group-hover:scale-110"
                                                        sizes="(max-width: 768px) 100vw, 50vw"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                                    <Badge className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white border-white/20">
                                                        {related.category}
                                                    </Badge>
                                                </div>
                                                <div className="p-6">
                                                    <h3 className="text-xl font-black mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                                        {related.title}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                                        {related.excerpt}
                                                    </p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
