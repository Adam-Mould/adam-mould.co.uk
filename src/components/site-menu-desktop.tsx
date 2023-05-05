import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ServicesGrid } from "~/components/services-grid";
import { SolutionsGrid } from "~/components/solutions-grid";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";

export function SiteMenuDesktop() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/" className={navigationMenuTriggerStyle()}>
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/about" className={navigationMenuTriggerStyle()}>
              About
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>

          <NavigationMenuContent>
            <ServicesGrid />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>

          <NavigationMenuContent>
            <SolutionsGrid />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/" className={navigationMenuTriggerStyle()}>
              Work
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/blog" className={navigationMenuTriggerStyle()}>
              Blog
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

type SiteMenuItemProps = {
  title: string;
  href: string;
  description: string;
  icon: string;
};

function SiteMenuItem({ href, title, description, icon }: SiteMenuItemProps) {
  return (
    <Link
      href={href}
      className="flex h-full flex-col rounded-lg p-4 outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700"
    >
      <h3 className="flex items-center space-x-4 text-lg font-bold">
        <Image src={icon} alt={title} aria-hidden className="h-10 w-10" />
        <span>{title}</span>
      </h3>

      <p className="mt-2">{description}</p>

      <div className="mt-auto">
        <div className="mt-4 inline-flex items-center space-x-2 border-b border-primary-600 pb-1 text-sm font-bold">
          <span>Find Out More</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}
