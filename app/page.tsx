import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import HowItWorks from "@/components/HowItWorks";
import ForWhom from "@/components/ForWhom";
import Benefits from "@/components/Benefits";
import Faq from "@/components/Faq";
import ApplySection from "@/components/ApplySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top">
      <Header />
      <Hero />
      <Marquee />
      <HowItWorks />
      <ForWhom />
      <Benefits />
      <Faq />
      <ApplySection />
      <Footer />
    </main>
  );
}