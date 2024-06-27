import Countdown from "@/components/Root/Home/Countdown";
import Hero from "@/components/Root/Home/Hero";
import Nav from "@/components/Root/Home/Nav";
import Template from "@/components/Root/Home/Template";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <Countdown />
    </main>
  );
}
