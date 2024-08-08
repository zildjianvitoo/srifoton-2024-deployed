"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/FormInput";
import "@/lib/utils/zodCustomError";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email(),
});

export default function FormForgotPassword() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 space-y-4 text-black md:px-8"
      >
        <FormInput
          control={form.control}
          name="email"
          placeholder="Contoh: nobita@gmail.com"
          label="Email"
        />
        <div className="flex flex-row space-x-2">
          <Button
            className="h-12 w-full bg-transparent font-monument text-lg text-transparent/90 hover:bg-background disabled:opacity-60"
            variant={"outline"}
          >
            <Link href={"/login"}>Cancel</Link>
          </Button>
          <Button
            type="submit"
            className="h-12 w-full bg-background/90 font-monument text-lg text-white hover:bg-background disabled:opacity-60"
          >
            Verification
          </Button>
        </div>
      </form>
    </Form>
  );
}
