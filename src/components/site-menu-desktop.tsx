import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import Image from "next/image";

// Images
import website from "~/../public/images/icons/website-development.svg";
import wordpress from "~/../public/images/icons/wordpress-development.svg";
import webApp from "~/../public/images/icons/web-app-development.svg";
import ecommerce from "~/../public/images/icons/ecommerce-development.svg";
import hosting from "~/../public/images/icons/website-hosting.svg";
import fullService from "~/../public/images/icons/full-service-development.svg";
import agency from "~/../public/images/icons/agency-partner.svg";
import outsource from "~/../public/images/icons/outsource-development.svg";
import maintenance from "~/../public/images/icons/software-maintenance.svg";

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
            <Link href="/" className={navigationMenuTriggerStyle()}>
              About
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid gap-4 p-4 md:grid-cols-2">
              <li>
                <SiteMenuItem
                  title="Website Development"
                  href="/website-development"
                  icon={website}
                  description="Transform your online presence with the help of a professional. Complete website development from start to finish, for sites of all sizes and complexity."
                />
              </li>
              <li>
                <SiteMenuItem
                  title="WordPress Development"
                  href="/wordpress-development"
                  icon={wordpress}
                  description="Leverage the worlds most popular content management system. Bespoke WordPress development for themes, plugins and eCommerce sites."
                />
              </li>
              <li>
                <SiteMenuItem
                  title="Web App Development"
                  href="/web-app-development"
                  icon={webApp}
                  description="Progressive web applications or native mobile apps built using React Native, launch your next web-based application development with confidence."
                />
              </li>
              <li>
                <SiteMenuItem
                  title="eCommerce Development"
                  href="/ecommerce-development"
                  icon={ecommerce}
                  description="Increase online sales and hit conversion targets with a website to compliment your product. Harness my experience to help grow your business."
                />
              </li>
              <li>
                <SiteMenuItem
                  title="Website Architect"
                  href="/website-architect"
                  icon={website}
                  description="Professional website architecture and consultancy services. Steer the direction of your project with the help of a full-stack engineer."
                />
              </li>
              <li>
                <SiteMenuItem
                  title="Website Hosting"
                  href="/website-hosting"
                  icon={hosting}
                  description="Take the hassle out of website hosting. Highly performant cloud hosting with security at the forefront, giving your website the hosting it deserves."
                />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid gap-4 p-4 md:grid-cols-2">
              <li>
                <SiteMenuItem
                  title="Full-Service Development"
                  href="/full-service-development"
                  icon={fullService}
                  description="Whether you're a startup or an established business, I can help you build your product from the ground up."
                />
              </li>
              <li>
                <SiteMenuItem
                  title="Marketing Agency Partner"
                  href="/agency-partner"
                  icon={agency}
                  description="I partner with agencies to provide software services behind the scenes, helping you cater for your client’s digital needs."
                />
              </li>
              <li>
                <SiteMenuItem
                  title="Outsource Development"
                  href="/outsource-development"
                  icon={outsource}
                  description="Your in-house design team provides me with the designs, and I will transform them into working code."
                />
              </li>
              <li>
                <SiteMenuItem
                  title="Software Maintenance"
                  href="/software-maintenance"
                  icon={maintenance}
                  description="Entrust the technical maintenance of your existing product. From security patches to new features, I can be there to help."
                />
              </li>
            </ul>
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
