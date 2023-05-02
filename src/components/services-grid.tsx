import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Images
import website from "~/../public/images/icons/website-development.svg";
import wordpress from "~/../public/images/icons/wordpress-development.svg";
import webApp from "~/../public/images/icons/web-app-development.svg";
import ecommerce from "~/../public/images/icons/ecommerce-development.svg";
import hosting from "~/../public/images/icons/website-hosting.svg";

const services = [
  {
    title: "Website Development",
    href: "/website-development",
    icon: website,
    description:
      "Transform your online presence with the help of a professional. Complete website development from start to finish, for sites of all sizes and complexity.",
  },
  {
    title: "WordPress Development",
    href: "/wordpress-development",
    icon: wordpress,
    description:
      "Leverage the worlds most popular content management system. Bespoke WordPress development for themes, plugins and eCommerce sites.",
  },
  {
    title: "Web App Development",
    href: "/web-app-development",
    icon: webApp,
    description:
      "Progressive web applications or native mobile apps built using React Native, launch your next web-based application development with confidence.",
  },
  {
    title: "eCommerce Development",
    href: "/ecommerce-development",
    icon: ecommerce,
    description:
      "Increase online sales and hit conversion targets with a website to compliment your product. Harness my experience to help grow your business.",
  },
  {
    title: "Website Architect",
    href: "/website-architect",
    icon: website,
    description:
      "Professional website architecture and consultancy services. Steer the direction of your project with the help of a full-stack engineer.",
  },
  {
    title: "Website Hosting",
    href: "/website-hosting",
    icon: hosting,
    description:
      "Take the hassle out of website hosting. Highly performant cloud hosting with security at the forefront, giving your website the hosting it deserves.",
  },
];

export function ServicesGrid() {
  return (
    <ul className="grid gap-4 p-4 md:grid-cols-2">
      {services.map((service) => (
        <li key={uuidv4()}>
          <Link
            href={service.href}
            className="btn flex h-full flex-col rounded-lg p-4 outline-none transition-colors"
          >
            <h3 className="flex items-center space-x-4 text-lg font-bold">
              <Image
                src={service.icon}
                alt={service.title}
                aria-hidden
                className="h-10 w-10"
              />
              <span>{service.title}</span>
            </h3>

            <p className="mt-2">{service.description}</p>

            <div className="mt-auto">
              <div className="mt-4 inline-flex items-center space-x-2 border-b border-primary-600 pb-1 text-sm font-bold">
                <span>Find Out More</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
