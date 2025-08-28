import AboutSection from '@/components/persional/about'
import BranchesSection from '@/components/persional/branches'
import Footer from '@/components/persional/footer'
import HeroSection from '@/components/persional/herosection'
import Navbar from '@/components/persional/navbar'
import UpcomingPrograms from '@/components/persional/upcommings'
import WhyChooseUs from '@/components/persional/whychooseus'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function page() {
  return (
    <>
    <HeroSection />
    <BranchesSection />
    <AboutSection />
    <WhyChooseUs />
    <UpcomingPrograms />
    </>
  )
}
