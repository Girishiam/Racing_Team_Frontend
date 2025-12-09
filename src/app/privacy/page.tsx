"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PrivacyPolicyPage() {
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
                            Privacy <span className="text-primary">Policy</span>
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
                        {/* Introduction */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                        >
                            <Card className="bg-zinc-950/50 border-white/10 mb-8">
                                <CardContent className="p-8">
                                    <div className="flex items-start gap-4 mb-6">
                                        <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h2 className="text-2xl font-black italic uppercase mb-4">Introduction</h2>
                                            <p className="text-muted-foreground leading-relaxed">
                                                MotoSports Racing ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Information We Collect */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <Card className="bg-zinc-950/50 border-white/10 mb-8">
                                <CardContent className="p-8">
                                    <div className="flex items-start gap-4 mb-6">
                                        <Database className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h2 className="text-2xl font-black italic uppercase mb-4">Information We Collect</h2>
                                            <div className="space-y-4 text-muted-foreground">
                                                <div>
                                                    <h3 className="text-lg font-bold text-foreground mb-2">Personal Data</h3>
                                                    <p className="leading-relaxed">
                                                        We may collect personally identifiable information such as your name, email address, phone number, and mailing address when you voluntarily provide it to us through forms on our website, newsletter subscriptions, or fan club registrations.
                                                    </p>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-foreground mb-2">Usage Data</h3>
                                                    <p className="leading-relaxed">
                                                        We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates/times of your visits. This helps us understand how visitors use our site and improve our services.
                                                    </p>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-foreground mb-2">Cookies and Tracking Technologies</h3>
                                                    <p className="leading-relaxed">
                                                        We use cookies, web beacons, and similar tracking technologies to enhance your experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* How We Use Your Information */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <Card className="bg-zinc-950/50 border-white/10 mb-8">
                                <CardContent className="p-8">
                                    <div className="flex items-start gap-4 mb-6">
                                        <Eye className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h2 className="text-2xl font-black italic uppercase mb-4">How We Use Your Information</h2>
                                            <ul className="space-y-3 text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-primary mt-1">•</span>
                                                    <span>To provide, operate, and maintain our website and services</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-primary mt-1">•</span>
                                                    <span>To send you newsletters, marketing communications, and updates about races and events</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-primary mt-1">•</span>
                                                    <span>To respond to your inquiries and provide customer support</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-primary mt-1">•</span>
                                                    <span>To analyze usage patterns and improve our website and services</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-primary mt-1">•</span>
                                                    <span>To comply with legal obligations and protect our rights</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Data Security */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <Card className="bg-zinc-950/50 border-white/10 mb-8">
                                <CardContent className="p-8">
                                    <div className="flex items-start gap-4 mb-6">
                                        <Lock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h2 className="text-2xl font-black italic uppercase mb-4">Data Security</h2>
                                            <p className="text-muted-foreground leading-relaxed">
                                                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Your Rights */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            <Card className="bg-zinc-950/50 border-white/10 mb-8">
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-black italic uppercase mb-4">Your Rights</h2>
                                    <div className="space-y-3 text-muted-foreground">
                                        <p className="leading-relaxed">Depending on your location, you may have the following rights:</p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span>Access, update, or delete your personal information</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span>Object to processing of your personal information</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span>Request restriction of processing your personal information</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span>Request transfer of your personal information</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span>Withdraw consent at any time</span>
                                            </li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Contact Us */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            <Card className="bg-zinc-950/50 border-white/10">
                                <CardContent className="p-8">
                                    <div className="flex items-start gap-4">
                                        <Mail className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h2 className="text-2xl font-black italic uppercase mb-4">Contact Us</h2>
                                            <p className="text-muted-foreground leading-relaxed mb-4">
                                                If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
                                            </p>
                                            <div className="space-y-2 text-muted-foreground">
                                                <p><strong className="text-foreground">Email:</strong> privacy@motosports.com</p>
                                                <p><strong className="text-foreground">Phone:</strong> +1 (555) 123-4567</p>
                                                <p><strong className="text-foreground">Address:</strong> MotoSports Racing HQ, Monaco</p>
                                            </div>
                                        </div>
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
