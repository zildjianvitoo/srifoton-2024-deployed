import React, { ChangeEvent, forwardRef, useRef, useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Control } from "react-hook-form";
import { Input } from "./ui/input";
import Image from "next/image";
import { ImagePlus } from "lucide-react";

type Props = {
  control: Control<any>;
  name: string;
  label: string;
};

export default function FormFile({ control, name, label }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>,
    onChange: (event: any) => void,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
    onChange(file);
  };

  const handleImageClick = () => {
    if (inputRef && typeof inputRef !== "function" && inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { value, onChange, ...field } }) => (
        <FormItem>
          <FormLabel className="font-monument text-lg lg:text-xl">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              className="hidden"
              type="file"
              {...field}
              ref={inputRef}
              onChange={(e) => handleFileChange(e, onChange)}
              accept="image/jpeg,image/jpg,image/png,image/webp"
            />
          </FormControl>
          <div
            className="relative flex h-36 cursor-pointer items-center justify-center gap-2 border border-shadow-200 font-poppins text-shadow-200"
            onClick={handleImageClick}
          >
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt="Payment Proof"
                className="h-full object-contain"
                fill
              />
            ) : (
              <>
                <ImagePlus size={22} />
                <p className="text-base">Upload your file here</p>
              </>
            )}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
