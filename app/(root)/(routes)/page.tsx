import Countdown from "@/components/Root/Home/Countdown";
import Hero from "@/components/Root/Home/Hero";
import Gallery from "@/components/Root/Home/Gallery";
import Mascot from "@/components/Root/Home/Mascot";
import { Timeline, TimelineCard } from "@/components/Root/Home/Timeline";
import Categories from "@/components/Root/Home/Categories";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <Countdown />
      <Gallery />
      <Mascot />
      <Timeline>
        <TimelineCard span="23 Sept - 20 Augs">Test test</TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition Test Test</TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
      </Timeline>
      <Categories />
    </main>
  );
}
