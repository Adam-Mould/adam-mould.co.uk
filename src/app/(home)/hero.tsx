import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Button } from "~/components/ui/button";

export function Hero() {
  return (
    <div className="relative isolate p-4">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="container max-w-4xl py-[10vw] xl:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl md:text-7xl">
            <Balancer>Full Stack Freelance Web Developer</Balancer>
          </h1>
          <p className="mt-6 sm:text-lg sm:leading-8">
            <Balancer>
              As a freelance web developer based in the UK, I specialize in
              delivering full-stack web development services that help
              businesses elevate their brand and achieve their digital goals.
            </Balancer>
          </p>

          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-10 md:gap-x-8">
            <Button asChild>
              <Link href="/">About Me</Link>
            </Button>

            <Button asChild variant="ghost">
              <Link href="/contact">
                Get in touch{" "}
                <ArrowRight
                  size={16}
                  className="ml-1 inline-block align-middle"
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
