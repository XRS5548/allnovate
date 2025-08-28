"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const categories = ["All", "Workshops", "AI Tools", "Training", "Internships", "Community"]

const events = [
  {
    title: "AI Tool Launch: Text-to-SQL",
    date: "Sept 30, 2025",
    category: "AI Tools",
    desc: "Introducing our latest AI model that converts plain text to SQL queries.",
    image: "/events/sqltool.jpg",
    mode: "Online",
  },
  {
    title: "Data Science Workshop",
    date: "Oct 10, 2025",
    category: "Workshops",
    desc: "Hands-on training in data cleaning, ML models, and real projects.",
    image: "/events/datascience.jpg",
    mode: "Hybrid",
  },
  {
    title: "Alnnovate Community Meetup",
    date: "Nov 5, 2025",
    category: "Community",
    desc: "Exclusive Discord hackathon with prizes and networking.",
    image: "/events/meetup.jpg",
    mode: "Online",
  },
  {
    title: "Full-Stack Training Program",
    date: "Nov 15, 2025",
    category: "Training",
    desc: "Learn MERN stack with mentorship, projects, and certification.",
    image: "/events/webdev.jpg",
    mode: "Hybrid",
  },
]

export default function EventsPage() {
  const [active, setActive] = useState("All")

  const filteredEvents =
    active === "All" ? events : events.filter((e) => e.category === active)

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          What’s Next at <span className="text-primary">Alnnovate</span>
        </motion.h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={active === cat ? "default" : "outline"}
              onClick={() => setActive(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl shadow-md bg-background hover:shadow-lg transition"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-muted-foreground mb-3">{event.desc}</p>
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <span>{event.date}</span>
                <span>{event.mode}</span>
              </div>
              <Button className="w-full">Register</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
