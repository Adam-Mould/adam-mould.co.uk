import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { CallToAction } from "~/components/call-to-action";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { cn } from "~/lib/utils";

import css from "~/../public/images/logos/css.svg";
import firebase from "~/../public/images/logos/firebase.svg";
import gatsby from "~/../public/images/logos/gatsby.svg";
import html from "~/../public/images/logos/html.svg";
import laravel from "~/../public/images/logos/laravel.svg";
import netlify from "~/../public/images/logos/netlify.svg";
import nextjs from "~/../public/images/logos/nextjs.svg";
import node from "~/../public/images/logos/node.svg";
import php from "~/../public/images/logos/php.svg";
import postgres from "~/../public/images/logos/postgres.svg";
import react from "~/../public/images/logos/react.svg";
import remix from "~/../public/images/logos/remix.svg";
import sass from "~/../public/images/logos/sass.svg";
import supabase from "~/../public/images/logos/supabase.svg";
import t3 from "~/../public/images/logos/t3.svg";
import tailwind from "~/../public/images/logos/tailwind.svg";
import turborepo from "~/../public/images/logos/turborepo.svg";
import typescript from "~/../public/images/logos/typescript.svg";
import vercel from "~/../public/images/logos/vercel.svg";
import wordpress from "~/../public/images/logos/wordpress.png";

const logos = [
  { src: react, alt: "React", className: "w-1/2" },
  { src: nextjs, alt: "Next.js" },
  { src: vercel, alt: "Vercel" },
  { src: t3, alt: "T3 Stack", className: "w-1/2" },
  { src: remix, alt: "Remix" },
  { src: supabase, alt: "Supabase" },
  { src: tailwind, alt: "Tailwind" },
  { src: turborepo, alt: "Turborepo" },
  { src: typescript, alt: "Typescript", className: "w-1/2" },
  { src: gatsby, alt: "Gatsby" },
  { src: firebase, alt: "Firebase" },
  { src: netlify, alt: "Netlify CMS" },
  { src: node, alt: "Node", className: "w-3/4" },
  { src: php, alt: "PHP", className: "w-3/4" },
  { src: wordpress, alt: "WordPress" },
  { src: laravel, alt: "Laravel", className: "w-1/2" },
  { src: postgres, alt: "Postgres", className: "w-1/2" },
  { src: sass, alt: "Sass", className: "w-3/4" },
  { src: html, alt: "HTML", className: "w-1/2" },
  { src: css, alt: "CSS", className: "w-1/2" },
];

export function Technologies() {
  return (
    <CallToAction
      title="An Extensive Technology Stack"
      description="Leverage my breath of experience and knowledge of modern programming languages to build your next project."
    >
      <TooltipProvider delayDuration={200}>
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] items-center gap-8 px-4 lg:max-w-[1600px]">
          {logos.map(({ src, alt, className = "" }) => (
            <Tooltip key={uuidv4()}>
              <TooltipTrigger asChild>
                <div className="flex aspect-video items-center justify-center">
                  <Image
                    src={src}
                    alt={alt}
                    className={cn("w-full object-contain", className)}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{alt}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </CallToAction>
  );
}
