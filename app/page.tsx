import Hero from "@/components/home/Hero";
import AboutSnippet from "@/components/home/AboutSnippet";
import Programs from "@/components/home/Programs";
import UpcomingEvent from "@/components/home/UpcomingEvent";
import ImpactStats from "@/components/home/ImpactStats";
import Testimonials from "@/components/home/Testimonials";
import NewsUpdates from "@/components/home/NewsUpdates";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSnippet />
      <Programs />
      <ImpactStats />
      <UpcomingEvent />
      <Testimonials />
      <NewsUpdates />
      <CallToAction />
    </>
  );
}
