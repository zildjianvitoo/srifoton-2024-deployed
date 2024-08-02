import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Control } from "react-hook-form";
import { competitionRegistrationScehma } from "@/lib/formSchema/competitionRegistration";
import * as z from "zod";
import { Input } from "./ui/input";

type SchemaType = z.infer<typeof competitionRegistrationScehma>;

type Props = {
  control: Control<z.infer<typeof competitionRegistrationScehma>>;
  name: keyof SchemaType;
  placeholder: string;
  type?: string;
};

export default function FormInput({
  control,
  name,
  placeholder,
  type = "text",
}: Props) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="font-monument text-lg lg:text-xl">
            Team Name
          </FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
