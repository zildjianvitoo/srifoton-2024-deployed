import Countdown from "@/components/Root/Home/Countdown";
import Hero from "@/components/Root/Home/Hero";
import Gallery from "@/components/Root/Home/Gallery";
import Mascot from "@/components/Root/Home/Mascot";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <Countdown />
      <Gallery />
      <Mascot />
    </main>
  );
}
