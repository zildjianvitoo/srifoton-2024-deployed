"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/FormInput";
import { PasswordField } from "../Dashboard/PasswordField";
import "@/lib/utils/zodCustomError";
import Image from "next/image";
import Link from "next/link";
import {
  registerUser,
  signInWithGoogle
} from "@/lib/network/users/userQueries";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z
  .object({
    name: z.string().min(1).max(50),
    email: z.string().email(),
    password: z.string({
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
    password1: z.string().min(1).max(20),
  })
  .refine(({ password, password1 }) => password === password1, {
    path: ["password1"],
    message: "Password didn't match.",
  });

export default function FormRegistration() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password1: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setSuccess(false);
    try {
      const userCreated = await registerUser(
        {
          id: "",
          name: values.name,
          college: "",
          student_id: "",
          phone_number: "",
          gender: "",
          instagram: "",
        },
        values.email,
        values.password
      );
      if (userCreated) {
        setSuccess(true);
        toast.success("Akun berhasil dibuat! Silakan cek email Anda.");
        router.push("/login"); // Redirect to login page
      } else {
        toast.error("Gagal membuat akun. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error registering user: ", error);
      toast.error("Terjadi kesalahan saat membuat akun.");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    setLoading(true);
    try {
      const accountSignedIn = await signInWithGoogle();
      if (accountSignedIn) {
        toast.success("Berhasil masuk dengan akun Google!");
      } else {
        toast.error("Gagal masuk dengan akun Google. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error signing in with Google: ", error);
      toast.error("Terjadi kesalahan saat masuk dengan Google.");
    } finally {
      setLoading(false);
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
          title="Confirm Password"
          name="password1"
          placeholder="Konfirmasi kata sandi"
        />
        <div className="flex flex-col space-y-2">
          <Button
            type="submit"
            className="h-12 w-full bg-background/90 font-monument text-xs text-white hover:bg-background disabled:opacity-60 md:text-lg"
            disabled={loading}
          >
            {loading ? (
              <div className="spinner"></div>
            ) : success ? (
              "Created, Check Email!"
            ) : (
              "Create Account"
            )}
          </Button>
          <p className="text-center text-xs md:text-sm">
            Or use your google account
          </p>
          <Button
            type="button"

            className="h-12 w-full bg-transparent font-monument text-xs text-transparent/90 hover:bg-background disabled:opacity-60 md:text-lg"

            variant={"outline"}
            onClick={handleGoogleSignIn}
            disabled={loading}
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
            Already have an account?{" "}
            <Link href={"/login"} className="text-[#737158]">
              Log In
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
}
