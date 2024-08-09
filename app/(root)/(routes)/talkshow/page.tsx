"use client";

import OverviewHero from "@/components/Root/OverviewHero";
import IDcard from "@/components/ui/IDcard";
import { Flashcard, Flashcards, Benefits } from "@/components/Root/Flashcards";
import { QNA, SpeechBubble } from "@/components/Root/QNA";
import { Timeline, TimelineCard } from "@/components/Root/Timeline";
import React, { Suspense } from "react";
import SectionHeader from "@/components/Root/SectionHeader";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";
import { useRef } from 'react';

type Props = {};

export default function Talkshow({}: Props) {
  const workshopRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col gap-[200px]">
      <OverviewHero id="hero-talkshow" header="talkshow" subheader="srifoton 2024" src="/img/gallery1.png" onClick={() => workshopRef.current?.scrollIntoView({behavior: "smooth"})}>
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.”
      </OverviewHero>
      <IDcard title="our speaker" name="nama speaker" src1="/img/gallery1.png" src2="/img/gallery1.png">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales
      </IDcard>
      <div ref={workshopRef}>
        <Flashcards id="talkshow-option" title="talkshow options" >
          <Flashcard title= "talkshow ticket" previewTitle= "offline ticket" href= "talkshow/daftar" price="40.000" per="person">
            <p>
              Talkshow SRIFOTON "Effective Ways to Build and Maintain a Personal Brand in the Digital Era" membahas membangun citra positif di media sosial dan dampaknya pada kehidupan profesional.
            </p>
            <Benefits>
              <p>E-Sertifikat</p>
              <p>Menambah relasi</p>
              <p>Pengalaman pembuatan proyek</p>
              <p>Snack + Lunch</p>
            </Benefits>
          </Flashcard>
          <Flashcard title= {<>workshop online + <br /> talkshow</>} previewTitle= "combo package 1" href= "talkshow/daftar" price="40.000" per="person">
            <p>
              SRIFOTON menawarkan workshop "Kickstart Your Web Development Journey" dan talkshow "Effective Ways to Build and Maintain a Personal Brand in the Digital Era," yang membahas keterampilan web dasar dan personal branding. Dipandu oleh ahli, paket ini meningkatkan keterampilan digital dan profesional.
            </p>
            <Benefits>
              <p>E-Sertifikat</p>
              <p>Menambah relasi</p>
              <p>Pengalaman pembuatan proyek</p>
              <p>Snack + Lunch</p>
            </Benefits>
          </Flashcard>
          <Flashcard title= {<>workshop offline + <br /> talkshow</>} previewTitle= "combo package 2" href= "talkshow/daftar" price="40.000" per="person">
            <p>
              SRIFOTON menawarkan workshop "Kickstart Your Web Development Journey" dan talkshow "Effective Ways to Build and Maintain a Personal Brand in the Digital Era," yang membahas keterampilan web dasar dan personal branding. Dipandu oleh ahli, paket ini meningkatkan keterampilan digital dan profesional.
            </p>
            <Benefits>
              <p>E-Sertifikat</p>
              <p>Menambah relasi</p>
              <p>Pengalaman pembuatan proyek</p>
              <p>Snack + Lunch</p>
            </Benefits>
          </Flashcard>
        </Flashcards>
      </div>
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
      <QNA id="workshop-qna" title="workshop qna">
        <SpeechBubble id="speech1" question="Bagaimana cara mendaftar?">
          Silakan klik tombol "Register" pada acara yang ingin Anda ikuti, kemudian ikuti langkah-langkah untuk menyelesaikan proses pendaftaran.
        </SpeechBubble>
        <SpeechBubble id="speech2" question="Siapa saja yang boleh mendaftar?">
          Acara ini dibuka untuk umum sehingga siapa saja dapat mendaftar.
        </SpeechBubble>
        <SpeechBubble id="speech3" question="Apakah talkshow akan direkam selama acara berlangsung dan dibagikan kepada peserta?">
          Ya, rekaman akan dibagikan setelah acara selesai.
        </SpeechBubble>
        <SpeechBubble id="speech4" question="Apa dress code untuk menghadiri acara?">
          Dress code adalah bebas tetapi tetap sopan.
        </SpeechBubble>
        <SpeechBubble id="speech5" question="Fasilitas apa saja yang disediakan selama talkshow berlangsung?">
          Akan ada camilan dan makan siang. Selain itu, HMIF akan membuka stan Official Merchandise SRIFOTON 2024.
        </SpeechBubble>
      </QNA>
    </div>
  );
}
