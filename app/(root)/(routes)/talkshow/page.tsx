import OverviewHero from "@/components/Root/OverviewHero";
import IDcard from "@/components/ui/IDcard";
import { Flashcard, Flashcards, Benefits } from "@/components/Root/Flashcards";
import { QNA, SpeechBubble } from "@/components/Root/QNA";
import { Timeline, TimelineCard } from "@/components/Root/Timeline";
import React, { Suspense } from "react";
import SectionHeader from "@/components/Root/SectionHeader";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";

type Props = {};

export default function Talkshow({}: Props) {
  return (
    <div className="flex flex-col gap-[200px]">
      <OverviewHero id="hero-talkshow" header="talkshow" subheader="srifoton 2024" src="/img/gallery1.png" href="/register">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.”
      </OverviewHero>
      <IDcard title="our speaker" name="nama speaker" src1="/img/gallery1.png" src2="/img/gallery1.png">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales
      </IDcard>
      <Flashcards id="talkshow-option" title="talkshow options" >
        <Flashcard title= "talkshow ticket" previewTitle= "offline ticket" href= "/register" price="80.000" per="person">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur
          </p>
          <Benefits>
            <p>E-Sertifikat</p>
            <p>Doorprize dan Relasi</p>
            <p>Free Basic Class Dicoding</p>
            <p>Snack + Free Lunch</p>
          </Benefits>
        </Flashcard>
      </Flashcards>
      <Timeline title="talkshow timeline">
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
          <SectionHeader text="TALKSHOW QNA"/>
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
      <QNA id="talkshow-qna" title="talkshow qna">
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
    </div>
  );
}
