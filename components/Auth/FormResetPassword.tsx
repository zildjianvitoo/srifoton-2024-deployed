"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { PasswordField } from "../Dashboard/PasswordField";
import "@/lib/utils/zodCustomError";
import SuccessResetPassword from "./SuccessResetPassword";

const formSchema = z
  .object({
    password: z
      .string()
      .regex(/^.{8,20}$/)
      .regex(/(?=.*[A-Z])/)
      .regex(/(?=.*[a-z])/)
      .regex(/(?=.*\d)/),
    password1: z
      .string()
      .regex(/^.{8,20}$/)
      .regex(/(?=.*[A-Z])/)
      .regex(/(?=.*[a-z])/)
      .regex(/(?=.*\d)/),
  })
  .refine(({ password, password1 }) => password === password1, {
    path: ["password1"],
    message: "Password didn't match.",
  });

export default function FormResetPassword() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      password1: "",
    },
  });

  if (form.formState.isSubmitSuccessful) {
    return <SuccessResetPassword />;
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 space-y-4 text-black md:px-8"
      >
        <PasswordField
          title="New Password"
          name="password"
          placeholder="Masukkan kata sandi baru"
        />
        <PasswordField
          title="Confirm Password"
          name="password1"
          placeholder="Konfirmasi kata sandi"
        />
        <Button
          type="submit"
          className="mt-6 h-12 w-full bg-background/90 font-monument text-lg text-white hover:bg-background disabled:opacity-60 lg:mt-10"
        >
          Reset Password
        </Button>
      </form>
    </Form>
  );
}
