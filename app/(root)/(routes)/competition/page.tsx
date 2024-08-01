import CompetitionOption from "@/components/Root/Competition/CompetitionOption";
import Hero from "@/components/Root/Competition/Hero";
import CompetitionQna from "@/components/Root/Competition/CompetitionQna";
import React from "react";
import { Flashcards, Flashcard, Benefits } from "@/components/Root/Flashcards";
import OverviewHero from "@/components/Root/OverviewHero";
import { QNA, SpeechBubble } from "@/components/Root/QNA";
import SectionHeader from "@/components/Root/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type Props = {};

export default function Competition({}: Props) {
  return (
    <>
      <OverviewHero id="hero-competition" header="competiton" subheader="srifoton 2024" src="/img/gallery1.png" href="/register">
      </OverviewHero>
      <Flashcards id="competiton-option" title="competition options" >
        <Flashcard title= "competitive programming" previewTitle="competitive programming" href="/register" infoHref="/competition/competitive-programming" price="100.000" per="team">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.
          </p>
        </Flashcard>
        <Flashcard title= "UI/UX design" previewTitle="ui/ux design" href="/register" infoHref="/competition/ui-ux" price="100.000" per="team">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.
          </p>
        </Flashcard>
        <Flashcard title= "web development" previewTitle="web development" href="/register" infoHref="/competition/web-development" price="100.000" per="team">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.
          </p>
        </Flashcard>
        <Flashcard title= "e-sport" previewTitle="e-sport" href="/register" infoHref="/competition/e-sport" price="100.000" per="team">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.
          </p>
        </Flashcard>
      </Flashcards>
      <section className="flex flex-col lg:hidden gap-[30px]">
        <div className="px-11">
          <SectionHeader text="WORKSHOP QNA"/>
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
      <QNA id="workshop-qna" title="workshop qna">
        <SpeechBubble id="speech1" question="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 11111
        </SpeechBubble>
        <SpeechBubble id="speech2" question="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 22222
        </SpeechBubble>
        <SpeechBubble id="speech3" question="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 33333
        </SpeechBubble>
        <SpeechBubble id="speech4" question="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 44444
        </SpeechBubble>
        <SpeechBubble id="speech5" question="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in?">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 55555
        </SpeechBubble>
      </QNA>
    </>
    // <div className="px-8 md:px-12 lg:px-20 xl:px-[7rem]">
    //   <Hero />
    //   <CompetitionOption />
    //   <CompetitionQna />
    // </div>
  );
}
