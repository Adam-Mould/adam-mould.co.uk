import { PageHero } from "~/components/page-hero";
import { LatestBlog } from "../blog";
import { Intro } from "./intro";
import { Technologies } from "./technologies";
import { Testimonial } from "./testimonial";
import { Workflow } from "./workflow";

export default function About() {
  return (
    <>
      <PageHero
        subTitle="About Me"
        title="Hey, I'm Adam"
        description="A Milton Keynes based web developer and web enthusiast, with a fascination and passion for all things web."
      />

      <Intro />
      <Technologies />
      <Workflow />
      <Testimonial />
      <LatestBlog />
    </>
  );
}
