"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/FormInput";
import { PasswordField } from "./PasswordField";
import "@/lib/utils/zodCustomError";

import { db } from "@/lib/firebase";
import { doc, setDoc, collection } from "firebase/firestore";

type dataProps = {
  email?: string;
  password?: string;
};

async function addData({ email, password }: dataProps) {
  console.log(email, password);

  // const newDocRef = doc(collection(db, "users"));
  // await setDoc(newDocRef, {
  //   email: email,
  //   password: password,
  // });
}

const formSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(1).max(50),
    password1: z.string().min(1).max(50),
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

        <Button
          type="submit"
          className="mt-6 h-12 w-full bg-background/90 font-monument text-lg text-white hover:bg-background disabled:opacity-60 lg:mt-10"
        >
          Save
        </Button>
      </form>
    </Form>
  );
}
