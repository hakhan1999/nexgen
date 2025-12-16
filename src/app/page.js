import Hero from "@/sections/home/Hero";
import Reasons from "@/sections/home/Reasons";
import OurServices from "@/sections/home/OurServices";
import Works from "@/sections/home/Works";
import Testimonials from "@/sections/home/Testimonials";
import FAQ from "@/sections/home/FAQ";
import { getHomeData } from "@/lib/wpApi";

export default async function Page() {
  const homeData = await getHomeData()
  return (
    <>
      <Hero isHomePage data={homeData} />
      <Reasons data={homeData} />
      <OurServices />
      <Works />
      <Testimonials />
      <FAQ />
    </>
  );
}
