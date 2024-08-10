import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

type Props = {
  branch: string;
  validBranch: string;
  guideBookLink?: string;
};

export default function SuccessRegister({
  branch,
  validBranch,
  guideBookLink,
}: Props) {
  return (
    <div className={"flex flex-col gap-14 lg:gap-20"}>
      <div className="text-whtc relative mx-auto flex w-full flex-col items-center justify-center gap-6 text-center text-primary-200">
        <h1 className="srifoton-header font-monument uppercase">{branch}</h1>
        <p className="srifoton-text mx-auto w-[70%]">
          Selamat, Pendaftaran kamu berhasil
        </p>
        <figure className="relative">
          <Image
            src={"/img/gallery4.png"}
            alt="Logo SRIFOTON"
            width={450}
            height={360}
          />
        </figure>
        <p className="mt-4 text-lg text-primary">
          Terima kasih sudah mendaftar di kompetisi SRIFOTON 2024!
        </p>
        <p className="text-lg text-primary">
          Tekan tombol di bawah <br /> untuk mengetahui info lebih lanjut.
        </p>
        {validBranch !== "workshop" && validBranch !== "talkshow" && (
          <div className="flex gap-4 lg:gap-6">
            <Link href={`/competition/${validBranch}`}>
              <Button className="h-12 font-monument text-background">
                Competition Info
              </Button>
            </Link>

            <a href={guideBookLink}>
              <Button variant={"outline2"} className="h-12 font-monument">
                Guidebook
              </Button>
            </a>
          </div>
        )}

        {validBranch === "workshop" && (
          <Link href={"/workshop"}>
            <Button className="h-12 font-monument text-background">
              Workshop Info
            </Button>
          </Link>
        )}
        {validBranch === "talkshow" && (
          <Link href={"/talkshow"}>
            <Button className="h-12 font-monument text-background">
              Talkshow Info
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
