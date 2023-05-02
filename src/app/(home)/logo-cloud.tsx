import Image from "next/image";

import uocLogo from "~/../public/images/cambridge-university.svg";
import uocLogoDark from "~/../public/images/cambridge-university-whiteout.svg";
import mkcLogo from "~/../public/images/mkcollege.svg";
import mkcLogoDark from "~/../public/images/mkcollege-whiteout.svg";
import ccLogo from "~/../public/images/choices-choices.svg";
import ccLogoDark from "~/../public/images/choices-choices-whiteout.svg";
import iotLogo from "~/../public/images/southcentraliot.png";
import iotLogoDark from "~/../public/images/southcentraliot-whiteout.png";
import bcaLogo from "~/../public/images/bedford-creative-arts.png";
import bcaLogoDark from "~/../public/images/bedford-creative-arts-whiteout.png";

const logos = [
  {
    alt: "University of Cambridge",
    src: uocLogo,
    srcDark: uocLogoDark,
  },
  {
    alt: "Bedford Creative Arts",
    src: bcaLogo,
    srcDark: bcaLogoDark,
  },
  {
    alt: "Milton Keynes College",
    src: mkcLogo,
    srcDark: mkcLogoDark,
  },
  {
    alt: "South Central IoT",
    src: iotLogo,
    srcDark: iotLogoDark,
  },
  {
    alt: "Choices Choices",
    src: ccLogo,
    srcDark: ccLogoDark,
  },
];

export function LogoCloud() {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <h2 className="text-center text-lg font-bold text-slate-900 dark:text-slate-100 sm:text-xl">
          Some of the clients I work with...
        </h2>

        <div className="mx-auto mt-4 flex flex-wrap items-center justify-center md:mt-8">
          {logos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="flex h-20 w-1/2 items-center justify-center p-4 sm:w-1/3 md:w-1/5"
            >
              <Image
                className="block h-full w-full object-contain dark:hidden"
                src={logo.src}
                alt={logo.alt}
              />
              <Image
                className="hidden h-full w-full object-contain dark:block"
                src={logo.srcDark}
                alt={logo.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
