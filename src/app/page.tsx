"use client";

import { motion } from "framer-motion";
import { HeroBanner } from "@/components/sections/HeroBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroBanner />
      {/* Rest of the content will go here */}
    </main>
  );
}
