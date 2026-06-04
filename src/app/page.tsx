import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CoreServices from "@/components/sections/CoreServices";
import Partners from "@/components/sections/Partners";
import AISolutions from "@/components/sections/AISolutions";
import Testimonial from "@/components/sections/Testimonial";
import GlobalFootprint from "@/components/sections/GlobalFootprint";
import ComplianceSection from "@/components/sections/ComplianceSection";
import Industries from "@/components/sections/BCM";
import CyberSecurity from "@/components/sections/CyberSecurityy"
import CallToActionSection from "@/components/sections/CallToActionSection";
import Contact from "@/components/sections/Contact";
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Partners />
        <AISolutions />
        <CoreServices />
        <Testimonial />
        <GlobalFootprint />
        <ComplianceSection />
        <Industries />
        <CyberSecurity />
        <CallToActionSection />
        <Contact />

        
      </main>

      <Footer />
    </>
  );
}