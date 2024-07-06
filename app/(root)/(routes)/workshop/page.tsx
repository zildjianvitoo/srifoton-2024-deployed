import Hero from "@/components/Root/Workshop/Hero";
import IDcard from "@/components/Root/Workshop/IDcard";
import { Flashcard, Flashcards, Benefits } from "@/components/Root/Workshop/Flashcards";
import { Timeline, TimelineCard } from "@/components/Root/Home/Timeline";
import React, { Suspense } from "react";

type Props = {};

export default function Workshop({}: Props) {
  return (
    <>
    <Hero id="hero-workshop" header="workshop" subheader="srifoton 2024" type="overview" src="/img/gallery1.png" href="/register">
      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.”
    </Hero>
    <IDcard title="our speaker" name="nama speaker" src1="/img/gallery1.png" src2="/img/gallery1.png">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales
    </IDcard>
    <Flashcard title="workshop offline ticket" href="/" price="80.000">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur
      <Benefits>
        <p>E-Sertifikat</p>
        <p>Doorprize dan Relasi</p>
        <p>Free Basic Class Dicoding</p>
        <p>Snack + Free Lunch</p>
      </Benefits>
    </Flashcard>
    {/* <Flashcards title="workshop options">
      <Flashcard title="workshop offline ticket" href="/" price="80.000">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur
        <Benefits>
          <p>E-Sertifikat</p>
          <p>Doorprize dan Relasi</p>
          <p>Free Basic Class Dicoding</p>
          <p>Snack + Free Lunch</p>
        </Benefits>
      </Flashcard>
      <Flashcard title="workshop online ticket" href="/" price="50.000">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur
        <Benefits>
          <p>E-Sertifikat</p>
          <p>Doorprize dan Relasi</p>
          <p>Free Basic Class Dicoding</p>
        </Benefits>
      </Flashcard>
    </Flashcards> */}
    <Timeline title="workshop timeline">
      <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
      <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
      <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
      <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
      <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
      <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
      <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
      <TimelineCard span="23 Sept - 20 Augs">Open Registration Competition</TimelineCard>
    </Timeline>
    {/*<Testimony title="workshop qna">
      <SpeechBubble src="#">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in?
      </SpeechBubble>
    </Testimony> */}
    </>
  );
}
