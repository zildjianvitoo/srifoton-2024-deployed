"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import FormInput from "@/components/FormInput";
import { PasswordField } from "./PasswordField";
import "@/lib/utils/zodCustomError";
import { User } from "@/lib/types/userTypes";

import { db } from "@/lib/firebase";
import { doc, setDoc, collection } from "firebase/firestore";

const phoneRegex = new RegExp(
  /^(0|62|\+62)(8[1-35-9]\d{7,10}|2[124]\d{7,8}|619\d{8}|2(?:1(?:14|500)|2\d{3})\d{3}|61\d{5,8}|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\d|9[1-8])|3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:[25]\d|3[1-69]|4[1-6])|7(?:02|[125][1-9]|[36]\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\d{5,8})/,
);

const formSchema = z.object({
  name: z.string().min(1).max(50),
  college: z.string().min(1).max(50),
  id: z.string().min(1).max(50),
  phone_number: z.string().regex(phoneRegex, "Invalid Number"),
  gender: z.enum(["male", "female"], {
    required_error: "You need to select your gender",
  }),
  instagram: z.string().min(2),
});

async function formHandleSubmit({
  name,
  college,
  id,
  phone_number,
  gender,
  instagram,
}: User) {
  const newDocRef = doc(collection(db, "users"));
  await setDoc(newDocRef, {
    name: name,
    college: college,
    id: id,
    phone_number: phone_number,
    gender: gender,
    instagram: instagram,
  });
}

export default function FormPersonalData() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      college: "",
      id: "",
      phone_number: "",
      gender: "male",
      instagram: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    formHandleSubmit(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 space-y-6 text-black md:px-8"
      >
        <FormInput
          control={form.control}
          name="name"
          placeholder="Nobita"
          label="Username"
        />
        <FormInput
          control={form.control}
          name="college"
          placeholder="Universitas Sriwijaya"
          label="Institution"
        />
        <PasswordField
          title="Student ID"
          name="id"
          placeholder="090233765456"
        />
        <FormInput
          control={form.control}
          name="phone_number"
          placeholder="08976553287"
          label="Phone Number"
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="font-monument text-lg text-black lg:text-xl">
                Gender
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value="male"
                        className="border-2 border-[#868365]"
                      />
                    </FormControl>
                    <FormLabel className="font-monument text-lg lg:text-xl">
                      Male
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value="female"
                        className="border-2 border-[#868365]"
                      />
                    </FormControl>
                    <FormLabel className="font-monument text-lg lg:text-xl">
                      Female
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormInput
          control={form.control}
          name="instagram"
          placeholder="nobita_"
          label="Instagram"
        />
        <Button type="submit" className="w-full bg-black text-white">
          Save
        </Button>
      </form>
    </Form>
  );
}
