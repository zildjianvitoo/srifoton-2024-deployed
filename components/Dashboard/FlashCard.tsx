import React from "react";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as icon from "@/lib/icon";
import Messages from "./Messages";

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
      <Button className="bottom-4 right-4 flex space-x-2 bg-black md:absolute">
        <icon.Whatsapp />
        <p>Join Group</p>
      </Button>
    </div>
  );
}
