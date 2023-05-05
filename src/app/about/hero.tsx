import Balancer from "react-wrap-balancer";

export function PageHero() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold leading-7 text-primary-600">
          About Me
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          <Balancer>Hey, I&apos;m Adam</Balancer>
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          <Balancer>
            A Milton Keynes based web developer and web enthusiast, with a
            fascination and passion for all things web.
          </Balancer>
        </p>
      </div>
    </div>
  );
}
