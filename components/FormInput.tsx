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
  control: Control<any>;
  name: keyof SchemaType;
  placeholder: string;
  label: string;
  type?: string;
};

export default function FormInput({
  control,
  name,
  placeholder,
  label,
  type = "text",
}: Props) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="font-monument text-lg lg:text-xl">
            {label}
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
