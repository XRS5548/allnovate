"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold tracking-tight">
            About <span className="text-primary">AreaKnotch Labs</span>
          </h2>
          <p className="text-lg leading-relaxed">
            AreaKnotch Labs is an innovation-driven startup building accessible and impactful 
            technologies. Our mission is to empower people, creators, and businesses 
            with AI, training, and community support.
          </p>
          <p className="text-lg leading-relaxed">
            With <span className="font-semibold">AreaKnotch Labs Academy</span>,{" "}
            <span className="font-semibold">Community</span>, and{" "}
            <span className="font-semibold">Trainers</span>, we are creating 
            opportunities for learning, collaboration, and career growth.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/images/about.png" // apna custom image yaha dalna
            alt="About AreaKnotch Labs"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}
