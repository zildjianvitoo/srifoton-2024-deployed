"use client";

import { cn } from "@/lib/utils";
import { HTMLInputTypeAttribute, ReactNode } from "react";
import CardCrook from "./CardCrook.v2";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  teamname: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  university: z.string().min(2).max(50),
  paymentMethod: z.string().min(2).max(50),
  paymentProof: z.string().min(2).max(50),
});

const onSubmit = () => {
  console.log("form submitted!");
}

type RegProps = {
  branch: string,
  className?: string | undefined
}

type FormProps = {
  name: "teamname" | "email" | "university" | "paymentMethod" | "paymentProof",
  label: string,
  type: HTMLInputTypeAttribute | undefined,
  placeholder: string
}

export default function Registration({branch, className} : RegProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamname: "",
      email: "",
      university: "",
      paymentMethod: "",
      paymentProof: "",
    },
  })

  return(
    <div className={cn("flex flex-col gap-20", className)}>
      <header className="flex flex-col text-center w-fit mx-auto text-whtc relative gap-6">
        <h1 className="font-monument srifoton-header uppercase">{branch}</h1>
        <p className="font-ponnala srifoton-text w-[70%] mx-auto">Hai, silahkan isi secara detail informasi untuk tim dan setiap anggota tim kamu!</p>
      </header>
      <CardCrook outerClassName="w-full" innerClassName="flex flex-col relative max-w-full gap-[180px] py-[90px] px-[88px]">
        <section className="flex flex-col gap-[100px]">
          <header className="text-black-100 font-monument w-[35%] pb-6 border-b-[3px] border-black-100 text-center mx-auto">Team Information</header>
          <div className="flex justify-around gap-[69px]">
            <div className="flex flex-col w-[50%]">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormSrifoton name="teamname" label="Team Name" type="text" placeholder="Contoh: Tim Nobita" />
                  <FormSrifoton name="email" label="Email" type="email" placeholder="Contoh: srifoton@gmail.com" />
                  <FormSrifoton name="university" label="University" type="text" placeholder="Contoh: Universitas Sriwijaya" />
                  <FormSrifoton name="paymentMethod" label="Payment Method" type="text" placeholder="Contoh: Tim Nobita" />
                  <FormSrifoton name="paymentProof" label="Payment Proof" type="image" placeholder="Contoh: Tim Nobita" />

                  <Button type="submit">Submit</Button>
                </form>
              </Form>
            </div>
            <div className="text-black-100 font-ponnala srifoton-text-sm w-[50%]">
              <header className="font-monument w-full pb-4 border-b-[3px] border-black-100 mb-[50px]">Payment Information</header>
              <p className="mb-5">Pembayaran dapat dikirim melalui :</p>
              <div className="grid grid-cols-3 w-fit items-center mb-10">
                <p className="">Dana</p><p className="col-span-2">: 08XXXXXX (a.n. Nobita) <Button className="h-min"></Button></p>
                <p className="">Gopay</p><p className="col-span-2">: 08XXXXXX (a.n. Nobita) <Button className="h-min"></Button></p>
                <p className="">OVO</p><p className="col-span-2">: 08XXXXXX (a.n. Nobita) <Button className="h-min"></Button></p>
                <p className="">ShopeePay</p><p className="col-span-2">: 08XXXXXX (a.n. Nobita) <Button className="h-min"></Button></p>
              </div>
              <p className="mb-5">Transfer Bank</p>
              <div className="grid grid-cols-3 w-fit mb-10">
                <p className="">BNI</p><p className="col-span-2">: 08XXXXXX (a.n. Nobita) <Button className="h-min"></Button></p>
                <p className="">BCA</p><p className="col-span-2">: 08XXXXXX (a.n. Nobita) <Button className="h-min"></Button></p>
                <p className="">BRI</p><p className="col-span-2">: 08XXXXXX (a.n. Nobita) <Button className="h-min"></Button></p>
                <p className="">Mandiri</p><p className="col-span-2">: 08XXXXXX (a.n. Nobita) <Button className="h-min"></Button></p>
              </div>
              <p className="">1. Jika transfer dari Bank ke E-Wallet mohon untuk dilebihkan Rp1.000 karena akan terpotong biaya admin</p>
              <p className="">2. Simpan dan unggah pada kolom bukti pembayaran sebelum melakukan pendafataran</p>
            </div>
          </div>
        </section>
      </CardCrook>
    </div>
  )
}

function FormSrifoton({name, label, type, placeholder} : FormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamname: "",
      email: "",
      university: "",
      paymentMethod: "",
      paymentProof: "",
    },
  })

  return(
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="">
          <FormLabel className="capitalize font-monument srifoton-text-sm">{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} className="rounded-none font-ponnala bg-transparent border-shadow-200 placeholder:!text-shadow-300 srifoton-text-sm"/>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}