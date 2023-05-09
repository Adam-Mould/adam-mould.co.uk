import Balancer from "react-wrap-balancer";
import { Button } from "~/components/ui/button";
import Link from "next/link";

export function SiteFooterCTA() {
  return (
    <section className="relative isolate py-[5vw] text-center xl:py-24">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="container">
        <header className="container mx-auto max-w-3xl">
          <h4 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            <Balancer>
              Get in Touch Today and Let&apos;s Discuss Your Next Project
            </Balancer>
          </h4>
          <p className="mx-auto mt-4 max-w-xl sm:text-lg sm:leading-8">
            <Balancer>
              Drop me an email, or give me a call, and let&apos;s discuss how I
              can help with your upcoming development requirements.
            </Balancer>
          </p>
        </header>

        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
