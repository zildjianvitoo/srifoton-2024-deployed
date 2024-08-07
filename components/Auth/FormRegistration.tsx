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

type dataProps = {
  name?: string;
  email?: string;
  password?: string;
};

async function addData({ name, email, password }: dataProps) {
  console.log(email, password);
}

const formSchema = z
  .object({
    name: z.string().min(1).max(50),
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
      }),
  })
  .refine(({ password, password1 }) => password === password1, {
    path: ["password1"],
    message: "Password didn't match.",
  });

export default function FormRegistration() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      password1: "",
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
          name="name"
          placeholder="Contoh: Nobita"
          label="Name"
        />
        <FormInput
          control={form.control}
          name="email"
          placeholder="Contoh: nobita@gmail.com"
          label="Email"
        />
        <PasswordField
          title="Password"
          name="password"
          placeholder="Masukkan kata sandi"
        />
        <PasswordField
          title="New Password"
          name="password1"
          placeholder="Konfirmasi kata sandi"
        />
        <div className="flex flex-col space-y-2">
          <Button
            type="submit"
            className="w-full bg-background text-sm text-white"
          >
            Create Account
          </Button>
          <p className="text-center text-xs md:text-sm">
            Or use your google account
          </p>
          <Button
            type="submit"
            className="w-full text-sm text-background"
            variant={"outline"}
          >
            <Image
              src={"/img/google-icon.png"}
              width={50}
              height={50}
              alt="google-icon"
              className="me-2 size-4 md:me-4 md:size-6"
            ></Image>
            Sign in with Google
          </Button>
          <p className="text-center text-xs md:text-sm">
            Already have have an account?{" "}
            <Link href={"/login"} className="text-[#737158]">
              Log In
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
}
