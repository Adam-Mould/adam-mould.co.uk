import Balancer from "react-wrap-balancer";
import { Button } from "~/components/ui/button";
import Link from "next/link";

export function CallToAction({
  title,
  description,
  children,
}: React.PropsWithChildren<{ title: string; description: string }>) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-900 py-[5vw] text-center dark:bg-white/10 xl:py-24">
      <header className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          <Balancer>{title}</Balancer>
        </h2>
        <p className="mt-6 text-lg leading-8 text-slate-200">
          <Balancer>{description}</Balancer>
        </p>
      </header>

      {children}

      <div className="mt-8">
        <Button
          asChild
          size="lg"
          className="bg-white text-slate-900 hover:bg-white focus-visible:bg-white"
        >
          <Link href="/contact">Get in Touch</Link>
        </Button>
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
