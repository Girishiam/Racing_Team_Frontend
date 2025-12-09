"use client";

import { HeroBanner, HomeSections } from "@/components/sections";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Zap, ArrowRight, Calendar, Image as ImageIcon, ZoomIn, X, Camera } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const FEATURED_CONTENT = [
  {
    title: "Latest Race Highlights",
    description: "Catch up on the most thrilling moments from our recent championship victory.",
    image: "/images/Gallery/3.jpg",
    badge: "Race Report",
    href: "/media/news"
  },
  {
    title: "Meet Our Drivers",
    description: "Get to know the champions behind the wheel driving our success.",
    image: "/images/Teams_Member/driver1.jpg",
    badge: "Team",
    href: "/team/drivers"
  },
  {
    title: "The Machine",
    description: "Explore the cutting-edge technology powering our championship ambitions.",
    image: "/images/bikes/1.jpg",
    badge: "Technology",
    href: "/machine/specs"
  }
];

const STATS = [
  { icon: Trophy, value: "45", label: "Race Wins", color: "text-primary" },
  { icon: Users, value: "2", label: "World Champions", color: "text-blue-500" },
  { icon: Zap, value: "89", label: "Podium Finishes", color: "text-purple-500" },
  { icon: Calendar, value: "156", label: "Race Starts", color: "text-green-500" }
];

const GALLERY_PREVIEW = [
  {
    id: 1,
    src: "/images/Gallery/1.jpg",
    title: "Monaco Grand Prix",
    description: "Intense racing action through the iconic streets of Monaco",
    category: "Race Day"
  },
  {
    id: 2,
    src: "/images/Gallery/2.jpg",
    title: "Pit Stop Precision",
    description: "Our crew executing a flawless sub-2 second pit stop",
    category: "Behind the Scenes"
  },
  {
    id: 4,
    src: "/images/Gallery/4.jpg",
    title: "Team Garage",
    description: "Inside our state-of-the-art racing facility",
    category: "Behind the Scenes"
  },
  {
    id: 5,
    src: "/images/Gallery/5.jpg",
    title: "Driver Focus",
    description: "Concentration and determination before the race",
    category: "Portraits"
  }
];

const PARTNERS = [
  { name: "Speed Tech", category: "Technology Partner" },
  { name: "Turbo Fuel", category: "Fuel Supplier" },
  { name: "Apex Tires", category: "Tire Partner" },
  { name: "Velocity Gear", category: "Apparel Partner" },
  { name: "Race Vision", category: "Media Partner" },
  { name: "Power Systems", category: "Energy Partner" },
  { name: "Precision Tools", category: "Equipment Partner" },
  { name: "Elite Racing", category: "Technical Partner" },
  { name: "Aero Dynamics", category: "Aerodynamics" },
  { name: "Carbon Pro", category: "Materials Partner" },
  { name: "Track Master", category: "Training Partner" },
  { name: "Victory Bank", category: "Financial Partner" }
];

interface ModalImage {
  src: string;
  title: string;
  description?: string;
  category?: string;
}

// Partners Carousel Component
function PartnersCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardScales, setCardScales] = useState<number[]>([]);

  // Triple the partners for seamless infinite scroll
  const infinitePartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  // Calculate scales based on viewport center
  useEffect(() => {
    const updateScales = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const viewportCenter = window.innerWidth / 2;

      const cards = container.querySelectorAll('.partner-card');
      const newScales: number[] = [];

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;

        // Calculate distance from viewport center
        const distanceFromCenter = Math.abs(viewportCenter - cardCenter);
        const maxDistance = window.innerWidth / 2;
        const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);

        // Scale from 1.4 (center) to 0.6 (edges)
        const scale = 1.4 - (normalizedDistance * 0.8);
        const clampedScale = Math.max(0.6, Math.min(1.4, scale));

        newScales.push(clampedScale);
      });

      setCardScales(newScales);
    };

    // Update on mount and during animation
    updateScales();
    const interval = setInterval(updateScales, 50); // Update every 50ms for smooth scaling

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="relative py-12 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Scrolling Container with Perspective */}
      <div ref={containerRef} className="relative flex justify-center items-center">
        <motion.div
          className="flex gap-8 items-end"
          animate={{
            x: isPaused ? undefined : [0, -((220 + 32) * PARTNERS.length)]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }
          }}
        >
          {infinitePartners.map((partner, index) => {
            const scale = cardScales[index] || 0.8;
            const opacity = 0.3 + (scale - 0.6) * 0.875; // 0.3 to 1.0
            const translateY = (1.4 - scale) * 40; // 0 to 32px

            return (
              <div
                key={`${partner.name}-${index}`}
                className="partner-card flex-shrink-0 relative group"
                style={{
                  width: '220px',
                  transform: `scale(${scale}) translateY(${translateY}px)`,
                  opacity: opacity,
                  transformOrigin: 'center bottom',
                  transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
                }}
              >
                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/20 h-full">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center min-h-[180px]">
                    <div className="w-full aspect-square max-w-[80px] mb-3 relative flex items-center justify-center">
                      <div className="text-5xl font-black text-primary/30 group-hover:text-primary/60 transition-all duration-300">
                        {partner.name.charAt(0)}
                      </div>
                    </div>
                    <h3 className="font-bold text-base mb-1 group-hover:text-primary transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {partner.category}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </motion.div>

        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-zinc-950/30 via-zinc-950/20 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-zinc-950/30 via-zinc-950/20 to-transparent pointer-events-none z-10" />
      </div>

      {/* Pause Indicator */}
      {isPaused && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-2 right-4 z-20"
        >
          <Badge className="bg-primary/20 text-primary border-primary/30">
            Paused
          </Badge>
        </motion.div>
      )}
    </div>
  );
}

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<ModalImage | null>(null);

  const openModal = (image: ModalImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <main className="min-h-screen bg-background">
      <HeroBanner />
      <HomeSections />

      {/* Featured Content Section */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Featured
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">
              Latest <span className="text-primary">Updates</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Stay connected with the latest news, team updates, and exclusive content from the world of motorsport.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {FEATURED_CONTENT.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link href={item.href}>
                  <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden group cursor-pointer h-full">
                    <CardContent className="p-0">
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden bg-zinc-900">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-all duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                        {/* Badge */}
                        <Badge className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white border-white/20">
                          {item.badge}
                        </Badge>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-2xl font-black italic uppercase mb-3 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {item.description}
                        </p>
                        <Button variant="ghost" className="group-hover:translate-x-1 transition-transform duration-300 p-0 h-auto">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zinc-950/30 border-y border-white/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">
              Championship <span className="text-primary">Numbers</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our legacy of excellence measured in victories, podiums, and championship glory.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                    <div className="text-5xl font-black mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex items-end justify-between"
          >
            <div>
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                Gallery
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">
                Visual <span className="text-primary">Stories</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Capturing the intensity, passion, and glory of motorsport through stunning photography.
              </p>
            </div>
            <Link href="/media/gallery">
              <Button className="bg-primary hover:bg-primary/90 hidden md:flex">
                View All Photos
                <ImageIcon className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_PREVIEW.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden group cursor-pointer h-full">
                  <CardContent className="p-0">
                    {/* Image Container */}
                    <div
                      className="relative aspect-square overflow-hidden bg-zinc-900"
                      onClick={() => openModal(image)}
                    >
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                      {/* Zoom Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(image);
                          }}
                          className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg"
                        >
                          <ZoomIn className="w-5 h-5 text-white" />
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
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {image.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Link href="/media/gallery" className="md:hidden">
            <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
              View All Photos
              <ImageIcon className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Partners & Sponsors Carousel Section */}
      <section className="py-16 bg-zinc-950/30 border-y border-white/10 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Our Partners
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">
              Powered by <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Working with world-class partners who share our passion for performance and innovation.
            </p>
          </motion.div>

          {/* Sponsors Carousel */}
          <PartnersCarousel />
        </div>
      </section>

      {/* Social Media Feed Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Social Feed
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">
              Follow Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay connected with our latest updates, behind-the-scenes moments, and race day excitement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image: "/images/Gallery/1.jpg",
                platform: "Instagram",
                caption: "Race day vibes! 🏁 Monaco GP was absolutely incredible. The team gave it their all!",
                likes: "12.5K",
                comments: "342",
                timeAgo: "2 hours ago"
              },
              {
                image: "/images/Gallery/3.jpg",
                platform: "Twitter",
                caption: "VICTORY! 🏆 What a race! Couldn't have done it without this amazing team and our incredible fans.",
                likes: "8.2K",
                comments: "156",
                timeAgo: "5 hours ago"
              },
              {
                image: "/images/Teams_Member/driver1.jpg",
                platform: "Instagram",
                caption: "Focus. Determination. Victory. That's what championship mentality looks like 💪",
                likes: "15.3K",
                comments: "428",
                timeAgo: "1 day ago"
              },
              {
                image: "/images/bikes/2.jpg",
                platform: "Facebook",
                caption: "Our machine is ready for the next challenge. Engineering excellence meets raw power! ⚡",
                likes: "9.8K",
                comments: "267",
                timeAgo: "2 days ago"
              }
            ].map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden group cursor-pointer h-full">
                  <CardContent className="p-0">
                    {/* Post Image */}
                    <div className="relative aspect-square overflow-hidden bg-zinc-900">
                      <Image
                        src={post.image}
                        alt={post.caption}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                      {/* Platform Badge */}
                      <Badge className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white border-white/20">
                        {post.platform}
                      </Badge>
                    </div>

                    {/* Post Details */}
                    <div className="p-4">
                      <p className="text-sm text-foreground mb-3 line-clamp-3">
                        {post.caption}
                      </p>

                      {/* Engagement Stats */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Trophy className="w-3 h-3" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>{post.comments}</span>
                        </div>
                        <div className="ml-auto">
                          {post.timeAgo}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">Follow us on social media for more updates</p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                Instagram
              </Button>
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                Twitter
              </Button>
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                Facebook
              </Button>
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                YouTube
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-950/50 to-background border-t border-white/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-6">
              Join the <span className="text-primary">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of our championship story. Follow us for exclusive content, behind-the-scenes access, and the latest team updates.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/fans/club">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Join Fan Club
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/media/news">
                <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5">
                  Latest News
                </Button>
              </Link>
            </div>
          </motion.div>
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
              className="max-w-5xl w-full"
            >
              <div className="relative">
                {/* Image */}
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/20">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                    sizes="90vw"
                  />
                </div>

                {/* Image Details */}
                <div className="mt-6 bg-zinc-950/80 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-3xl font-black italic uppercase mb-2">
                        {selectedImage.title}
                      </h2>
                      {selectedImage.description && (
                        <p className="text-muted-foreground text-lg mb-3">
                          {selectedImage.description}
                        </p>
                      )}
                    </div>
                    {selectedImage.category && (
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        {selectedImage.category}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
