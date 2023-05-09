import { Hand } from "lucide-react";
import { cn } from "~/lib/utils";

const steps = [
  {
    title: "Introduction & Discovery",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nihil alias accusamus necessitatibus possimus similique eaque itaque veniam quidem neque.",
    Icon: Hand,
  },
  {
    title: "Proposal & Contract",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nihil alias accusamus necessitatibus possimus similique eaque itaque veniam quidem neque.",
    Icon: Hand,
  },
  {
    title: "The Fun Begins",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nihil alias accusamus necessitatibus possimus similique eaque itaque veniam quidem neque.",
    Icon: Hand,
  },
  {
    title: "Ready to Launch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nihil alias accusamus necessitatibus possimus similique eaque itaque veniam quidem neque.",
    Icon: Hand,
  },
  {
    title: "Aftercare & Support",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nihil alias accusamus necessitatibus possimus similique eaque itaque veniam quidem neque.",
    Icon: Hand,
  },
];

export function Timeline() {
  return (
    <section className="py-[5vw] xl:py-24">
      <div className="container relative">
        <div className="absolute left-8 block h-full w-1 -translate-x-1/2 transform bg-primary-600/20 md:left-1/2" />

        <div className="space-y-2 pl-8 md:space-y-4 md:pl-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "flex",
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              )}
            >
              <div
                className={cn(
                  "w-full md:w-1/2",
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                )}
              >
                <div className="absolute left-4 flex h-8 w-8 transform items-center justify-center rounded-full bg-primary-600 text-white md:left-1/2 md:-translate-x-1/2">
                  <step.Icon size={16} />
                </div>

                <div className="rounded-lg p-4">
                  <h3 className="flex items-center space-x-4 text-lg font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-4">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
