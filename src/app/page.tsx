import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getHomepage } from "@/lib/strapi";
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
export default async function Home() {
  const homepage = await getHomepage();
  const data = homepage.data;

  return (
    <>
      <Navbar />

      <main>
        <Hero
          heroTitleLine1={data.heroTitleLine1}
          heroTitleLine2={data.heroTitleLine2}
          heroSubtitle={
            data.heroSubtitle?.[0]?.children?.[0]?.text || ""
          }
          heroButton1Text={data.heroButton1Text}
          heroButton1Link={data.heroButton1Link || ""}
          heroButton2Text={data.heroButton2Text}
          heroButton2Link={data.heroButton2Link || ""}
          heroStats={data.Hero || []}
        />

        <About
          aboutTag={data.aboutTag}
          aboutTitleLine1={data.aboutTitleLine1}
          aboutTitleHighlight={data.aboutTitleHighlight}
          aboutTitleLine2={data.aboutTitleLine2}
          aboutQuote={data.aboutQuote}
          aboutContentLeft={data.aboutContentLeft}
          aboutContentRight={data.aboutContentRight}
        />
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