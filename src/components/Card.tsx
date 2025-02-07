import { cva, type VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

import { cn } from "@/utilits";

const cardVariants = cva("rounded-xl transition-all bg-white", {
  variants: {
    variant: {
      default: "p-4",
      outlined: "border-2 border-gray-300 p-4",
      shadow: "shadow-lg p-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface CardProps extends VariantProps<typeof cardVariants> {
  children: ReactNode;
  className?: string;
}

const CardRoot = ({ children, variant, className }: CardProps) => {
  return (
    <div className={cn(cardVariants({ variant }), className)}>{children}</div>
  );
};

const CardHeader = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("font-semibold text-lg mb-2", className)}>
      {children}
    </div>
  );
};

const CardBody = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={cn("text-gray-600", className)}>{children}</div>;
};

const CardFooter = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("mt-4 flex justify-end", className)}>{children}</div>
  );
};

export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
};
