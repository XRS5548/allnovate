"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, GraduationCap, Briefcase } from "lucide-react";

const BRANCHES = [
  {
    title: "Alnnovate Academy",
    description:
      "Training programs, online courses, and certifications to help students and professionals upskill in AI, Data Science, and more.",
    icon: GraduationCap,
    image: "", // custom academy logo
  },
  {
    title: "Alnnovate Community",
    description:
      "A vibrant hub of developers and innovators with forums, Discord/Slack groups, hackathons, and knowledge sharing.",
    icon: Users,
    image: "", // custom community logo
  },
  {
    title: "Alnnovate Trainers",
    description:
      "Internship programs and real-world projects for students to gain hands-on industry experience and grow their careers.",
    icon: Briefcase,
    image: "", // custom trainers logo
  },
];

export default function BranchesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Alnnovate Ecosystem</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Alnnovate is more than just a tech brand – it’s a complete ecosystem designed to empower students, developers, and businesses through education, collaboration, and opportunities.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {BRANCHES.map((branch, index) => (
          <motion.div
            key={branch.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition"
          >
            {branch.image ? (
              <Image
                src={branch.image}
                alt={`${branch.title} logo`}
                width={50}
                height={50}
                className="mb-4"
              />
            ) : (
              <branch.icon className="h-10 w-10 mb-4" />
            )}
            <h3 className="text-xl font-semibold mb-2">{branch.title}</h3>
            <p className="text-sm leading-relaxed">{branch.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/*
How to use:
1. Replace "/images/academy-logo.png" etc. with your actual image paths in public/images.
2. If no image is provided, the fallback lucide-react icon will be used.
*/
