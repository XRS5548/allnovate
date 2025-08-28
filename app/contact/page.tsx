"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form Submitted:", formData)
    alert("Thank you for contacting us! We’ll get back soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Contact Form */}
        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                required
              />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        {/* Right: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="text-muted-foreground">
            Have questions about Alnnovate? We’d love to hear from you. Reach out via form or use the details below.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5" />
              <span>123 Innovation Street, Bangalore, India</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5" />
              <span>contact@alnnovate.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5" />
              <span>+91 98765 43210</span>
            </div>
          </div>

          <div className="flex space-x-4 pt-4">
            <a href="#" className="hover:scale-110 transition"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="hover:scale-110 transition"><Twitter className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
