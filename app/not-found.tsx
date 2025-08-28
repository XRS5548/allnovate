"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import {LottiePlayer} from 'lottie-react'
import Image from "next/image"

export default function NotFound() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg"
      >
        {/* 👇 Animated image / illustration */}
        <div className="w-72 h-72 mx-auto mb-6">
          <Image
            src="/Under construction-pana.svg" // 👈 GIF ya SVG/Lottie yaha daalo
            alt="Page Illustration"
            width={400}
            height={400}
            className="mx-auto"
          />
        </div>

        <h1 className="text-4xl font-bold mb-4">Oops!</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The page you’re looking for doesn’t exist or is under construction 🚧
        </p>

        <Link href="/">
          <Button size="lg" className="rounded-2xl shadow-md">
            Go Back Home
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}
