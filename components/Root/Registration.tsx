"use client";

import { cn } from "@/lib/utils";
import CardCrook from "./CardCrook.v2";
import {
  Form,
  FormControl,
  FormDescription,
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

const formSchema = z.object({
  teamname: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  university: z.string().min(2).max(50),
  paymentMethod: z.string().min(2).max(50),
  paymentProof: z.string().min(2).max(50),
});

type RegProps = {
  branch: string;
  className?: string | undefined;
};

export default function Registration({ branch, className }: RegProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamname: "",
      email: "",
      university: "",
      paymentMethod: "",
      paymentProof: "",
    },
  });

  const onSubmit = async (FormValues: z.infer<typeof formSchema>) => {
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
            <div className="mt-8 flex flex-col gap-8 md:gap-10 lg:mt-10 lg:flex-row lg:gap-12">
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex w-full flex-col gap-4 md:gap-5 lg:basis-1/2 lg:gap-6"
              >
                <FormField
                  control={form.control}
                  name="teamname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-monument text-lg lg:text-xl">
                        Team Name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Contoh: Tim Nobita" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-monument text-lg lg:text-xl">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Contoh: srifoton@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="university"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-monument text-lg lg:text-xl">
                        Institution
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Contoh: Universitas Sriwijaya"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
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
              </form>
              <div className="flex flex-col lg:basis-1/2">
                <h3 className="font-monument text-xl">Team Information</h3>
                <hr className="mt-6 w-full border-t-[3px] border-black-100" />
              </div>
            </div>
            <Button
              type="submit"
              className="h-12 w-full bg-background/90 font-monument text-lg hover:bg-background"
            >
              Submit
            </Button>
          </Form>
        </div>
      </CardCrook>
    </div>
  );
}
