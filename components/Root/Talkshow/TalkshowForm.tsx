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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FormFile from "@/components/FormFile";
import FormInput from "@/components/FormInput";
import PaymentInformation from "@/components/Root/PaymentInformation";
import * as z from "zod";
const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "@/lib/firebase";
import { ulid } from "ulid";
import { addNewTalkshow } from "@/lib/network/talkshows/talkshowQueries";
import SuccessRegister from "../SuccessRegister";
import { Button } from "@/components/ui/button";
import "@/lib/utils/zodCustomError";
import useToastErrorNoUser from "@/hooks/useToastErrorNoUser";

export const talkshowRegistrationSchema = z.object({
  name: z.string().min(1).max(50),
  email: z.string().min(1).max(50),
  college: z.string().min(1).max(50),
  type: z.string().min(1).max(50),
  payment_method: z.string().min(1).max(50),
  proof: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Ukuran maksimum file 5MB .`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Hanya file berekstensi .jpg, .jpeg, .png and .webp yang diterima.",
    ),
});

type Props = {};

export default function TalkshowForm({}: Props) {
  useToastErrorNoUser();

  const form = useForm<z.infer<typeof talkshowRegistrationSchema>>({
    resolver: zodResolver(talkshowRegistrationSchema),
    defaultValues: {
      name: "",
      email: "",
      college: "",
      type: "",
      payment_method: "",
      proof: undefined,
    },
  });
  const onSubmit = async (
    formValues: z.infer<typeof talkshowRegistrationSchema>,
  ) => {
    const user_id = "kocak";
    const date = new Date();
    const is_verified = false;

    try {
      const { ref: refProof } = await uploadBytes(
        ref(storage, `talkshow/${ulid()}`),
        formValues.proof,
      );
      formValues.proof = refProof.fullPath as string;
      await addNewTalkshow({
        ...formValues,
        user_id,
        date,
        is_verified,
      });
      window.scrollTo(0, 0);
      toast.success("Berhasil daftar Talkshow");
    } catch (error) {
      toast.error("Terjadi Kesalahan di sisi server");
      console.log(error);
    }
  };

  if (form.formState.isSubmitSuccessful) {
    return <SuccessRegister branch={"talkshow"} validBranch={"talkshow"} />;
  }

  return (
    <div className={"flex flex-col gap-14 lg:gap-20"}>
      <div className="text-whtc relative mx-auto flex w-fit flex-col gap-6 text-center">
        <h1 className="srifoton-header font-monument uppercase">Talkshow</h1>
        <p className="srifoton-text mx-auto">
          Hai, silahkan isi secara detail informasi kamu
        </p>
      </div>

      <CardCrook>
        <div className="flex w-full flex-col gap-6 px-6 py-12 md:gap-8 md:px-10 md:py-16 lg:gap-12 lg:px-20 lg:py-24">
          <div className="flex w-full flex-col items-center justify-center">
            <h3 className="text-center font-monument text-xl md:text-2xl">
              Participant Information
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
                    name="name"
                    placeholder="Contoh: Zildjian Vito"
                    label="Name"
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
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-monument text-lg lg:text-xl">
                          Talkshow Type
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
                            <SelectItem value="offline">Offline</SelectItem>
                            <SelectItem value="online">Online</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
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
              <Button
                type="submit"
                className="mt-6 h-12 w-full bg-background/90 font-monument text-lg hover:bg-background disabled:opacity-60 lg:mt-10"
                disabled={form.formState.isSubmitting}
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </CardCrook>
    </div>
  );
}
