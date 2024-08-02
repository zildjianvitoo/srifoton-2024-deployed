import OverviewHero from "@/components/Root/OverviewHero";
import InfoHero from "@/components/Root/InfoHero";
import { QNA, SpeechBubble } from "@/components/Root/QNA";
import { Timeline, TimelineCard } from "@/components/Root/Timeline";
import React from "react";
import ContactPerson from "@/components/Root/ContactPerson";
import SectionHeader from "@/components/Root/SectionHeader";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Registration from "@/components/Root/Registration";

type Props = {};

export default function CPDaftar({}: Props) {
  return (
    <>
      <Registration branch="competitive programming" />
    </>
  );
}
