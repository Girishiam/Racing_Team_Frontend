"use client";

import { motion } from "framer-motion";
import { Cookie, Settings, BarChart, Target, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CookiePolicyPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-zinc-900 to-background py-20 border-b border-white/10">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                            Legal
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
                            Cookie <span className="text-primary">Policy</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Last updated: December 10, 2024
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* What Are Cookies */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                        >
                            <Card className="bg-zinc-950/50 border-white/10 mb-8">
                                <CardContent className="p-8">
                                    <div className="flex items-start gap-4 mb-6">
                                        <Cookie className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h2 className="text-2xl font-black italic uppercase mb-4">What Are Cookies?</h2>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies help us understand how you use our site and improve your browsing experience.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Types of Cookies */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <Card className="bg-zinc-950/50 border-white/10 mb-8">
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-black italic uppercase mb-6">Types of Cookies We Use</h2>

                                    <div className="space-y-6">
                                        {/* Essential Cookies */}
                                        <div className="flex items-start gap-4">
                                            <Shield className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                            <div>
                                                <h3 className="text-lg font-bold mb-2">Essential Cookies</h3>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and remembering your cookie preferences. The website cannot function properly without these cookies.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Analytics Cookies */}
                                        <div className="flex items-start gap-4">
                                            <BarChart className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                            <div>
                                                <h3 className="text-lg font-bold mb-2">Analytics Cookies</h3>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use this data to improve our website's performance and user experience. Examples include Google Analytics cookies.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Functional Cookies */}
                                        <div className="flex items-start gap-4">
                                            <Settings className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                                            <div>
                                                <h3 className="text-lg font-bold mb-2">Functional Cookies</h3>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    These cookies enable enhanced functionality and personalization, such as remembering your preferences (language, region), login details, and customized content. They may be set by us or third-party providers whose services we use.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Marketing Cookies */}
                                        <div className="flex items-start gap-4">
                                            <Target className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                                            <div>
                                                <h3 className="text-lg font-bold mb-2">Marketing Cookies</h3>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    These cookies track your browsing habits to deliver advertisements that are relevant to you and your interests. They also limit the number of times you see an ad and help measure the effectiveness of advertising campaigns. These may be set by third-party advertising networks.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Third-Party Cookies */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <Card className="bg-zinc-950/50 border-white/10 mb-8">
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-black italic uppercase mb-4">Third-Party Cookies</h2>
                                    <div className="space-y-4 text-muted-foreground">
                                        <p className="leading-relaxed">
                                            In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and provide social media features. These third parties include:
                                        </p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span><strong className="text-foreground">Google Analytics:</strong> For website analytics and performance tracking</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span><strong className="text-foreground">Social Media Platforms:</strong> For social sharing and embedded content (Facebook, Twitter, Instagram, YouTube)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span><strong className="text-foreground">Advertising Networks:</strong> For targeted advertising and remarketing campaigns</span>
                                            </li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Managing Cookies */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <Card className="bg-zinc-950/50 border-white/10 mb-8">
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-black italic uppercase mb-4">Managing Your Cookie Preferences</h2>
                                    <div className="space-y-4 text-muted-foreground">
                                        <p className="leading-relaxed">
                                            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by:
                                        </p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span><strong className="text-foreground">Browser Settings:</strong> Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all cookies or to indicate when a cookie is being sent.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span><strong className="text-foreground">Cookie Consent Tool:</strong> Use our cookie consent banner to manage your preferences when you first visit our site.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span><strong className="text-foreground">Opt-Out Links:</strong> Visit opt-out pages provided by third-party advertising networks.</span>
                                            </li>
                                        </ul>
                                        <p className="leading-relaxed mt-4">
                                            Please note that if you choose to block or delete cookies, some features of our website may not function properly, and your user experience may be affected.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Cookie Preferences */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            <Card className="bg-gradient-to-r from-primary/10 to-transparent border-primary/30">
                                <CardContent className="p-8">
                                    <div className="text-center">
                                        <h2 className="text-2xl font-black italic uppercase mb-4">Update Your Preferences</h2>
                                        <p className="text-muted-foreground mb-6">
                                            Click the button below to review and update your cookie preferences at any time.
                                        </p>
                                        <Button size="lg" className="bg-primary hover:bg-primary/90">
                                            <Settings className="w-4 h-4 mr-2" />
                                            Manage Cookie Preferences
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
