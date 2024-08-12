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
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, storage } from "@/lib/firebase";
import { ulid } from "ulid";
import { addNewWorkshop } from "@/lib/network/workshops/workshopQueries";
import SuccessRegister from "../SuccessRegister";
import "@/lib/utils/zodCustomError";
import { Button } from "@/components/ui/button";
import useToastErrorNoUser from "@/hooks/useToastErrorNoUser";
import { useState } from "react";
import useComingSoon from "@/hooks/useComingSoon";

export const workshopRegistrationSchema = z.object({
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

export default function WorkshopForm({}: Props) {
  useComingSoon(true);
  useToastErrorNoUser();

  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof workshopRegistrationSchema>>({
    resolver: zodResolver(workshopRegistrationSchema),
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
    formValues: z.infer<typeof workshopRegistrationSchema>,
  ) => {
    const user = auth.currentUser;
    if (!user) {
      toast.error("Anda harus login terlebih dahulu!");
      return;
    }

    const user_id = user.uid;
    const date = new Date();
    const is_verified = false;

    try {
      const { ref: refProof } = await uploadBytes(
        ref(storage, `workshop/${ulid()}`),
        formValues.proof,
      );
      formValues.proof = await getDownloadURL(refProof);

      await addNewWorkshop({
        ...formValues,
        user_id,
        date,
        is_verified,
      });
      window.scrollTo(0, 0);
      toast.success("Berhasil daftar Workshop");
      setIsSuccess(true);
    } catch (error) {
      toast.error("Terjadi Kesalahan di sisi server");
      // console.log(error);
    }
  };

  if (form.formState.isSubmitSuccessful && isSuccess) {
    return <SuccessRegister branch={"workshop"} validBranch={"workshop"} />;
  }

  return (
    <div className={"flex flex-col gap-14 lg:gap-20"}>
      <div className="text-whtc relative mx-auto flex w-fit flex-col gap-6 text-center text-primary-200">
        <h1 className="srifoton-header font-monument uppercase text-primary-200">
          WORKSHOP
        </h1>
        <p className="srifoton-text mx-auto">
          Hai, silakan isi secara detail informasi kamu
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
                          Workshop Type
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
                {form.formState.isSubmitting ? (
                  <div className="spinner"></div>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </CardCrook>
    </div>
  );
}
