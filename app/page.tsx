import Countdown from "@/components/Home/Countdown";
import Nav from "@/components/Home/Nav";
import Highlight from "@/components/Home/Highlight";
import Footer from "@/components/Home/Footer";

export default function Home() {
  return (
    <main className="bg-[#1D1C19]">
      <Nav />
      <Highlight />
      {/* <Countdown /> */}
      <Footer />
    </main>
  );
}

