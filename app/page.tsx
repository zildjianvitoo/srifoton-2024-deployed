import Countdown from "@/components/Home/Countdown";
import Nav from "@/components/Home/Nav";
import Highlight from "@/components/Home/Highlight";
import Gallery from "@/components/Home/Gallery";

export default function Home() {
  return (
    <main className="bg-[#1D1C19]">
      <Nav />
      <Highlight />
      <Countdown />
      {/* <Gallery /> */}
    </main>
  );
}
