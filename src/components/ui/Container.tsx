import type { FC, HTMLAttributes } from "react";

import { cn } from "@/utils/cn";

export const Container: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div className={cn("max-w-208 mx-auto px-6 sm:px-8", className)} {...props} />
);

export default Container;
