"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Facebook, Twitter, Instagram, Youtube, Linkedin,
    Mail, Phone, MapPin
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FOOTER_SECTIONS = [
    {
        title: "RACING",
        links: [
            { label: "Race Calendar", href: "/calendar" },
            { label: "Standings", href: "/calendar/standings" },
            { label: "Track Guide", href: "/calendar/tracks" },
            { label: "The Series", href: "/calendar/series" }
        ]
    },
    {
        title: "TEAM",
        links: [
            { label: "Drivers", href: "/team/drivers" },
            { label: "Management", href: "/team/management" },
            { label: "Academy", href: "/team/academy" },
            { label: "Esports", href: "/team/esports" }
        ]
    },
    {
        title: "TECHNOLOGY",
        links: [
            { label: "The Car", href: "/machine/specs" },
            { label: "Innovation", href: "/machine/innovation" },
            { label: "Partners", href: "/machine/partners" }
        ]
    },
    {
        title: "MEDIA",
        links: [
            { label: "News", href: "/media/news" },
            { label: "Videos", href: "/media/video" },
            { label: "Gallery", href: "/media/gallery" }
        ]
    },
    {
        title: "FANS",
        links: [
            { label: "Fan Club", href: "/fans/club" },
            { label: "Games", href: "/fans/games" },
            { label: "Downloads", href: "/fans/downloads" },
            { label: "VIP Hospitality", href: "/fans/vip" }
        ]
    },
    {
        title: "COMPANY",
        links: [
            { label: "Partners", href: "/partners" },
            { label: "Careers", href: "/careers" },
            { label: "Sustainability", href: "/sustainability" },
            { label: "Diversity", href: "/sustainability/diversity" }
        ]
    }
];

const SOCIAL_LINKS = [
    {
        name: "Facebook",
        icon: Facebook,
        href: "https://facebook.com",
        color: "hover:bg-blue-600"
    },
    {
        name: "Twitter",
        icon: Twitter,
        href: "https://twitter.com",
        color: "hover:bg-sky-500"
    },
    {
        name: "Instagram",
        icon: Instagram,
        href: "https://instagram.com",
        color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600"
    },
    {
        name: "YouTube",
        icon: Youtube,
        href: "https://youtube.com",
        color: "hover:bg-red-600"
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://linkedin.com",
        color: "hover:bg-blue-700"
    }
];

export function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-white/10">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
                    {/* Brand Section - Left */}
                    <div className="lg:col-span-3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link href="/" className="inline-block mb-4">
                                <h2 className="text-3xl font-black italic">
                                    MOTO<span className="text-primary">SPORTS</span>
                                </h2>
                            </Link>
                            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
                                Pushing the limits of speed and innovation. Join us on our journey to championship glory.
                            </p>

                            {/* Social Media Icons */}
                            <div className="flex gap-3 mb-6">
                                {SOCIAL_LINKS.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 ${social.color} hover:border-transparent hover:scale-110 group`}
                                        aria-label={social.name}
                                    >
                                        <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                                    </a>
                                ))}
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-2 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-primary" />
                                    <span>info@motosports.com</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-primary" />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-primary" />
                                    <span>Racing HQ, Monaco</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Links Sections - Right */}
                    <div className="lg:col-span-9">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                            {FOOTER_SECTIONS.map((section, index) => (
                                <motion.div
                                    key={section.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                >
                                    <h3 className="text-sm font-black uppercase tracking-wider mb-4 text-primary">
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {section.links.map((link) => (
                                            <li key={link.label}>
                                                <Link
                                                    href={link.href}
                                                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="border-t border-white/10 pt-8"
                >
                    <div className="max-w-2xl mx-auto text-center">
                        <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                            Stay Updated
                        </Badge>
                        <h3 className="text-2xl font-black italic uppercase mb-2">
                            Subscribe to Our Newsletter
                        </h3>
                        <p className="text-sm text-muted-foreground mb-6">
                            Get the latest news, race updates, and exclusive content delivered to your inbox.
                        </p>
                        <div className="flex gap-2 max-w-md mx-auto">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border-white/10 focus:border-primary"
                            />
                            <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 bg-black/30">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                        <p>
                            © {new Date().getFullYear()} MotoSports Racing. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="hover:text-primary transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-primary transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/cookies" className="hover:text-primary transition-colors">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
