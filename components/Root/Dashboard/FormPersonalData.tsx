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
import { Input } from "@/components/ui/input";
import { PasswordField } from "./PasswordField";

const phoneRegex = new RegExp(
  /^(0|62|\+62)(8[1-35-9]\d{7,10}|2[124]\d{7,8}|619\d{8}|2(?:1(?:14|500)|2\d{3})\d{3}|61\d{5,8}|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\d|9[1-8])|3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:[25]\d|3[1-69]|4[1-6])|7(?:02|[125][1-9]|[36]\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\d{5,8})/,
);

const formSchema = z.object({
  username: z.string().min(1).max(50),
  institution: z.string().min(1).max(50),
  id: z.string().min(1).max(50),
  phone: z.string().regex(phoneRegex, "Invalid Number"),
  gender: z.enum(["male", "female"], {
    required_error: "You need to select your gender",
  }),
  instagram: z.string().min(2),
});

export default function FormPersonalData() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      institution: "",
      id: "",
      phone: "",
      gender: "male",
      instagram: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 space-y-6 px-8 text-[#868365]"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-monument text-black">
                Username
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Nobita"
                  {...field}
                  className="rounded-none border-[#868365] bg-transparent py-0 text-sm placeholder:text-[#868365]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="institution"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-monument text-black">
                Institution
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Universitas Sriwijaya"
                  {...field}
                  className="rounded-none border-[#868365] bg-transparent py-0 text-sm placeholder:text-[#868365]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <PasswordField
          title="Student ID"
          name="id"
          placeholder="090233765456"
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-monument text-black">
                Phone Number
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="08976553287"
                  {...field}
                  className="rounded-none border-[#868365] bg-transparent py-0 text-sm placeholder:text-[#868365]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-black">Gender</FormLabel>
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
                    <FormLabel className="font-normal">Male</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem
                        value="female"
                        className="border-2 border-[#868365]"
                      />
                    </FormControl>
                    <FormLabel className="font-normal">Female</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="instagram"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-monument text-black">
                Instagram
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="nobita_"
                  {...field}
                  className="rounded-none border-[#868365] bg-transparent py-0 text-sm placeholder:text-[#868365]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-black text-white">
          Save
        </Button>
      </form>
    </Form>
  );
}
