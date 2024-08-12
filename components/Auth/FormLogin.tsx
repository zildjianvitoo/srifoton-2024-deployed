"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { set, z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/FormInput";
import { PasswordField } from "../Dashboard/PasswordField";
import Image from "next/image";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";
import {
  signInWithEmail,
  signInWithGoogle,
} from "@/lib/network/users/userQueries";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "@/lib/utils/zodCustomError";

type dataProps = {
  email?: string;
  password?: string;
};

async function addData({ email, password }: dataProps) {
  // console.log(email, password);
}

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/, {
      message:
        "Password harus setidaknya mengandung 1 huruf besar, 1 huruf kecil, dan 1 angka",
    })
    .max(50),
});

export default function FormLogin() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [successGoogle, setSuccessGoogle] = useState(false);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const accountSignedIn = await signInWithEmail(
        values.email,
        values.password,
      );
      if (accountSignedIn) {
        toast.success("Berhasil masuk dengan email!");
        router.push("/dashboard/account-data");
        setSuccess(true);
      } else {
        toast.error(
          "Gagal masuk dengan email. Pastikan email sudah diverifikasi dan silakan coba lagi.",
        );
      }
    } catch (error) {
      // console.error("Error signing in with email: ", error);
      toast.error("Terjadi kesalahan saat masuk dengan email.");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    setLoadingGoogle(true);
    try {
      const accountSignedIn = await signInWithGoogle();
      if (accountSignedIn) {
        toast.success("Berhasil masuk dengan akun Google!");
        router.push("/dashboard/account-data");
        setSuccessGoogle(true);
      } else {
        toast.error("Gagal masuk dengan akun Google. Silakan coba lagi.");
      }
    } catch (error) {
      // console.error("Error signing in with Google: ", error);
      toast.error("Terjadi kesalahan saat masuk dengan Google.");
    } finally {
      setLoadingGoogle(false);
    }
  }

  return (
    <div className="mt-10 md:px-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 text-black"
        >
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
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" className="border-black bg-black" />
              <label
                htmlFor="terms"
                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Keep me signed in
              </label>
            </div>
            <Link href={"/forgot-password"} className="text-xs text-[#737158]">
              Forgot Password?
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <Button
              type="submit"
              className="h-12 w-full bg-background/90 font-monument text-xs text-white hover:bg-background disabled:opacity-60 md:text-lg"
              disabled={loading}
            >
              {loading ? (
                <div className="spinner"></div>
              ) : success ? (
                "Logged In!"
              ) : (
                "Login"
              )}
            </Button>
            <p className="text-center text-xs md:text-sm">
              Or use your google account
            </p>
          </div>
        </form>
        <Button
          type="submit"
          className="mt-2 h-12 w-full bg-transparent font-monument text-xs text-transparent/90 hover:bg-background disabled:opacity-60 md:text-lg"
          variant={"outline"}
          onClick={handleGoogleSignIn}
        >
          <Image
            src={"/img/google-icon.png"}
            width={50}
            height={50}
            alt="google-icon"
            className="me-2 size-4 md:me-4 md:size-6"
          ></Image>
          {loadingGoogle ? (
            <div className="spinner"></div>
          ) : successGoogle ? (
            "Signed In with Google!"
          ) : (
            "Sign In with Google"
          )}
        </Button>
        <p className="mt-2 text-center text-xs md:text-sm">
          Don&apos;t have an account?{" "}
          <Link href={"/registration"} className="text-[#737158]">
            Create an account
          </Link>
        </p>
      </Form>
    </div>
  );
}
