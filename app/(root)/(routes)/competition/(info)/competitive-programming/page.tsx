import InfoHero from "@/components/Root/InfoHero";
import { QNA, SpeechBubble } from "@/components/Root/QNA";
import { Timeline, TimelineCard } from "@/components/Root/Timeline";
import React from "react";
import ContactPerson from "@/components/Root/ContactPerson";

type Props = {};

export default function CompetitiveProgrammingInfo({}: Props) {
  return (
    <>
      <InfoHero
        id="hero-cp"
        header="competitive programming"
        subheader="srifoton 2024"
        src="/img/comp-programming.png"
        href="competitive-programming/daftar"
        guideHref="https://docs.google.com/document/d/1_odNXIS6g42Yr0fOoukeNUAao60_5BwS/edit?usp=drivesdk&ouid=110295558965393092953&rtpof=true&sd=true"
        card1title="Algoritma dan Struktur Data"
        card1content="Memperdalam pengetahuan teknis dan keterampilan pemrograman"
        card2title="Problem Solving"
        card2content="Melatih kemampuan untuk memecahkan masalah secara efektif dan efisien"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
        suscipit magna interdum eu.
      </InfoHero>
      <Timeline title="competition timeline">
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
      <QNA id="competition-qna" title="competition qna">
        <SpeechBubble
          id="speech1"
          question="Bagaimana cara mendaftarkan tim pada kompetisi Competitive Programming SRIFOTON 2024?"
        >
          Peserta dalam mendaftarkan tim melalui website SRIFOTON
        </SpeechBubble>
        <SpeechBubble
          id="speech2"
          question="Berapa jumlah minimal dan maksimal anggota dalam satu tim?"
        >
          Peserta dapat mendaftar pada kompetisi ini secara individu ataupun
          dengan membentuk tim selama anggota tim tidak lebih dari 2 orang
        </SpeechBubble>
        <SpeechBubble
          id="speech3"
          question="Apa konsekuensi yang akan diperoleh jika tim melanggar syarat dan ketentuan kompetisi?"
        >
          Jika tim melanggar syarat dan ketentuan dari kompetisi maka tim akan
          diskualifikasi
        </SpeechBubble>
        <SpeechBubble
          id="speech4"
          question="Apakah akun Hackerrank akan disediakan oleh panitia?"
        >
          Tidak, Peserta akan mempersiapkan akun Hackerank masing-masing,
          kemudian di data pada form
        </SpeechBubble>
        <SpeechBubble
          id="speech5"
          question="Bolehkah dalam satu tim mendaftar jika berasal dari jenjang pendidikan berbeda dan dari jurusan yang berbeda?"
        >
          Diperbolehkan. Asalkan setiap tim beranggotakan mahasiswa yang berasal
          dari satu universitas atau perguruan tinggi yang sama.
        </SpeechBubble>
      </QNA>
      <ContactPerson
        contactPerson1="rakha abhirama"
        WA1="0882-8638-5975"
        Line1="rakha1604"
      />
    </>
  );
}
