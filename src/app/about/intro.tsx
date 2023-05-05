import Balancer from "react-wrap-balancer";
import me from "~/../public/images/adam-mould.jpg";
import Image from "next/image";

export function Intro() {
  return (
    <section className="pb-[10vw] xl:pb-32">
      <div className="container">
        <div className="flex flex-col gap-x-8 lg:flex-row">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              <Balancer>A Little About Me</Balancer>
            </h2>

            <p className="text-lg md:text-xl">
              Over the past decade I have worked for a number of design
              agencies, helping them deliver amazing websites for clients from a
              wide variety of industries.
            </p>

            <p>
              In 2018 I made the decision to become a full-time freelance
              developer, working with clients who share an interest in high
              quality websties built with modern programming languages.
            </p>

            <p>
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit. Faucibus commodo massa rhoncus, volutpat.
              Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
              sed turpis id.
            </p>
          </div>

          <div className="flex-1 mt-8 lg:mt-0">
            <Image
              src={me}
              alt="Adam Mould"
              className="mx-auto w-full max-w-lg rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
