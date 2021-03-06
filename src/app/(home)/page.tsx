import { About } from "./about";
import { Award } from "./award";
import { LatestBlog } from "../blog";
import { CallToAction } from "./cta";
import { Hero } from "./hero";
import { Intro } from "./intro";
import { LogoCloud } from "./logo-cloud";
import { Services } from "./services";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <LogoCloud />
      <Services />
      <Award />
      <About />
      <CallToAction />
      <LatestBlog />
    </>
  );
}
