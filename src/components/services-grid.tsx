import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services } from "~/lib/navigation";

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
