"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/FormInput";
import { PasswordField } from "../Root/Dashboard/PasswordField";
import "@/lib/utils/zodCustomError";
import Image from "next/image";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";

type dataProps = {
  email?: string;
  password?: string;
};

async function addData({ email, password }: dataProps) {
  console.log(email, password);
}

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
    addData(values);
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
            type="submit"
            className="w-full text-sm text-background"
            variant={"outline"}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="w-full bg-background text-sm text-white"
          >
            Verification
          </Button>
        </div>
      </form>
    </Form>
  );
}
