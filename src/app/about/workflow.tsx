import { Monitor } from "lucide-react";
import Balancer from "react-wrap-balancer";

const features = [
  {
    name: "Straight Talking",
    description:
      "Being able to effectively communicate with clients is crucial in my position. I take the time to understand a client's requirements, and articulate possible software solutions in simple terms.",
    icon: Monitor,
  },
  {
    name: "Bespoke Development",
    description:
      "If you're searching for a developer that can take an idea and convert it into a high-quality piece of software then you're in the right place. Everything I code is bespoke, and tailored to the needs of my clients. My wealth of experience and knowledge also allows me to offer you the correct solution, not just the solution I could build.",
    icon: Monitor,
  },
  {
    name: "Blazing Fast Websites",
    description:
      "The performance of a website is something that is often overlooked, or deprioritized in favour of elegant design. As a numbers guy I obsess over the speed metrics of websites, to the point where I almost gamify the process. If the site is slow, I'm not finished!",
    icon: Monitor,
  },
  {
    name: "Remote Working",
    description:
      "I'm a huge advocate of remote working, especially when it comes to creative roles such as developers. By removing the everyday distractions of open-office environments, I'm able to focus deeply on the task at hand. This results in a better end result for my clients.",
    icon: Monitor,
  },
  {
    name: "Helping Others",
    description:
      "I spent years working for agencies, and in-house companies, as a senior and lead developer. During that time I've helped dozens of developers improve their skillsets by sharing my expertise. I now offer consultation services where I help businesses grow their internal development teams.",
    icon: Monitor,
  },
  {
    name: "Security is Paramount",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: Monitor,
  },
];

export function Workflow() {
  return (
    <div className="relative py-[10vw] xl:py-32">
      <div
        className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-60"
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

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base font-semibold leading-7 text-primary-600">
            Digging Deeper
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl md:text-5xl">
            <Balancer>My Development Ethos</Balancer>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>

        <div className="mt-8 md:mt-16">
          <dl className="grid  grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-16rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
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
    </div>
  );
}
