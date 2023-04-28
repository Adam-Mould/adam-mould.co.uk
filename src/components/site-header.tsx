"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "~/components/logo";
import { SiteMenuDesktop } from "~/components/site-menu-desktop";
import { SiteMenuMobile } from "~/components/site-menu-mobile";
import { ThemeSwitch } from "./theme-switch";
import { Button } from "./ui/button";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4">
      <div className="container relative z-10 flex items-center justify-between gap-4 lg:gap-2">
        <div className="flex-1 lg:hidden">
          <SiteMenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <div className="flex-auto text-center lg:flex-1 lg:text-left">
          <Logo />
        </div>

        <div className="hidden lg:block">
          <SiteMenuDesktop />
        </div>

        <div className="flex flex-1 justify-end gap-4">
          <Button asChild className="hidden lg:inline-flex">
            <Link href="/">Let&apos;s Talk</Link>
          </Button>

          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
