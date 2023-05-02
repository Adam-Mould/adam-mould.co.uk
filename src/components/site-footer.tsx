import { services, solutions, socials, about } from "~/lib/navigation";
import { LogoDark } from "~/components/logo";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Button } from "~/components/ui/button";
import { RecentPosts } from "~/components/recent-posts";

export function SiteFooter() {
  return (
    <footer
      className="bg-slate-900 pt-[10vw] text-slate-300 dark:bg-slate-700 xl:pt-32"
      aria-labelledby="footer-heading"
    >
      <div className="container">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>

        <div className="xl:flex xl:flex-nowrap">
          <div className="xl:w-80 xl:shrink-0">
            <LogoDark className="block" />

            <p className="mt-4 max-w-md text-slate-300">
              <Balancer>
                An incredibly passionate self-taught web developer, helping
                clients deliver unforgettable websites.
              </Balancer>
            </p>

            <p className="mt-6">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:adam@adam-mould.co.uk"
                className="underline-offset-2 transition-colors hover:text-white hover:underline focus-visible:text-white focus-visible:outline-none"
              >
                adam@adam-mould.co.uk
              </a>
            </p>
            <p className="mt-1">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:07957663290"
                className="underline-offset-2 transition-colors hover:text-white hover:underline focus-visible:text-white focus-visible:outline-none"
              >
                07957 663290
              </a>
            </p>

            <div className="mt-6 flex space-x-4">
              {socials.map((social) => (
                <Button
                  key={`footer-${social.title}`}
                  asChild
                  variant="ghost"
                  className="w-12 p-0 hover:bg-slate-600 focus:bg-slate-600"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{social.title}</span>
                    <social.Icon size={24} aria-hidden="true" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-6 xl:mt-0 xl:flex xl:flex-1 xl:flex-nowrap xl:gap-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)_120px]">
              <div>
                <h3 className="text-lg font-semibold text-slate-100">
                  Services
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {services.map((service, index) => (
                    <li key={`footer-service-${index}`}>
                      <Link
                        href={service.href}
                        className="underline-offset-2 transition-colors hover:text-white hover:underline focus-visible:text-white focus-visible:outline-none"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-100">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {solutions.map((solution, index) => (
                    <li key={`footer-solution-${index}`}>
                      <Link
                        href={solution.href}
                        className="underline-offset-2 transition-colors hover:text-white hover:underline focus-visible:text-white focus-visible:outline-none"
                      >
                        {solution.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-100">About</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {about.map((about, index) => (
                    <li key={`footer-about-${index}`}>
                      <Link
                        href={about.href}
                        className="underline-offset-2 transition-colors hover:text-white hover:underline focus-visible:text-white focus-visible:outline-none"
                      >
                        {about.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 xl:mt-0 xl:w-64">
              <h3 className="text-lg font-semibold text-slate-100">
                Recent Articles
              </h3>

              <div className="mt-6">
                <RecentPosts />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[5vw] border-t border-white/10 py-8 xl:mt-24">
          <p className="text-sm leading-snug text-slate-300">
            &copy; {new Date().getFullYear()} Pure Dev Ltd | Company No.
            13225295
          </p>
        </div>
      </div>
    </footer>
  );
}
