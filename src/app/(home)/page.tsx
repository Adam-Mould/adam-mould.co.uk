import { About } from "./about";
import { Hero } from "./hero";
import { Intro } from "./intro";
import { LogoCloud } from "./logo-cloud";
import { Services } from "./services";
import { Award } from "./award";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <LogoCloud />
      <Services />
      <Award />
      <About />
    </>
  );
}
