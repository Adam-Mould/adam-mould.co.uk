import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { Button } from "~/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

import me from "~/../public/images/adam-mould.jpg";

export function About() {
  return (
    <section className="relative py-[10vw] xl:py-32">
      <div className="container">
        <header>
          <p className="text-base font-semibold leading-7 text-primary-600">
            Behind the Screens
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            <Balancer>Hey, I&apos;m Adam Mould</Balancer>
          </h2>
        </header>

        <div className="mt-6 md:flex md:flex-nowrap md:gap-x-8">
          <div className="flex-1">
            <Image
              src={me}
              alt="Adam Mould"
              className="w-full max-w-md rounded-2xl"
            />

            <p className="mt-4">
              I&apos;m a self-proclaimed web enthusiast, having spent the last
              decade establishing myself in the web development industry.
            </p>
            <p className="mt-4">
              Having worked in a number of marketing agencies across the UK for
              multiple years, and also spent a couple of years working for a
              billion pound eCommerce company, I now work as a freelance web
              developer, providing my services to clients across the world.
            </p>
          </div>

          <div className="mt-6 flex-1 md:mt-0">
            <Timeline />

            <Button asChild className="mt-6">
              <Link href="/about">Find Out More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const timeline = [
  {
    date: "Aug 2018 - Present",
    title: "Full Stack Freelance Web Developer",
    description: [
      "I spend my days working with a plethora of clients in different industries, understanding their digital requirements and developing custom software. My tasks vary from developing React applications, to bespoke WordPress themes, to custom Laravel websites (and everything in between). Databases, hosting, websites, web apps, CRMs, emails, you name it and I probably have experience doing it!",
    ],
  },
  {
    date: "Jan 2017 - Aug 2018",
    title: "Senior Front End Web Developer",
    company: "Office Depot",
    description: [
      "Collaborating as part of an agile team developing the global eCommerce brand Viking Direct. My time at Office Depot was spent developing the view layer of the website, choosing a scalable frontend tech stack to meet the website's requirements. Continuous feature delivery in a scrum team involving code reviews, unit testing, and presenting to stakeholders.",
      "Alongside my daily responsibilities as an engineer I was also part of the hiring process for new developers, interviewing for both full-time and contract roles.",
    ],
  },
  {
    date: "July 2015 - Jan 2017",
    title: "Senior Front End Web Developer",
    company: "Xigen Ltd",
    description: [
      "Working for a large digital agency, my role at Xigen involved driving forward the team to ensure we were producing quality work with modern technologies. I built a number of websites whilst in this role, including a large global eCommerce site, and a number of bespoke web applications.",
      "I worked closely with a sub-team of three developers, specialising in CMS solutions and web applications. Working on WordPress sites, as well as developing web applications using React.",
    ],
  },
  {
    date: "Jan 2014 - July 2015",
    title: "Lead Web Developer",
    company: "Soapbox Creative Marketing Limited",
    description: [
      "Managing the entire development process of all projects within the design agency, my role at Soapbox was arguably the most challenging and rewarding of my career. My responsibilities included maintaining existing sites, as well as developing new sites and web applications in collaboration with designers. To cater for client requirements, my technical knowledge became more full-stack, enabling me to manage servers, databases, backend and frontend codebases.",
      "I also became a client-facing developer, representing the company from a technical standpoint in front of clients, and potential clients, which allowed me to further understand the digital needs of the client.",
    ],
  },
  {
    date: "Jan 2010 - Jan 2014",
    title: "Freelance WordPress Developer",
    description: [
      "I started my career as a freelance WordPress developer, after I self-taught myself the basics of HTML, CSS, JavaScript and PHP. I spent most of my time developing premium WordPress themes which were sold on ThemeForest and Mojo Marketplace.",
    ],
  },
];

function Timeline() {
  return (
    <Accordion
      asChild
      type="multiple"
      className="relative border-l border-slate-200 dark:border-slate-700"
      defaultValue={["timeline-0"]}
    >
      <ol>
        {timeline.map((item, index) => (
          <AccordionItem
            asChild
            key={`timeline-${index}`}
            value={`timeline-${index}`}
            className="mb-4 ml-4 border-0"
          >
            <li>
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-slate-200 dark:border-slate-900 dark:bg-slate-700" />

              <AccordionTrigger className="p-0 text-left hover:no-underline">
                <div>
                  <time className="mb-1 text-sm font-normal leading-none text-slate-500 dark:text-slate-300">
                    {item.date}
                  </time>

                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
                    {item.title}
                  </h3>

                  {item.company && (
                    <p className="font-medium text-slate-500 dark:text-slate-300">
                      {item.company}
                    </p>
                  )}
                </div>
              </AccordionTrigger>

              <AccordionContent className="mt-1">
                <div className="space-y-4">
                  {item.description.map((desc) => (
                    <p key={uuidv4()}>{desc}</p>
                  ))}
                </div>
              </AccordionContent>
            </li>
          </AccordionItem>
        ))}
      </ol>
    </Accordion>
  );
}
