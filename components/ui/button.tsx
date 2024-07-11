import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 ",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-text-200 bg-primary-100 hover:bg-background hover:text-primary-100 font-monument",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        srifoton:
          "bg-primary-100 text-text-300 hover:outline hover:outline-primary-100 hover:text-primary-100 hover:bg-background",
        srifoton2:
          "bg-primary-100 text-text-300 hover:outline hover:outline-primary-100 hover:text-primary-100 hover:bg-background font-monument",
        outline2:
          "border border-text-200 border-4 bg-primary-100 hover:bg-background hover:text-primary-100 font-monument",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: `md:py-[.2rem] md:px-2 md:text-xs
             lg:py-[.4rem] lg:px-4 lg:text-sm
             xl:py-[.6rem] xl:px-6 xl:text-md`,
        lg: "h-10 px-6",
        icon: "h-10 w-10",
        default2: "px-[35px] py-[25px] text-sm md:text-lg xl:text-xl w-fit",
        full: "px-[35px] py-[25px] w-full"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
