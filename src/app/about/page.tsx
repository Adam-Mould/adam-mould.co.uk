import { PageHero } from "./hero";
import { Intro } from "./intro";
import { Technologies } from "./technologies";
import { Workflow } from "./workflow";
import { Testimonial } from "./testimonial";
import { LatestBlog } from "../blog";

export default function About() {
  return (
    <>
      <PageHero />
      <Intro />
      <Technologies />
      <Workflow />
      <Testimonial />
      <LatestBlog />
    </>
  );
}
