import React from "react";
import { CircleAlert, CircleCheck } from "lucide-react";

type Props = { message?: string };

export default function Messages({ message }: Props) {
  return (
    <div className="flex items-center space-x-2 text-xs text-[#868365]">
      {(() => {
        if (message === "waiting") {
          return (
            <>
              <CircleAlert className="size-4" />
              <p>Menunggu Verifikasi</p>
            </>
          );
        } else if (message === "verified") {
          return (
            <>
              <CircleCheck className="size-4" />
              <p>selesai</p>
            </>
          );
        } else {
          return (
            <>
              <CircleCheck className="hidden size-4" />
              <p className="hidden">selesai</p>
            </>
          );
        }
      })()}
    </div>
  );
}
