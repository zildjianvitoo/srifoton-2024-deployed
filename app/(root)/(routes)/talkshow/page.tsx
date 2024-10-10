"use client";

import OverviewHero from "@/components/Root/OverviewHero";
import IDcard from "@/components/ui/IDcard";
import { Flashcard, Flashcards, Benefits } from "@/components/Root/Flashcards";
import { QNA, SpeechBubble } from "@/components/Root/QNA";
import { Timeline, TimelineCard } from "@/components/Root/Timeline";
import { useRef } from "react";
import useComingSoon from "@/hooks/useComingSoon";

type Props = {};

export default function Talkshow({}: Props) {
  // useComingSoon(true);

  const workshopRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col gap-[200px]">
      <OverviewHero
        id="hero-talkshow"
        header="talkshow"
        subheader="srifoton 2024"
        src="/img/talkshow-logo-2.png"
        onClick={() =>
          workshopRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      >
        “Effective Ways to Build and Maintain a Personal Brand in the Digital
        Era”
      </OverviewHero>
      <IDcard
        title="our speaker"
        name="Afra Moedya Abadi"
        src1="/img/afra-moedya-abadi-cropped.png"
        src2="/img/stamp.png"
      >
        <p>Alumni of Universitas Indonesia, Chemical Engineering Former Student</p>
        <br />
        <h1 className="font-bold !text-xl">Work Experiences</h1>
        <p>Chemistry Tutor in RuangGuru, HSE Process Engineer of Mondelez International, Production Engineer in PT. Pertamina. Receiving multiple awards since <span className="font-poppins">2021</span>.</p>
      </IDcard>
      <div ref={workshopRef}>
        <Flashcards id="talkshow-option" title="talkshow options">
          <Flashcard
            title="talkshow offline ticket"
            previewTitle="offline ticket"
            href="talkshow/daftar"
            price="80.000"
            per="person"
          >
            <p>
              Talkshow SRIFOTON &quot;Effective Ways to Build and Maintain a
              Personal Brand in the Digital Era&quot; membahas membangun citra
              positif di media sosial dan dampaknya pada kehidupan profesional.
            </p>
            <Benefits>
              <p>E-Sertifikat</p>
              <p>Menambah Relasi</p>
              <p>Pengetahuan Baru</p>
              <p>Snack + Lunch</p>
            </Benefits>
          </Flashcard>
          <Flashcard
            title="talkshow online ticket"
            previewTitle="online ticket"
            href="talkshow/daftar"
            price="50.000"
            per="person"
          >
            <p>
              Talkshow SRIFOTON &quot;Effective Ways to Build and Maintain a
              Personal Brand in the Digital Era&quot; membahas membangun citra
              positif di media sosial dan dampaknya pada kehidupan profesional.
            </p>
            <Benefits>
              <p>E-Sertifikat</p>
              <p>Menambah Relasi</p>
              <p>Pengetahuan Baru</p>
            </Benefits>
          </Flashcard>
          {/* <Flashcard
            title={
              <>
                talkshow online + <br /> workshop
              </>
            }
            previewTitle="combo package 1"
            href="talkshow/daftar"
            price="80.000"
            per="person"
          >
            <p>
              SRIFOTON menawarkan workshop &quot;Kickstart Your Web Development
              Journey&quot; dan talkshow &quot;Effective Ways to Build and
              Maintain a Personal Brand in the Digital Era,&quot; yang membahas
              keterampilan web dasar dan personal branding. Dipandu oleh ahli,
              paket ini meningkatkan keterampilan digital dan profesional.
            </p>
            <Benefits>
              <p>E-Sertifikat</p>
              <p>Menambah relasi</p>
              <p>Pengalaman Pembuatan Proyek</p>
              <p>Snack + Lunch</p>
            </Benefits>
          </Flashcard>
          <Flashcard
            title={
              <>
                talkshow offline + <br /> workshop
              </>
            }
            previewTitle="combo package 2"
            href="talkshow/daftar"
            price="80.000"
            per="person"
          >
            <p>
              SRIFOTON menawarkan workshop &quot;Kickstart Your Web Development
              Journey&quot; dan talkshow &quot;Effective Ways to Build and
              Maintain a Personal Brand in the Digital Era,&quot; yang membahas
              keterampilan web dasar dan personal branding. Dipandu oleh ahli,
              paket ini meningkatkan keterampilan digital dan profesional.
            </p>
            <Benefits>
              <p>E-Sertifikat</p>
              <p>Menambah relasi</p>
              <p>Pengalaman Pembuatan Proyek</p>
              <p>Snack + Lunch</p>
            </Benefits>
          </Flashcard> */}
        </Flashcards>
      </div>
      <Timeline title="talkshow timeline">
        <TimelineCard span="23 Sept - 20 Augs">
          Open Registration Competition
        </TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">
          Open Registration Competition
        </TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">
          Open Registration Competition
        </TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">
          Open Registration Competition
        </TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">
          Open Registration Competition
        </TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">
          Open Registration Competition
        </TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">
          Open Registration Competition
        </TimelineCard>
        <TimelineCard span="23 Sept - 20 Augs">
          Open Registration Competition
        </TimelineCard>
      </Timeline>
      <QNA id="workshop-qna" title="workshop qna">
        <SpeechBubble id="speech1" question="Bagaimana cara mendaftar?">
          Silakan klik tombol &quot;Register&quot; pada acara yang ingin Anda
          ikuti, kemudian ikuti langkah-langkah untuk menyelesaikan proses
          pendaftaran.
        </SpeechBubble>
        <SpeechBubble id="speech2" question="Siapa saja yang boleh mendaftar?">
          Acara ini dibuka untuk umum sehingga siapa saja dapat mendaftar.
        </SpeechBubble>
        <SpeechBubble
          id="speech3"
          question="Apakah talkshow akan direkam selama acara berlangsung dan dibagikan kepada peserta?"
        >
          Ya, rekaman akan dibagikan setelah acara selesai.
        </SpeechBubble>
        <SpeechBubble
          id="speech4"
          question="Apa dress code untuk menghadiri acara?"
        >
          Dress code adalah bebas tetapi tetap sopan.
        </SpeechBubble>
        <SpeechBubble
          id="speech5"
          question="Fasilitas apa saja yang disediakan selama talkshow berlangsung?"
        >
          Akan ada camilan dan makan siang. Selain itu, HMIF akan membuka stan
          Official Merchandise SRIFOTON 2024.
        </SpeechBubble>
      </QNA>
    </div>
  );
}
