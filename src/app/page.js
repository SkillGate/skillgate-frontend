"use client";

import AboutUsSection from "./(components)/landing/AboutUsSection";
import Advertisement from "./(components)/landing/Advertisement";
import Contact from "./(components)/landing/Contact";
import HeroSection from "./(components)/landing/HeroSection";
import Services from "./(components)/landing/Services";
import Testimonials from "./(components)/landing/Testimonials";


export default function Home() {
  return (
    <div className="overflow-hidden">
      <div>
        <HeroSection />
        {/* <AboutUsSection /> */}
        {/* <Services />
        <Advertisement />
        <Testimonials />
        <Contact /> */}
      </div>
    </div>
  );
}
