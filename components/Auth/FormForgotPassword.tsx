"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { set, z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/FormInput";
import "@/lib/utils/zodCustomError";
import Link from "next/link";
import { forgotPassword } from "@/lib/network/users/userQueries";
import { toast } from "sonner";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email(),
});

export default function FormForgotPassword() {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      const success = await forgotPassword(values.email);
      if (success) {
        toast.success("Email reset password sudah dikirim, cek email Anda.");
      } else {
        toast.error("Gagal mengirim email reset password.");
      }
      setLoading(false);
    } catch (error) {
      toast.error("Terjadi kesalahan server saat mengirimkan email reset password.");
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
          name="email"
          placeholder="Contoh: nobita@gmail.com"
          label="Email"
        />
        <div className="flex flex-row space-x-2">
          <Button
            type="button"
            className="h-12 w-full bg-transparent font-monument text-xs text-transparent/90 hover:bg-background disabled:opacity-60 md:text-lg"
            variant={"outline"}
          >
            <Link href={"/login"}>Cancel</Link>
          </Button>
          <Button
            type="submit"
            className="h-12 w-full bg-background/90 font-monument text-xs text-white hover:bg-background disabled:opacity-60 md:text-lg"
          >
            {loading ? (
                <div className="spinner"></div>
              ) : "Send Reset Email"}
          </Button>
        </div>
      </form>
    </Form>
  );
}