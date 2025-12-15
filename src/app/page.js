"use client";
import Hero from "@/sections/home/Hero";
import Reasons from "@/sections/home/Reasons";
import OurServices from "@/sections/home/OurServices";
import Works from "@/sections/home/Works";
import Testimonials from "@/sections/home/Testimonials";
import FAQ from "@/sections/home/FAQ";

export default function Page() {
  return (
    <>
      <Hero isHomePage />
      <Reasons />
      <OurServices />
      <Works />
      <Testimonials />
      <FAQ />
    </>
  );
}
