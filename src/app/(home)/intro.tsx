import { Award, PackageOpen } from "lucide-react";
import Balancer from "react-wrap-balancer";
import Image from "next/image";

import demo from "~/../public/images/demo-screenshot.png";

export function Intro() {
  return (
    <div className="overflow-hidden py-[10vw] xl:py-32">
      <div className="container">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-primary-600">
                Let&apos;s Build Websites
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
                <Balancer>Software Development, Made Simple.</Balancer>
              </h2>

              <p className="mt-4">
                I am an independant freelance web developer who specialises in
                helping individuals and businesses transform their online
                presence.
              </p>

              <p className="mt-4">
                Based in Milton Keynes, England, I work with clients across the
                world providing expert advice and digital services to meet their
                software requirements.
              </p>

              <dl className="mt-8 space-y-8 leading-7">
                <div className="relative pl-10">
                  <dt className="inline font-semibold text-slate-900 dark:text-slate-100">
                    <Award
                      className="absolute left-1 top-1 h-5 w-5 text-primary-600"
                      aria-hidden="true"
                    />
                    Award-Winning Developer.
                  </dt>{" "}
                  <dd className="inline">
                    With over 10 years of experience in the industry, I bring a
                    wealth of expertise and a proven track record of delivering
                    exceptional software solutions to clients across various
                    industries.
                  </dd>
                </div>

                <div className="relative pl-10">
                  <dt className="inline font-semibold text-slate-900 dark:text-slate-100">
                    <PackageOpen
                      className="absolute left-1 top-1 h-5 w-5 text-primary-600"
                      aria-hidden="true"
                    />
                    Full-Service Development.
                  </dt>{" "}
                  <dd className="inline">
                    I can take care of every aspect of the development process,
                    from planning and development to testing, deployment, and
                    ongoing maintenance and support.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <Image
            src={demo}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
