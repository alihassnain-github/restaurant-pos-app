import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

type UnderlineVariant = "none" | "hover" | "always";

interface NextLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  underline?: UnderlineVariant;
}

export default function NextLink({
  children,
  className,
  underline = "hover",
  ...linkProps
}: NextLinkProps) {
  return (
    <Link
      {...linkProps}
      className={clsx(
        "inline-flex items-center",
        underline === "none" && "no-underline",
        underline === "hover" && "no-underline hover:underline",
        underline === "always" && "underline",
        className
      )}
    >
      {children}
    </Link>
  );
}
