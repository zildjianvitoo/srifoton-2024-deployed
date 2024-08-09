import { Clipboard } from "lucide-react";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "sonner";

export default function PaymentInformation() {
  return (
    <div className="flex flex-col font-poppins lg:basis-1/2">
      <h3 className="font-monument text-xl">Payment Information</h3>
      <hr className="mt-3 w-full border-t-[3px] border-black-100" />
      <div className="mt-4 flex flex-col">
        <div className="flex flex-col text-base">
          <p>Pembayaran dapat dikirimkan melalui :</p>
          <div className="mt-3 flex items-center gap-1">
            <p>Dana : 087798125255 (a.n Ibnu Qayyim Al Jauziyah)</p>
            <CopyToClipboard
              text="087798125255"
              onCopy={() => toast.success("Berhasil copy")}
            >
              <Clipboard size={20} className="cursor-pointer" />
            </CopyToClipboard>
          </div>
          <div className="mt-1 flex items-center gap-1">
            <p>ShopeePay : 085378872674 (a.n Aulia Salsabella)</p>
            <CopyToClipboard
              text="085378872674"
              onCopy={() => toast.success("Berhasil copy")}
            >
              <Clipboard size={20} className="cursor-pointer" />
            </CopyToClipboard>
          </div>
        </div>
        <div className="mt-6 flex flex-col text-base">
          <p>Transfer Bank</p>
          <div className="mt-3 flex items-center gap-1">
            <p>Sea Bank : 901561929386 (a.n Dara Utami)</p>
            <CopyToClipboard
              text="901561929386"
              onCopy={() => toast.success("Berhasil copy")}
            >
              <Clipboard size={20} className="cursor-pointer" />
            </CopyToClipboard>
          </div>
          <div className="mt-1 flex items-center gap-1">
            <p>Mandiri : 1120018860671 (a.n Nabilla Kesuma)</p>
            <CopyToClipboard
              text="1120018860671"
              onCopy={() => toast.success("Berhasil copy")}
            >
              <Clipboard size={20} className="cursor-pointer" />
            </CopyToClipboard>
          </div>
          <div className="mt-4 flex flex-col gap-1">
            <p>
              *Jika transfer dari Bank ke E-Wallet mohon untuk dilebihkan 1000
              karena akan terpotong biaya admin
            </p>
            <p>
              *Simpan dan unggah pada kolom bukti pembayaran sebelum kamu
              melakukan pendaftaran
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
