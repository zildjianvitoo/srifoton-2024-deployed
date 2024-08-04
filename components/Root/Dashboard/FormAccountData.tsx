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
import { Input } from "@/components/ui/input";
import FormInput from "@/components/FormInput";
import { PasswordField } from "./PasswordField";
import "@/lib/utils/zodCustomError";

const formSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string({
        required_error: "Password can not be empty.",
      })
      .regex(/^.{8,20}$/, {
        message: "Minimum 8 and maximum 20 characters.",
      })
      .regex(/(?=.*[A-Z])/, {
        message: "At least one uppercase character.",
      })
      .regex(/(?=.*[a-z])/, {
        message: "At least one lowercase character.",
      })
      .regex(/(?=.*\d)/, {
        message: "At least one digit.",
      })
      .regex(/[$&+,:;=?@#|'<>.^*()%!-]/, {
        message: "At least one special character.",
      }),
    password1: z
      .string({
        required_error: "Password can not be empty.",
      })
      .regex(/^.{8,20}$/, {
        message: "Minimum 8 and maximum 20 characters.",
      })
      .regex(/(?=.*[A-Z])/, {
        message: "At least one uppercase character.",
      })
      .regex(/(?=.*[a-z])/, {
        message: "At least one lowercase character.",
      })
      .regex(/(?=.*\d)/, {
        message: "At least one digit.",
      })
      .regex(/[$&+,:;=?@#|'<>.^*()%!-]/, {
        message: "At least one special character.",
      }),
  })
  .refine(({ password, password1 }) => password === password1, {
    path: ["password1"],
    message: "Password didn't match.",
  });

export default function FormAccountData() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      password1: "",
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
          placeholder="nobita@gmail.com"
          label="Email"
        />
        <PasswordField
          title="Password"
          name="password"
          placeholder="XXXXXXXXX"
        />
        <PasswordField
          title="New Password"
          name="password1"
          placeholder="Masukkan kata sandi baru"
        />

        <Button type="submit" className="w-full bg-black text-white">
          Save
        </Button>
      </form>
    </Form>
  );
}
