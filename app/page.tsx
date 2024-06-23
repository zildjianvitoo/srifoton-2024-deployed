import Countdown from "@/components/Home/Countdown";
import Nav from "@/components/Home/Nav";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <main className="bg-[#1D1C19]">
      <Nav />
      <Hero />
      <Countdown />
    </main>
  );
}
