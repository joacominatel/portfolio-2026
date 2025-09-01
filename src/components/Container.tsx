import React from "react";
import { cn } from "../utils/cn";

export const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("max-w-[52rem] mx-auto px-6 sm:px-8", className)} {...props} />
);
