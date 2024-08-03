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

import { DevTool } from "@hookform/devtools";
import FormInput from "../FormInput";
import FormFile from "../FormFile";
import Image from "next/image";
import Link from "next/link";
import "@/lib/utils/zodCustomError";

type RegProps = {
  branch: string;
  guideBookLink: string;
};

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
  paymentProof: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Ukuran maksimum file 5MB .`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Hanya file berekstensi .jpg, .jpeg, .png and .webp yang diterima.",
    ),

  member1: z.object({
    name: z.string().min(1).max(50),
    studentId: z.string().min(1).max(50),
    phoneNumber: z.string().min(1).max(50),
    instagram: z.string().min(1).max(50),
    studentCard: z
      .any()
      .refine(
        (file) => file?.size <= MAX_FILE_SIZE,
        `Ukuran maksimum file 5MB.`,
      )
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        "Hanya file berekstensi .jpg, .jpeg, .png and .webp yang diterima.",
      ),
  }),
  member2: z
    .object({
      name: z.string().min(1).max(50),
      studentId: z.string().min(1).max(50),
      phoneNumber: z.string().min(1).max(50),
      instagram: z.string().min(1).max(50),
      studentCard: z
        .any()
        .refine(
          (file) => file?.size <= MAX_FILE_SIZE,
          `Ukuran maksimum file 5MB.`,
        )
        .refine(
          (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
          "Hanya file berekstensi .jpg, .jpeg, .png and .webp yang diterima.",
        ),
    })
    .optional(),
  member3: z
    .object({
      name: z.string().min(1).max(50),
      studentId: z.string().min(1).max(50),
      phoneNumber: z.string().min(1).max(50),
      instagram: z.string().min(1).max(50),
      studentCard: z
        .any()
        .refine(
          (file) => file?.size <= MAX_FILE_SIZE,
          `Ukuran maksimum file 5MB.`,
        )
        .refine(
          (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
          "Hanya file berekstensi .jpg, .jpeg, .png and .webp yang diterima.",
        ),
    })
    .optional(),
});

export default function Registration({ branch, guideBookLink }: RegProps) {
  const validBranch = branch.replace("/", "").replace(" ", "-");

  const form = useForm<z.infer<typeof competitionRegistrationScehma>>({
    resolver: zodResolver(competitionRegistrationScehma),
    defaultValues: {
      teamname: "",
      email: "",
      university: "",
      paymentMethod: "",
      paymentProof: undefined,
      member1: {
        name: "",
        studentId: "",
        phoneNumber: "",
        instagram: "",
        studentCard: undefined,
      },
      member2: {
        name: "",
        studentId: "",
        phoneNumber: "",
        instagram: "",
        studentCard: undefined,
      },
      member3: {
        name: "",
        studentId: "",
        phoneNumber: "",
        instagram: "",
        studentCard: undefined,
      },
    },
  });

  const onSubmit = async (
    FormValues: z.infer<typeof competitionRegistrationScehma>,
  ) => {
    alert("ssucccesss");
    console.log(FormValues);
  };

  if (form.formState.isSubmitSuccessful) {
    return (
      <div className={"flex flex-col gap-14 lg:gap-20"}>
        <div className="relative mx-auto flex w-full flex-col items-center justify-center gap-6 text-center text-whtc">
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
          <p className="mt-4 text-lg">
            Terima kasih sudah mendaftar di kompetisi SRIFOTON 2024!
          </p>
          <p className="text-lg">
            Tekan tombol di bawah <br /> untuk mengetahui info lebih lanjut.
          </p>
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
        </div>
      </div>
    );
  }

  return (
    <div className={"flex flex-col gap-14 lg:gap-20"}>
      <div className="relative mx-auto flex w-fit flex-col gap-6 text-center text-whtc">
        <h1 className="srifoton-header font-monument uppercase">{branch}</h1>
        <p className="srifoton-text mx-auto w-[70%]">
          Hai, silahkan isi secara detail informasi untuk tim dan setiap anggota
          tim kamu!
        </p>
      </div>
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
                    label="Team Name"
                  />
                  <FormInput
                    control={form.control}
                    name="email"
                    placeholder="Contoh: ronaldogoat@gmail.com"
                    type="email"
                    label="Email"
                  />
                  <FormInput
                    control={form.control}
                    name="university"
                    placeholder="Contoh: Universitas Sriwijaya"
                    label="Institution"
                  />
                  <FormField
                    control={form.control}
                    name="paymentMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-monument text-lg lg:text-xl">
                          Payment Method
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
                  <FormFile
                    control={form.control}
                    name={"paymentProof"}
                    label={"Payment Proof"}
                  />
                </div>
                <CompetitionPaymentInformation />
              </div>
              <div className="mt-20 flex w-full flex-col items-center justify-center md:mt-28 lg:mt-36">
                <h3 className="text-center font-monument text-xl md:text-2xl">
                  Team Members Information
                </h3>
                <hr className="mt-6 w-3/4 border-t-[3px] border-black-100 lg:w-[40%]" />
                <div className="mt-8 flex w-full flex-col gap-8 lg:mt-12 lg:flex-row lg:gap-12">
                  <div className="flex flex-col gap-4 lg:basis-1/2 lg:gap-6">
                    <h4 className="text-center font-monument text-lg md:text-xl">
                      Member 1
                    </h4>
                    <FormInput
                      control={form.control}
                      label={"Name"}
                      name={"member1.name"}
                      placeholder={"Contoh: Nobita"}
                    />
                    <FormInput
                      control={form.control}
                      label={"Student ID"}
                      name={"member1.studentId"}
                      placeholder={"Contoh: 09021382227140"}
                    />
                    <FormInput
                      control={form.control}
                      label={"Phone Number"}
                      name={"member1.phoneNumber"}
                      placeholder={"Contoh: 081234567890"}
                    />
                    <FormInput
                      control={form.control}
                      label={"Instagram"}
                      name={"member1.instagram"}
                      placeholder={"Contoh: 09021382227140"}
                    />
                    <FormFile
                      control={form.control}
                      name={"member1.studentCard"}
                      label={"Student Card"}
                    />
                  </div>
                  <div className="flex flex-col gap-4 lg:basis-1/2 lg:gap-6">
                    <h4 className="text-center font-monument text-lg md:text-xl">
                      Member 2
                    </h4>
                    <FormInput
                      control={form.control}
                      label={"Name"}
                      name={"member2.name"}
                      placeholder={"Contoh: Nobita"}
                    />
                    <FormInput
                      control={form.control}
                      label={"Student ID"}
                      name={"member2.studentId"}
                      placeholder={"Contoh: 09021382227140"}
                    />
                    <FormInput
                      control={form.control}
                      label={"Phone Number"}
                      name={"member2.phoneNumber"}
                      placeholder={"Contoh: 081234567890"}
                    />
                    <FormInput
                      control={form.control}
                      label={"Instagram"}
                      name={"member2.instagram"}
                      placeholder={"Contoh: 09021382227140"}
                    />
                    <FormFile
                      control={form.control}
                      name={"member2.studentCard"}
                      label={"Student Card"}
                    />
                  </div>
                </div>
                <div className="mr-auto mt-8 flex w-full flex-col justify-start gap-4 md:mt-12 lg:mt-16 lg:w-1/2 lg:gap-6">
                  <h4 className="text-center font-monument text-lg md:text-xl">
                    Member 3
                  </h4>
                  <FormInput
                    control={form.control}
                    label={"Name"}
                    name={"member3.name"}
                    placeholder={"Contoh: Nobita"}
                  />
                  <FormInput
                    control={form.control}
                    label={"Student ID"}
                    name={"member3.studentId"}
                    placeholder={"Contoh: 09021382227140"}
                  />
                  <FormInput
                    control={form.control}
                    label={"Phone Number"}
                    name={"member3.phoneNumber"}
                    placeholder={"Contoh: 081234567890"}
                  />
                  <FormInput
                    control={form.control}
                    label={"Instagram"}
                    name={"member3.instagram"}
                    placeholder={"Contoh: 09021382227140"}
                  />
                  <FormFile
                    control={form.control}
                    name={"member3.studentCard"}
                    label={"Student Card"}
                  />
                </div>
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
