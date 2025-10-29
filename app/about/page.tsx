"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-6 bg-background">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold">About <span className="text-primary">AreaKnotch Labs</span></h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AreaKnotch Labs is an AI and Data Science startup with a mission to build 
            innovative, accessible, and impactful technologies that empower 
            people, creators, and businesses worldwide.
          </p>
        </div>

        {/* Our Story */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed text-justify">
            Founded in 2025 by <b>Michael Carter</b> (CEO) and <b>Ashish</b> (Co-Founder & CTO), 
            AreaKnotch Labs started with a vision to simplify access to powerful AI tools and APIs. 
            From building intelligent solutions to fostering a strong developer community, 
            our journey has always been driven by innovation and collaboration.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6 text-center space-y-4">
              <Target className="w-10 h-10 mx-auto text-primary" />
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="text-muted-foreground">
                To make AI solutions accessible for everyone, from students 
                to enterprises, while ensuring trust, privacy, and impact.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6 text-center space-y-4">
              <Lightbulb className="w-10 h-10 mx-auto text-primary" />
              <h3 className="text-xl font-semibold">Our Vision</h3>
              <p className="text-muted-foreground">
                To become a global leader in AI innovation by creating tools 
                and platforms that change how people learn, work, and grow.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6 text-center space-y-4">
              <Users className="w-10 h-10 mx-auto text-primary" />
              <h3 className="text-xl font-semibold">Our Values</h3>
              <p className="text-muted-foreground">
                Innovation, Accessibility, Integrity, Collaboration, and 
                a relentless focus on delivering real-world impact.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Future: Team Section */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-semibold">Meet the Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We’re a passionate group of innovators, engineers, and dreamers. 
            Together, we’re building technologies that shape the future.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-8">
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold">Rohit Verma</h3>
                <p className="text-muted-foreground">Founder & CEO</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold">Saniya Khan</h3>
                <p className="text-muted-foreground">Co-Founder & COO</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
