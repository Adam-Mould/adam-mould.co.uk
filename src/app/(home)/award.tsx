import Image from "next/image";
import backgroundImage from "~/../public/images/mkcollege-testimonial-bg.jpg";
import feAwardsLogo from "~/../public/images/fe-awards-2021-gold.png";

export function Award() {
  return (
    <div className="container">
      <div className="relative overflow-hidden bg-slate-900 px-4 py-12 text-white shadow-xl sm:rounded-3xl md:px-8">
        <Image
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0"
        />

        <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
        <div
          className="absolute -left-80 -top-56 transform-gpu blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl flex-wrap items-center gap-8 sm:flex md:flex-nowrap">
          <div className="mx-auto w-24 flex-initial shrink-0 sm:m-0 sm:w-40">
            <Image
              src={feAwardsLogo}
              alt=""
              className="rounded-lg bg-white p-1"
            />
          </div>

          <figure className="mt-4 flex-1 sm:mt-0">
            <h4 className="text-xl font-bold tracking-tight md:text-2xl">
              Website Development Gold Award
            </h4>

            <blockquote className="mt-2 text-lg font-medium md:text-xl md:leading-8">
              <p>
                {
                  "I feel the submission is one of very high quality, having met all of the project aims and objectives. The submission was concise yet comprehensive, taking into account further learnings and areas for development. I have no immediate comments to improve this submission and, therefore, recommend it for a Gold award."
                }
              </p>
            </blockquote>
            <figcaption className="mt-6 text-base text-white">
              <div className="font-semibold">Milton Keynes College</div>
              <div className="mt-1">
                <a
                  href="https://youtu.be/Nxn4_yzLl3I?t=415"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  FE First Awards 2021
                </a>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
