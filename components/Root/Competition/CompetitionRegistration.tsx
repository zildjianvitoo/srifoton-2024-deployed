"use client";

import CardCrook from "../CardCrook.v2";
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
import { Button } from "../../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import PaymentInformation from "../PaymentInformation";

import { DevTool } from "@hookform/devtools";
import FormInput from "../../FormInput";
import FormFile from "../../FormFile";
import { addNewCompetitiveProgramming } from "@/lib/network/competitions/competitiveProgrammingQueries";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "@/lib/firebase";
import { ulid } from "ulid";
import { addNewUiUxDesign } from "@/lib/network/competitions/uiUxDesignQueries";
import { addNewWebDevelopment } from "@/lib/network/competitions/webDevelopmentQueries";
import { addNewMobileLegends } from "@/lib/network/competitions/mobileLegendsQueries";
import SuccessRegister from "../SuccessRegister";
import { toast } from "sonner";
import "@/lib/utils/zodCustomError";
import useToastErrorNoUser from "@/hooks/useToastErrorNoUser";
import Image from "next/image";

type RegProps = {
  branch: string;
  guideBookLink: string;
};

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const competitionRegistrationScehma = z.object({
  team_name: z.string().min(1).max(50),
  email: z.string().min(1).max(50),
  college: z.string().min(1).max(50),
  payment_method: z.string().min(1).max(50),
  proof: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Ukuran maksimum file 5MB .`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Hanya file berekstensi .jpg, .jpeg, .png and .webp yang diterima.",
    ),

  name_1: z.string().min(1).max(50),
  nim_1: z.string().min(1).max(50),
  phone_number_1: z.string().min(1).max(50),
  instagram_1: z.string().min(1).max(50),
  idcard_1: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Ukuran maksimum file 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Hanya file berekstensi .jpg, .jpeg, .png and .webp yang diterima.",
    ),

  name_2: z.string().min(1).max(50).optional(),
  nim_2: z.string().min(1).max(50).optional(),
  phone_number_2: z.string().min(1).max(50).optional(),
  instagram_2: z.string().min(1).max(50).optional(),
  idcard_2: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Ukuran maksimum file 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Hanya file berekstensi .jpg, .jpeg, .png and .webp yang diterima.",
    )
    .optional(),

  name_3: z.string().min(1).max(50).optional(),
  nim_3: z.string().min(1).max(50).optional(),
  phone_number_3: z.string().min(1).max(50).optional(),
  instagram_3: z.string().min(1).max(50).optional(),
  idcard_3: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Ukuran maksimum file 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Hanya file berekstensi .jpg, .jpeg, .png and .webp yang diterima.",
    )
    .optional(),

  name_4: z.string().min(1).max(50).optional(),
  nim_4: z.string().min(1).max(50).optional(),
  phone_number_4: z.string().min(1).max(50).optional(),
  instagram_4: z.string().min(1).max(50).optional(),
  idcard_4: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Ukuran maksimum file 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Hanya file berekstensi .jpg, .jpeg, .png and .webp yang diterima.",
    )
    .optional(),
  name_5: z.string().min(1).max(50).optional(),
  nim_5: z.string().min(1).max(50).optional(),
  phone_number_5: z.string().min(1).max(50).optional(),
  instagram_5: z.string().min(1).max(50).optional(),
  idcard_5: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Ukuran maksimum file 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Hanya file berekstensi .jpg, .jpeg, .png and .webp yang diterima.",
    )
    .optional(),
});

export default function CompetitionRegistration({
  branch,
  guideBookLink,
}: RegProps) {
  useToastErrorNoUser();
  const validBranch = branch.replace("/", "").replace(" ", "-");

  const form = useForm<z.infer<typeof competitionRegistrationScehma>>({
    resolver: zodResolver(competitionRegistrationScehma),
    defaultValues: {
      team_name: "",
      email: "",
      college: "",
      payment_method: "",
      proof: undefined,

      name_1: "",
      nim_1: "",
      phone_number_1: "",
      instagram_1: "",
      idcard_1: undefined,

      name_2: "",
      nim_2: "",
      phone_number_2: "",
      instagram_2: "",
      idcard_2: undefined,

      name_3: "",
      nim_3: "",
      phone_number_3: "",
      instagram_3: "",
      idcard_3: undefined,

      name_4: "",
      nim_4: "",
      phone_number_4: "",
      instagram_4: "",
      idcard_4: undefined,

      name_5: "",
      nim_5: "",
      phone_number_5: "",
      instagram_5: "",
      idcard_5: undefined,
    },
  });

  const onSubmit = async (
    formValues: z.infer<typeof competitionRegistrationScehma>,
  ) => {
    const user_id = "kocak";
    const date = new Date();
    const is_verified = false;

    try {
      const [
        { ref: refProof },
        { ref: refIdCard1 },
        { ref: refIdCard2 },
        { ref: refIdCard3 },
        { ref: refIdCard4 },
        { ref: refIdCard5 },
      ] = await Promise.all([
        uploadBytes(
          ref(
            storage,
            `competitions/${validBranch}/${formValues.team_name}/${ulid()}`,
          ),
          formValues.proof,
        ),
        uploadBytes(
          ref(
            storage,
            `competitions/${validBranch}/${formValues.team_name}/${ulid()}`,
          ),
          formValues.idcard_1,
        ),
        uploadBytes(
          ref(
            storage,
            `competitions/${validBranch}/${formValues.team_name}/${ulid()}`,
          ),
          formValues.idcard_2,
        ),
        uploadBytes(
          ref(
            storage,
            `competitions/${validBranch}/${formValues.team_name}/${ulid()}`,
          ),
          formValues.idcard_3,
        ),
        uploadBytes(
          ref(
            storage,
            `competitions/${validBranch}/${formValues.team_name}/${ulid()}`,
          ),
          formValues.idcard_4,
        ),
        uploadBytes(
          ref(
            storage,
            `competitions/${validBranch}/${formValues.team_name}/${ulid()}`,
          ),
          formValues.idcard_5,
        ),
      ]);
      formValues.proof = refProof.fullPath as string;
      formValues.idcard_1 = refIdCard1.fullPath as string;
      formValues.idcard_2 = refIdCard2.fullPath as string;
      formValues.idcard_3 = refIdCard3.fullPath as string;
      formValues.idcard_4 = refIdCard4.fullPath as string;
      formValues.idcard_5 = refIdCard5.fullPath as string;
      if (validBranch === "competitive-programming") {
        await addNewCompetitiveProgramming({
          ...formValues,
          user_id,
          date,
          is_verified,
        });
      } else if (validBranch === "uiux-design") {
        await addNewUiUxDesign({
          ...formValues,
          user_id,
          date,
          is_verified,
        });
      } else if (validBranch === "web-development") {
        await addNewWebDevelopment({
          ...formValues,
          user_id,
          date,
          is_verified,
        });
      } else if (validBranch === "e-sport") {
        await addNewMobileLegends({
          ...formValues,
          user_id,
          date,
          is_verified,
        });
      }
      toast.success("Berhasil mendaftar kompetisi");
      window.scrollTo(0, 0);
    } catch (error) {
      toast.error("Terjadi Kesalahan di sisi server");
      console.log(error);
    }
  };

  if (form.formState.isSubmitSuccessful) {
    return (
      <SuccessRegister
        branch={branch}
        validBranch={validBranch}
        guideBookLink={guideBookLink}
      />
    );
  }

  return (
    <div className={"flex flex-col gap-14 lg:gap-20"}>
      <div className="text-whtc relative mx-auto flex w-fit flex-col gap-6 text-center">
        <h1 className="srifoton-header font-monument uppercase text-primary-200">
          {branch}
        </h1>
        <p className="srifoton-text mx-auto w-[70%] text-primary-200">
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
                    name="team_name"
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
                    name="college"
                    placeholder="Contoh: Universitas Sriwijaya"
                    label="Institution"
                  />
                  <FormField
                    control={form.control}
                    name="payment_method"
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
                            <SelectItem value="sea-bank">
                              Transfer Bank (Sea Bank)
                            </SelectItem>
                            <SelectItem value="mandiri">
                              Transfer Bank (Mandiri)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormFile
                    control={form.control}
                    name={"proof"}
                    label={"Payment Proof"}
                  />
                </div>
                <PaymentInformation />
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
                      name={"name_1"}
                      placeholder={"Contoh: Nobita"}
                    />
                    <FormInput
                      control={form.control}
                      label={"Student ID"}
                      name={"nim_1"}
                      placeholder={"Contoh: 09021382227140"}
                    />
                    <FormInput
                      control={form.control}
                      label={"Phone Number"}
                      name={"phone_number_1"}
                      placeholder={"Contoh: 081234567890"}
                    />
                    <FormInput
                      control={form.control}
                      label={"Instagram"}
                      name={"instagram_1"}
                      placeholder={"Contoh: 09021382227140"}
                    />
                    <FormFile
                      control={form.control}
                      name={"idcard_1"}
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
                      name={"name_2"}
                      placeholder={"Contoh: Nobita"}
                    />
                    <FormInput
                      control={form.control}
                      label={"Student ID"}
                      name={"nim_2"}
                      placeholder={"Contoh: 09021382227140"}
                    />
                    <FormInput
                      control={form.control}
                      label={"Phone Number"}
                      name={"phone_number_2"}
                      placeholder={"Contoh: 081234567890"}
                    />
                    <FormInput
                      control={form.control}
                      label={"Instagram"}
                      name={"instagram_2"}
                      placeholder={"Contoh: 09021382227140"}
                    />
                    <FormFile
                      control={form.control}
                      name={"idcard_2"}
                      label={"Student Card"}
                    />
                  </div>
                </div>
                <div className="mt-8 flex w-full flex-col gap-8 lg:mt-12 lg:flex-row lg:gap-12">
                  <div className="flex flex-col gap-4 lg:basis-1/2 lg:gap-6">
                    <h4 className="text-center font-monument text-lg md:text-xl">
                      Member 3
                    </h4>
                    <FormInput
                      control={form.control}
                      label={"Name"}
                      name={"name_3"}
                      placeholder={"Contoh: Nobita"}
                    />
                    <FormInput
                      control={form.control}
                      label={"Student ID"}
                      name={"nim_3"}
                      placeholder={"Contoh: 09021382227140"}
                    />
                    <FormInput
                      control={form.control}
                      label={"Phone Number"}
                      name={"phone_number_3"}
                      placeholder={"Contoh: 081234567890"}
                    />
                    <FormInput
                      control={form.control}
                      label={"Instagram"}
                      name={"instagram_3"}
                      placeholder={"Contoh: 09021382227140"}
                    />
                    <FormFile
                      control={form.control}
                      name={"idcard_3"}
                      label={"Student Card"}
                    />
                  </div>
                  {validBranch === "e-sport" ? (
                    <div className="flex flex-col gap-4 lg:basis-1/2 lg:gap-6">
                      <h4 className="text-center font-monument text-lg md:text-xl">
                        Member 4
                      </h4>
                      <FormInput
                        control={form.control}
                        label={"Name"}
                        name={"name_4"}
                        placeholder={"Contoh: Nobita"}
                      />
                      <FormInput
                        control={form.control}
                        label={"Student ID"}
                        name={"nim_4"}
                        placeholder={"Contoh: 09021382227140"}
                      />
                      <FormInput
                        control={form.control}
                        label={"Phone Number"}
                        name={"phone_number_4"}
                        placeholder={"Contoh: 081234567890"}
                      />
                      <FormInput
                        control={form.control}
                        label={"Instagram"}
                        name={"instagram_4"}
                        placeholder={"Contoh: 09021382227140"}
                      />
                      <FormFile
                        control={form.control}
                        name={"idcard_4"}
                        label={"Student Card"}
                      />
                    </div>
                  ) : (
                    <div className="m-auto max-md:hidden">
                      <Image
                        src={"/img/logo-srifoton.png"}
                        alt="Logo Srifoton"
                        width={350}
                        height={350}
                      />
                    </div>
                  )}
                </div>
                {validBranch === "e-sport" && (
                  <div className="mt-8 flex w-full flex-col gap-8 lg:mt-12 lg:flex-row lg:gap-12">
                    <div className="mr-auto mt-8 flex flex-col gap-4 lg:mt-12 lg:w-[48%] lg:gap-6">
                      <h4 className="text-center font-monument text-lg md:text-xl">
                        Member 5
                      </h4>
                      <FormInput
                        control={form.control}
                        label={"Name"}
                        name={"name_5"}
                        placeholder={"Contoh: Nobita"}
                      />
                      <FormInput
                        control={form.control}
                        label={"Student ID"}
                        name={"nim_5"}
                        placeholder={"Contoh: 09021382227140"}
                      />
                      <FormInput
                        control={form.control}
                        label={"Phone Number"}
                        name={"phone_number_5"}
                        placeholder={"Contoh: 081234567890"}
                      />
                      <FormInput
                        control={form.control}
                        label={"Instagram"}
                        name={"instagram_5"}
                        placeholder={"Contoh: 09021382227140"}
                      />
                      <FormFile
                        control={form.control}
                        name={"idcard_5"}
                        label={"Student Card"}
                      />
                    </div>
                    <div className="m-auto">Logo Srifoton</div>
                  </div>
                )}
              </div>
              <Button
                type="submit"
                className="mt-6 h-12 w-full bg-background/90 font-monument text-lg hover:bg-background disabled:opacity-60 lg:mt-10"
                disabled={form.formState.isSubmitting}
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
