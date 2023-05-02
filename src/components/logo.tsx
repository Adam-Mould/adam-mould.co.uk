import Image, { ImageProps } from "next/image";
import Link from "next/link";

import logoDark from "~/../public/images/adam-mould-logo-dark.svg";
import logoLight from "~/../public/images/adam-mould-logo.svg";
import { cn } from "~/lib/utils";

export function Logo() {
  return (
    <Link href="/" className="inline-block align-middle">
      <LogoLight />
      <LogoDark />
    </Link>
  );
}

export function LogoLight({
  className,
  width = 208,
  height = 62,
  ...props
}: Omit<ImageProps, "src" | "alt">) {
  return (
    <Image
      {...props}
      src={logoLight}
      alt="Adam Mould - Freelance Developer"
      className={cn("w-52 dark:hidden", className)}
      width={width}
      height={height}
      priority
    />
  );
}

export function LogoDark({
  className,
  width = 208,
  height = 62,
  ...props
}: Omit<ImageProps, "src" | "alt">) {
  return (
    <Image
      {...props}
      src={logoDark}
      alt="Adam Mould - Freelance Developer"
      className={cn("hidden w-52 dark:block", className)}
      width={width}
      height={height}
      priority
    />
  );
}
