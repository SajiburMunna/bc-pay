"use client";

import React, { PropsWithChildren } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/utilits";

const buttonVariants = cva(
  "rounded-[30px] font-semibold transition-all duration-200 ease-in-out py-[8.5px] px-[15px] h-11 flex gap-3 items-center justify-center select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white text-sm font-medium leading-[21px] dark:hover:bg-primary-dark active:scale-95",
        secondary:
          "dark:bg-[#3B3B3B] bg-[#E5E5E4] dark:hover:bg-[#2E2E2E] hover:bg-[#D1D1D0] dark:text-white text-black text-sm font-medium leading-[21px] active:scale-95",
        danger:
          "bg-red-500 text-white text-sm font-medium leading-[21px] hover:bg-red-600 active:scale-95",
      },
      size: {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);
interface ButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  type?: "submit" | "reset" | "button";
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  variant,
  size,
  children,
  onClick,
  className,
  type = "button",
  loading = false,
  disabled = false,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      onClick={onClick}
      className={cn(buttonVariants({ variant, size }), className, {
        "cursor-default opacity-50": loading || disabled,
      })}
      type={type}
      disabled={loading || disabled}
    >
      <div className="flex items-center">
        {loading && <span className="loader mr-2"></span>}
        <div className="flex items-center gap-3">{children}</div>
      </div>
    </button>
  );
};

export default Button;
