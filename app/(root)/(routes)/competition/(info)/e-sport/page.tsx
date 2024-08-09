import InfoHero from "@/components/Root/InfoHero";
import { QNA, SpeechBubble } from "@/components/Root/QNA";
import { Timeline, TimelineCard } from "@/components/Root/Timeline";
import React from "react";
import ContactPerson from "@/components/Root/ContactPerson";
import SectionHeader from "@/components/Root/SectionHeader";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

type Props = {};

export default function ESportInfo({}: Props) {
  return (
    <>
      <InfoHero
        id="hero-e-sport"
        header="e-sport"
        subheader="srifoton 2024"
        src="/img/e-sport.png"
        href="e-sport/daftar"
        guideHref="https://docs.google.com/document/d/1W9Ssq5NhIlpO5IaseLF7_DdYmDS7p-gQ3YXagITSzwc/edit?usp=sharing"
        card1title="Kerjasama Tim"
        card1content="Meningkatkan kemampuan komunikasi dan kolaborasi"
        card2title="Pengalaman Kompetitif"
        card2content="Memberikan pengalaman menghadapi tekanan dan tantangan"
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
          question="Apakah anggota tim boleh berasal dari universitas/sekolah yang berbeda?"
        >
          Diperbolehkan bagi tim berisi anggota yang berasal dari
          universitas/sekolah yang berbeda untuk bergabung selagi memenuhi
          syarat dan ketentuan
        </SpeechBubble>
        <SpeechBubble
          id="speech2"
          question="Apakah ketua harus memasukkan data dirinya kembali setelah melakukan pendaftaran akun?"
        >
          Ketua tidak perlu memasukkan data dirinya lagi, cukup anggota tim yang
          belum di input saja
        </SpeechBubble>
        <SpeechBubble
          id="speech3"
          question="Apa yang harus dilakukan jika anggota tim kami ingin mengganti akun atau nickname yang terdaftar?"
        >
          Pergantian akun atau nickname yang terdaftar tidak diperbolehkan. Jika
          terdapat perbedaan antara akun atau nickname yang digunakan saat
          permainan dengan yang terdaftar, tim tersebut akan didiskualifikasi
        </SpeechBubble>
        <SpeechBubble
          id="speech4"
          question="Apakah ada batasan waktu untuk keterlambatan ke pertandingan?"
        >
          Tim harus siap 15 menit sebelum jadwal pertandingan dengan batas
          keterlambatan maksimal 15 menit. Terdapat peringatan bertingkat, yaitu
          5 menit peringatan awal dan 10 menit peringatan terakhir. Jika
          melebihi batas keterlambatan, tim dapat didiskualifikasi
        </SpeechBubble>
        <SpeechBubble
          id="speech5"
          question="Apa yang harus dilakukan jika kami menemukan tim lawan melakukan kecurangan?"
        >
          Jika merasa tim lawan melakukan kecurangan, perwakilan tim pelapor
          harus memberikan screenshot atau rekaman permainan sebagai bukti dan
          melaporkannya kepada panitia setelah permainan selesai. Panitia akan
          melakukan investigasi dan menindaklanjuti laporan tersebut
        </SpeechBubble>
      </QNA>
      <ContactPerson
        contactPerson1="Muhammad Alif Berri Rossi"
        WA1="0812-7325-8332"
        Line1="zenleo10"
        contactPerson2="M. Rajab Fadhly Hartawibawa"
        WA2="0812-2956-4138"
        Line2="muhammadrajabfadh"
      />
    </>
  );
}
