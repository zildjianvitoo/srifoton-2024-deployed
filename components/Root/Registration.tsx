"use client";

import { cn } from "@/lib/utils";
import CardCrook from "./CardCrook.v2";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import CompetitionPaymentInformation from "./Competition/CompetitionPaymentInformation";
import { ChangeEvent, useRef, useState } from "react";
import { ImagePlus } from "lucide-react";
import { DevTool } from "@hookform/devtools";
import "@/lib/utils/zodCustomError";
import Image from "next/image";
// import { competitionRegistrationScehma } from "@/lib/formSchema/competitionRegistration";
import FormInput from "../FormInput";

type RegProps = {
  branch: string;
  className?: string | undefined;
};

// type formSchema = z.infer<typeof competitionRegistrationScehma>;

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
export const competitionRegistrationScehma = z.object({
  teamname: z.string().min(1).max(50),
  email: z.string().min(1).max(50),
  university: z.string().min(1).max(50),
  paymentMethod: z.string().min(1).max(50),
  paymentProof: z // Todo Selesaikan
    .any()
    .refine((files) => files.length === 0, "Image is required.")
    .refine(
      (files) => files?.[0]?.size >= MAX_FILE_SIZE,
      `Max file size is 5MB.`,
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted.",
    ),
});

export default function Registration({ branch, className }: RegProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const form = useForm<z.infer<typeof competitionRegistrationScehma>>({
    resolver: zodResolver(competitionRegistrationScehma),
    defaultValues: {
      teamname: "",
      email: "",
      university: "",
      paymentMethod: "",
      paymentProof: undefined,
    },
  });
  const paymentProofRef = useRef<any>(form.register("paymentProof"));

  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>,
    onChange: (event: any) => void,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
    onChange(event);
  };

  const onSubmit = async (
    FormValues: z.infer<typeof competitionRegistrationScehma>,
  ) => {
    alert("ssucccesss");
    console.log(FormValues);
  };

  return (
    <div className={cn("flex flex-col gap-14 lg:gap-20", className)}>
      <header className="relative mx-auto flex w-fit flex-col gap-6 text-center text-whtc">
        <h1 className="srifoton-header font-monument uppercase">{branch}</h1>
        <p className="srifoton-text mx-auto w-[70%]">
          Hai, silahkan isi secara detail informasi untuk tim dan setiap anggota
          tim kamu!
        </p>
      </header>
      <CardCrook>
        <div className="flex w-full flex-col gap-6 px-6 py-12 md:gap-8 md:px-10 md:py-16 lg:gap-12 lg:px-20 lg:py-24">
          <div className="flex w-full flex-col items-center justify-center">
            <h3 className="text-center font-monument text-xl md:text-2xl">
              Team Information
            </h3>
            <hr className="mt-6 w-3/4 border-t-[3px] border-black-100 lg:w-1/3" />
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col"
            >
              <div className="mt-8 flex flex-col gap-8 md:gap-10 lg:mt-10 lg:flex-row lg:gap-12">
                <div className="flex w-full flex-col gap-4 md:gap-5 lg:basis-1/2 lg:gap-6">
                  <FormInput
                    control={form.control}
                    name="teamname"
                    placeholder="Contoh: Tim Nobita"
                  />
                  <FormInput
                    control={form.control}
                    name="email"
                    placeholder="Contoh: ronaldogoat@gmail.com"
                    type="email"
                  />
                  <FormInput
                    control={form.control}
                    name="university"
                    placeholder="Contoh: Universitas Sriwijaya"
                  />
                  <FormField
                    control={form.control}
                    name="paymentMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-monument text-lg lg:text-xl">
                          Institution
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih Opsi" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="dana">Dana</SelectItem>
                            <SelectItem value="shopeepay">Shopeepay</SelectItem>
                            <SelectItem value="m@support.com">
                              m@support.com
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="paymentProof"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-monument text-lg lg:text-xl">
                          Payment Proof
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="hidden"
                            type="file"
                            {...field}
                            ref={paymentProofRef}
                            onChange={(e) =>
                              handleFileChange(e, field.onChange)
                            }
                          />
                        </FormControl>
                        <div
                          className="relative flex h-36 cursor-pointer items-center justify-center gap-2 border border-shadow-200 font-poppins text-shadow-200"
                          onClick={() => paymentProofRef?.current?.click()}
                        >
                          {imageSrc ? (
                            <Image
                              src={imageSrc}
                              alt="Payment Proof"
                              className="h-full object-contain"
                              fill
                            />
                          ) : (
                            <>
                              <ImagePlus size={22} />
                              <p className="text-base">Upload your file here</p>
                            </>
                          )}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <CompetitionPaymentInformation />
              </div>
              <div className="mt-20 flex w-full flex-col items-center justify-center md:mt-28 lg:mt-36">
                <h3 className="text-center font-monument text-xl md:text-2xl">
                  Team Information
                </h3>
                <hr className="mt-6 w-3/4 border-t-[3px] border-black-100 lg:w-1/3" />
              </div>
              <Button
                type="submit"
                className="mt-6 h-12 w-full bg-background/90 font-monument text-lg hover:bg-background lg:mt-10"
              >
                Submit
              </Button>
            </form>

            {/* <DevTool control={form.control} placement="bottom-right" /> */}
          </Form>
        </div>
      </CardCrook>
    </div>
  );
}
