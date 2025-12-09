import React from "react";
import Button from "../ui/Button";

const CTA = () => {
  return (
    <section className="p-20 rounded-[1.25rem] bg-[#CE7D63] f-end justify-between">
      <div className="w-[70%]">
        <h2 className="uppercase leading-18 text-[3.625rem] text-[##0F0F0F] font-medium mb-1 font-primary">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-[#262626]">
          Take the first step towards digital success with NexGen by your side.
          Our team of experts is eager to craft tailored solutions that drive
          growth for your business.
        </p>
      </div>
      <Button text="Get in Touch" link="/contact-us/" style="cta" />
    </section>
  );
};

export default CTA;
