"use client";
import Hero from "@/sections/home/Hero";
import OurServices from "@/sections/home/OurServices";
import Reasons from "@/sections/home/Reasons";

export default function Page() {
  return (
    <>
      <Hero isHomePage />
      <Reasons />
      <OurServices />
    </>
  );
}
