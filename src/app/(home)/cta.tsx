import Balancer from "react-wrap-balancer";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-900 dark:bg-white/10">
      <div className="container max-w-2xl py-[5vw] text-center xl:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          <Balancer>Get in Touch and Let&apos;s Discuss Your Next Project</Balancer>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-200">
          <Balancer>
            Drop me an email, or give me a call, and let&apos;s discuss how I can
            help with your upcoming development requirements.
          </Balancer>
        </p>

        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-10 md:gap-x-8">
          <Button
            asChild
            size="lg"
            className="bg-white text-slate-900 hover:bg-white focus-visible:bg-white"
          >
            <Link href="/contact">Get Started</Link>
          </Button>

          <Button asChild variant="ghost" className="text-white" size="lg">
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

      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/3 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] dark:hidden"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="0.75"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#ff80b5" />
            <stop offset={1} stopColor="#9089fc" />
          </radialGradient>
        </defs>
      </svg>
    </section>
  );
}
