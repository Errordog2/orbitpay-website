import OrbitHero from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud";
import Features from "@/components/features-4";
import HowItWorks from "@/components/how-it-works";
import StatsSection from "@/components/stats";
import Testimonials from "@/components/testimonials";
import FAQsTwo from "@/components/faqs-2";
import CallToAction from "@/components/call-to-action";

export default function Home() {
  return (
    <>
      <OrbitHero />
      <LogoCloud />
      <Features />
      <HowItWorks />
      <StatsSection />
      <Testimonials />
      <FAQsTwo />
      <CallToAction />
    </>
  );
}
