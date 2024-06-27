import Countdown from "@/components/Root/Home/Countdown";
import Hero from "@/components/Root/Home/Hero";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <Countdown />
    </main>
  );
}
