import Countdown from "@/components/Root/Home/Countdown";
import Hero from "@/components/Root/Home/Hero";
import Gallery from "@/components/Root/Home/Gallery";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <Countdown />
      <Gallery />
    </main>
  );
}
