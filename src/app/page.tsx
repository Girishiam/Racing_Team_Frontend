"use client";

import { HeroBanner, HomeSections } from "@/components/sections";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Zap, ArrowRight, Calendar, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

export default function Home() {
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 4, 5].map((num, index) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link href="/media/gallery">
                  <div className="relative aspect-square overflow-hidden rounded-lg border border-white/10 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                    <Image
                      src={`/images/Gallery/${num}.jpg`}
                      alt={`Gallery image ${num}`}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
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
    </main>
  );
}
