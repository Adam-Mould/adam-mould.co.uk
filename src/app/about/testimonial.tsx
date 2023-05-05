import Image from "next/image";
import shepperLogo from "~/../public/images/shepper-logo.svg";
import backgroundImage from "~/../public/images/mkcollege-testimonial-bg.jpg";

export function Testimonial() {
  return (
    <section className="container">
      <div className="relative overflow-hidden bg-slate-900 px-4 py-12 text-white shadow-xl sm:rounded-3xl md:px-8 md:py-16">
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

        <div className="relative max-w-4xl">
          <Image src={shepperLogo} alt="Shepper" className="w-32" />

          <figure>
            <blockquote className="mt-6 text-lg font-medium text-white sm:text-xl sm:leading-8">
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote>
            <figcaption className="mt-6 text-base text-white">
              <div className="font-semibold">Lindsay Forster</div>
              <div className="mt-1">CEO of Shepper</div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
