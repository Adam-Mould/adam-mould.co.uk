import { Home, Scissors, Smartphone } from "lucide-react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

import demo from "~/../public/images/demo-screenshot.png";

export function Intro() {
  return (
    <div className="overflow-hidden py-[10vw] xl:py-32">
      <div className="container">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
                <Balancer>What I Do Best</Balancer>
              </h2>

              <p className="mt-4">
                With a portfolio of websites spanning years, I specialize in
                website development for a diverse clientele ranging from small
                businesses to large corporations.
              </p>

              <p className="mt-4">
                Partner with me for your next project and receive a bespoke
                website tailored to your exact requirements, with no outsourcing
                or compromise on quality.
              </p>

              <dl className="mt-6 space-y-6 leading-7 md:mt-8 md:space-y-8">
                <div className="relative pl-8">
                  <dt className="inline font-semibold text-slate-900 dark:text-slate-100">
                    <Scissors
                      className="absolute left-1 top-1 h-5 w-5 text-primary-600"
                      aria-hidden="true"
                    />
                    Cutting-Edge
                  </dt>{" "}
                  <dd className="inline">
                    Forever learning new technologies to offer my clients the
                    best possible solutions.
                  </dd>
                </div>

                <div className="relative pl-8">
                  <dt className="inline font-semibold text-slate-900 dark:text-slate-100">
                    <Smartphone
                      className="absolute left-1 top-1 h-5 w-5 text-primary-600"
                      aria-hidden="true"
                    />
                    Fully Responsive
                  </dt>{" "}
                  <dd className="inline">
                    Craft a stunning and responsive website optimized for all
                    devices to reach a broader audience and future-proof your
                    site.
                  </dd>
                </div>

                <div className="relative pl-8">
                  <dt className="inline font-semibold text-slate-900 dark:text-slate-100">
                    <Home
                      className="absolute left-1 top-1 h-5 w-5 text-primary-600"
                      aria-hidden="true"
                    />
                    Never Outsourced
                  </dt>{" "}
                  <dd className="inline">
                    I work with you directly, from start to finish. No
                    middlemen, no outsourcing.
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
