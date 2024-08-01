import InfoHero from "@/components/Root/InfoHero";
import { QNA, SpeechBubble } from "@/components/Root/QNA";
import { Timeline, TimelineCard } from "@/components/Root/Timeline";
import React from "react";
import ContactPerson from "@/components/Root/ContactPerson";
import SectionHeader from "@/components/Root/SectionHeader";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

type Props = {};

export default function UIUXInfo({}: Props) {
  return (
    <>
      <InfoHero
        id="hero-ui-ux" header="ui/ux design" subheader="srifoton 2024" src="/img/gallery1.png" href="/register" guideHref="/"
        card1title="Keterampilan Desain" card1content="Mengasah keterampilan desain, prinsip, estetika, fungsionalitas."
        card2title="Inovasi dan Kreativitas" card2content="Mengembangkan pola pikir yang inovatif dan kreatif">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
      </InfoHero>
      <Timeline title="competition timeline">
        <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
      </Timeline>
      <section className="flex flex-col lg:hidden gap-[30px]">
        <div className="px-11">
          <SectionHeader text="COMPETITION QNA"/>
        </div>
        <Accordion type="single" collapsible className="text-white text-sm font-normal">
          <AccordionItem value="accord-1">
            <AccordionTrigger>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 11111
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="accord-2">
            <AccordionTrigger>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 22222
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="accord-3">
            <AccordionTrigger>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 33333
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="accord-4">
            <AccordionTrigger>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 44444
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="accord-5">
            <AccordionTrigger>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 55555
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <QNA id="cp-qna" title="competition qna">
        <SpeechBubble question="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 11111
        </SpeechBubble>
        <SpeechBubble question="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 22222
        </SpeechBubble>
        <SpeechBubble question="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 33333
        </SpeechBubble>
        <SpeechBubble question="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 44444
        </SpeechBubble>
        <SpeechBubble question="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 55555
        </SpeechBubble>
      </QNA>
      <ContactPerson />
    </>
  );
}
