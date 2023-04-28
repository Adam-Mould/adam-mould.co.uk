import Link from "next/link";
import Image from "next/image";

import logoDefault from "~/../public/images/adam-mould-logo.svg";
import logoDark from "~/../public/images/adam-mould-logo-dark.svg";

export function Logo() {
  return (
    <Link href="/" className="inline-block align-middle">
      <Image
        src={logoDefault}
        alt="Adam Mould - Freelance Developer"
        className="w-52 dark:hidden"
        width={208}
        height={62}
        priority
      />
      <Image
        src={logoDark}
        alt="Adam Mould - Freelance Developer"
        className="hidden w-52 dark:block"
        width={208}
        height={62}
        priority
      />
    </Link>
  );
}
