"use client"

import { motion } from "framer-motion"
import { Lightbulb, Users, Rocket, ShieldCheck } from "lucide-react"

const reasons = [
  {
    title: "Innovation First",
    desc: "We build cutting-edge solutions powered by AI and emerging technologies.",
    icon: Lightbulb,
  },
  {
    title: "Strong Community",
    desc: "Join a growing network of learners, developers, and innovators worldwide.",
    icon: Users,
  },
  {
    title: "Career Growth",
    desc: "Boost your skills through training programs, internships, and certifications.",
    icon: Rocket,
  },
  {
    title: "Trusted & Reliable",
    desc: "We value integrity, privacy, and accessibility for everyone.",
    icon: ShieldCheck,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          Why <span className="text-primary">Choose Us?</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl shadow-md bg-background hover:shadow-lg transition"
            >
              <reason.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
