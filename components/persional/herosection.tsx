"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-20 text-center flex flex-col items-center">
        {/* Animated headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
        >
          Empowering Innovation with <span className="text-primary">AreaKnotch Labs</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl mb-8"
        >
          Build smarter with next-gen AI tools, APIs, and solutions designed to help creators, businesses, and developers scale.
        </motion.p>

        {/* Call to actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" asChild className="rounded-2xl px-8 py-6 text-lg">
            <Link href="/get-started">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="rounded-2xl px-8 py-6 text-lg">
            <Link href="/docs">Explore Docs</Link>
          </Button>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-14 w-full max-w-4xl"
        >
          <Image
            src="/hero-preview.png"
            alt="AreaKnotch Labs preview"
            width={1200}
            height={600}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-background to-background" />
    </section>
  );
}

/*
How to use:
1. Save this as components/hero-section.tsx
2. Import it in your app/page.tsx (or homepage) and place <HeroSection /> below <Navbar />.
3. Replace /hero-preview.png with your own product/illustration image.
*/
