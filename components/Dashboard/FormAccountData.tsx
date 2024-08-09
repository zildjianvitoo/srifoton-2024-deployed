"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/FormInput";
import { PasswordField } from "./PasswordField";
import "@/lib/utils/zodCustomError";

import { auth } from "@/lib/firebase";

import { updateUserPassword } from "@/lib/network/users/userQueries";
import { useState } from "react";
import { toast } from "sonner";

type dataProps = {
  email?: string;
  password?: string;
};

const formSchema = z.object({
  email: z.string().min(1).max(50),
  password: z.string().min(1).max(50),
  password1: z.string().min(1).max(50),
});

export default function FormAccountData() {
  const user = auth.currentUser;

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: {
      email: user?.email || "",
      password: "",
      password1: "",
    },
    defaultValues: {
      password: "",
      password1: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const { password, password1 } = values;
    const success = await updateUserPassword(password, password1);
    setLoading(false);
    if (success) {
      toast.success("Password berhasil diperbarui!");
      setSuccess(true);
      console.log("Password updated successfully");
    } else {
      toast.error("Gagal memperbarui password. Silakan coba lagi.");
      console.error("Failed to update password");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 space-y-4 text-black md:px-8"
      >
        <FormInput
          control={form.control}
          disabled={true}
          name="email"
          defaultValue={user?.email ?? ""}
          placeholder={"nobita@gmail.com"}
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
          disabled={loading}
        >
          {loading ? (
            <div className="spinner"></div>
          ) : success ? (
            "Password Updated!"
          ) : (
            "Save"
          )}
        </Button>
      </form>
    </Form>
  );
}
