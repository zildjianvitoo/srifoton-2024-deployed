"use client";

import React from "react";
import { Flashcards, Flashcard, Benefits } from "@/components/Root/Flashcards";
import OverviewHero from "@/components/Root/OverviewHero";
import { QNA, SpeechBubble } from "@/components/Root/QNA";
import { useRef } from "react";

type Props = {};

export default function Competition({}: Props) {
  const workshopRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <OverviewHero
        id="hero-competition"
        header="competition"
        subheader="srifoton 2024"
        src="/img/gallery1.png"
        onClick={() =>
          workshopRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      ></OverviewHero>
      <div ref={workshopRef}>
        <Flashcards id="competition-option" title="competition options">
          <Flashcard
            title="competitive programming"
            previewTitle="competitive programming"
            href="competition/competitive-programming/daftar"
            infoHref="competition/competitive-programming"
            price="50.000"
            per="team"
          >
            <p>
              Competitive Programming adalah sebuah kompetisi yang menantang
              peserta untuk memecahkan masalah-masalah kompleks menggunakan
              kemampuan pemrograman mereka. Kompetisi ini biasanya mencakup
              serangkaian tantangan yang memerlukan pemahaman struktur data,
              logika matematika, dan kemampuan problem-solving yang efektif.
              Dalam lomba ini, peserta bisa berpartisipasi secara individu atau
              dalam tim dan harus menyelesaikan berbagai masalah dalam waktu
              yang telah ditentukan. Setiap masalah memiliki tingkat kesulitan
              yang bervariasi dan menguji berbagai aspek dari kemampuan
              pemrograman.
            </p>
          </Flashcard>
          <Flashcard
            title="UI/UX design"
            previewTitle="ui/ux design"
            href="competition/ui-ux/daftar"
            infoHref="competition/ui-ux"
            price="60.000"
            per="team"
          >
            <p>
              UI/UX Design adalah proses pembuatan antarmuka yang mengutamakan
              keindahan dan pengalaman pengguna, bertujuan membuat situs web
              atau aplikasi lebih menarik dan memuaskan. Kompetisi ini terdiri
              dari dua babak: penyisihan, di mana peserta mengirimkan desain
              sesuai format yang ditentukan, dan final, di mana peserta yang
              lolos seleksi juri mempresentasikan desainnya melalui video
              conference. Tema kompetisi UI/UX Design SRIFOTON{" "}
              <span className="font-poppins">2024</span> adalah “Digital
              Innovation for a Sustainable Future,” dengan fokus pada desain di
              bidang ekonomi, pendidikan, atau lingkungan.
            </p>
          </Flashcard>
          <Flashcard
            title="web development"
            previewTitle="web development"
            href="competition/web-development/daftar"
            infoHref="competition/web-development"
            price="60.000"
            per="team"
          >
            <p>
              Web Development adalah cabang lomba dalam Srifoton yang
              diselenggarakan oleh HMIF Universitas Sriwijaya. Lomba ini menguji
              kemampuan peserta dalam berkreasi dan berinovasi melalui pembuatan
              website untuk menyelesaikan masalah. Dengan tema &quot;Future Web:
              Developing Sustainable Digital Solutions,&quot; peserta diajak
              mengembangkan solusi digital yang berkontribusi pada salah satu
              atau lebih dari <span className="font-poppins">17</span> Tujuan
              Pembangunan Berkelanjutan (SDG) PBB. Peserta diharapkan
              menciptakan inovasi web yang membantu mengatasi tantangan global
              berdasarkan SDG tersebut.
            </p>
          </Flashcard>
          <Flashcard
            title="e-sport"
            previewTitle="e-sport"
            href="competition/e-sport/daftar"
            infoHref="competition/e-sport"
            price="50.000"
            per="team"
          >
            <p>
              Esport Competition adalah kompetisi Mobile Legends dengan tujuan
              utama menghancurkan turret utama lawan untuk menang. Kompetisi ini
              terdiri dari tiga babak. Pada babak penyisihan,{" "}
              <span className="font-poppins">32</span> dan{" "}
              <span className="font-poppins">16</span> besar berlangsung tanpa
              wasit, dan kapten tim harus mengirimkan screenshot hasil
              pertandingan. Babak <span className="font-poppins">8</span> besar
              diawasi oleh wasit. Pada babak semifinal, pertandingan berlanjut
              hingga satu tim meraih tiga kemenangan. Di babak final, tim yang
              lolos bertanding dalam format best-of-three, dan tim pertama yang
              meraih dua kemenangan menjadi pemenang.
            </p>
          </Flashcard>
        </Flashcards>
      </div>
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
          dengan membentuk tim selama anggota tim tidak lebih dari{" "}
          <span className="font-poppins">2</span> orang
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
          dari satu universitas atau perguruan tinggi yang sama
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
