"use client";

import { motion } from "framer-motion";
import { FileText, AlertCircle, Scale, Ban, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TermsPage() {
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
                            Terms of <span className="text-primary">Service</span>
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
                        {/* Agreement to Terms */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                        >
                            <Card className="bg-zinc-950/50 border-white/10 mb-8">
                                <CardContent className="p-8">
                                    <div className="flex items-start gap-4 mb-6">
                                        <FileText className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h2 className="text-2xl font-black italic uppercase mb-4">Agreement to Terms</h2>
                                            <p className="text-muted-foreground leading-relaxed">
                                                These Terms of Service ("Terms") govern your access to and use of the MotoSports Racing website and services. By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our services.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Use License */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <Card className="bg-zinc-950/50 border-white/10 mb-8">
                                <CardContent className="p-8">
                                    <div className="flex items-start gap-4 mb-6">
                                        <Scale className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h2 className="text-2xl font-black italic uppercase mb-4">Use License</h2>
                                            <div className="space-y-4 text-muted-foreground">
                                                <p className="leading-relaxed">
                                                    Permission is granted to temporarily download one copy of the materials on MotoSports Racing's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                                                </p>
                                                <ul className="space-y-2 ml-4">
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-primary mt-1">•</span>
                                                        <span>Modify or copy the materials</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-primary mt-1">•</span>
                                                        <span>Use the materials for any commercial purpose or public display</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-primary mt-1">•</span>
                                                        <span>Attempt to decompile or reverse engineer any software on our website</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-primary mt-1">•</span>
                                                        <span>Remove any copyright or proprietary notations from the materials</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-primary mt-1">•</span>
                                                        <span>Transfer the materials to another person or "mirror" the materials on any other server</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* User Responsibilities */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <Card className="bg-zinc-950/50 border-white/10 mb-8">
                                <CardContent className="p-8">
                                    <div className="flex items-start gap-4 mb-6">
                                        <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h2 className="text-2xl font-black italic uppercase mb-4">User Responsibilities</h2>
                                            <div className="space-y-4 text-muted-foreground">
                                                <p className="leading-relaxed">
                                                    As a user of our services, you agree to:
                                                </p>
                                                <ul className="space-y-2 ml-4">
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-primary mt-1">•</span>
                                                        <span>Provide accurate and complete information when creating an account</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-primary mt-1">•</span>
                                                        <span>Maintain the security of your account credentials</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-primary mt-1">•</span>
                                                        <span>Not use the service for any illegal or unauthorized purpose</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-primary mt-1">•</span>
                                                        <span>Not transmit any viruses, malware, or harmful code</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-primary mt-1">•</span>
                                                        <span>Respect intellectual property rights of MotoSports Racing and third parties</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Prohibited Activities */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <Card className="bg-zinc-950/50 border-white/10 mb-8">
                                <CardContent className="p-8">
                                    <div className="flex items-start gap-4 mb-6">
                                        <Ban className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h2 className="text-2xl font-black italic uppercase mb-4">Prohibited Activities</h2>
                                            <div className="space-y-4 text-muted-foreground">
                                                <p className="leading-relaxed">
                                                    You may not access or use the site for any purpose other than that for which we make it available. Prohibited activities include, but are not limited to:
                                                </p>
                                                <ul className="space-y-2 ml-4">
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-primary mt-1">•</span>
                                                        <span>Systematic retrieval of data to create a collection, compilation, database, or directory</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-primary mt-1">•</span>
                                                        <span>Making unauthorized use of the site, including collecting usernames and email addresses</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-primary mt-1">•</span>
                                                        <span>Circumventing, disabling, or interfering with security-related features</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-primary mt-1">•</span>
                                                        <span>Engaging in unauthorized framing or linking to the site</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-primary mt-1">•</span>
                                                        <span>Harassing, intimidating, or threatening other users</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Disclaimer */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            <Card className="bg-zinc-950/50 border-white/10 mb-8">
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-black italic uppercase mb-4">Disclaimer</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        The materials on MotoSports Racing's website are provided on an 'as is' basis. MotoSports Racing makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Modifications */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            <Card className="bg-zinc-950/50 border-white/10">
                                <CardContent className="p-8">
                                    <div className="flex items-start gap-4">
                                        <RefreshCw className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h2 className="text-2xl font-black italic uppercase mb-4">Modifications to Terms</h2>
                                            <p className="text-muted-foreground leading-relaxed">
                                                MotoSports Racing may revise these Terms of Service at any time without notice. By using this website, you agree to be bound by the current version of these Terms. We encourage you to review these Terms periodically for any changes. Your continued use of the site following the posting of changes constitutes your acceptance of those changes.
                                            </p>
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
