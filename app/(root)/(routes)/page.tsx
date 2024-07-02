import Countdown from "@/components/Root/Home/Countdown";
import Hero from "@/components/Root/Home/Hero";
import Gallery from "@/components/Root/Home/Gallery";
import Mascot from "@/components/Root/Home/Mascot";
import Timeline from "@/components/Root/Home/Timeline";
import Categories from "@/components/Root/Home/Categories";
import Benefits from "@/components/Root/Home/Benefits";
import Sponsor from "@/components/Root/Home/Sponsor";
import MediaPartner from "@/components/Root/Home/MediaPartner";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <Countdown />
      <Gallery />
      <Mascot />
      <Timeline />
      <Categories />
      <Benefits />
      <Sponsor />
      <MediaPartner />
    </main>
  );
}
