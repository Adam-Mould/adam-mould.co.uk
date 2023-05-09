import { PageHero } from "~/components/page-hero";
import { SiteFooterCTA } from "~/components/site-footer-cta";
import { Intro } from "./intro";
import { Technologies } from "./technologies";
import { Timeline } from "./timeline";
import { WhatToExpect } from "./what-to-expect";

export default function WebsiteDevelopment() {
  return (
    <>
      <PageHero
        subTitle="Core Service"
        title="Website Development"
        description="Transform your online presence with the help of a professional. Complete website development from start to finish, for sites of all sizes and complexity."
      />
      <Intro />
      <Technologies />
      <WhatToExpect />
      <Timeline />
      <SiteFooterCTA />
    </>
  );
}
