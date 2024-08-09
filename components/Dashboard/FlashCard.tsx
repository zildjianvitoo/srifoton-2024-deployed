import React from "react";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import Messages from "./Messages";
import { FaWhatsapp } from "react-icons/fa";

type Props = { title?: string; name: string; date: string; message: string };

export default function FlashCard({ title, name, date, message }: Props) {
  return (
    <div className="relative flex flex-col space-y-6 border-2 border-black px-4 py-4">
      <h4 className="text-lg text-[#868365]">{title}</h4>
      <h3 className="text-xl uppercase">{name}</h3>
      <div className="flex items-center space-x-4 text-xs">
        <CalendarDays className="size-4" />
        <p className="content-center">{date}</p>
      </div>
      <Messages message={message} />
      <Button className="bottom-4 right-4 flex h-12 space-x-2 bg-background/90 font-monument text-xs text-white hover:bg-background disabled:opacity-60 md:absolute md:text-lg">
        <FaWhatsapp />
        <a href={"/dashboard"} target="_blank">
          Join Group
        </a>
      </Button>
    </div>
  );
}