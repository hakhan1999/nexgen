import SectionHeader from "@/components/common/SectionHeader";
import Button from "@/components/ui/Button";
import React from "react";

const Reasons = () => {
  const reasons = [
    {
      id: 1,
      title: "Expertise in Cutting-Edge Technologies",
      description:
        "NexGen ensures your projects are powered by state-of-the-art technologies, guaranteeing innovation and future-proof solutions.",
    },
    {
      id: 2,
      title: "Proven Track Record of Success",
      description:
        "NexGen demonstrates a consistent ability to meet and exceed client expectations, providing reliable and effective web solutions tailored to diverse needs.",
    },
    {
      id: 3,
      title: "Client-Centric Approach",
      description:
        "At NexGen, we prioritize understanding our clients' unique requirements, fostering transparent communication throughout the development process. ",
    },
    {
      id: 4,
      title: "Dedicated Team of Professionals",
      description:
        "Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable, and secure web solutions for your business.",
    },
  ];
  return (
    <section className="top-padded">
      <div className="inner-padded">
        <SectionHeader title="Reasons to Choose NexGen for Your Digital Journey" />
        <div className="grid grid-cols-4 gap-5">
          {reasons.map((card) => (
            <div
              key={card.id}
              className="card p-10 rounded-[0.875rem] bg-[#1A1A1A]"
            >
              <h3>{card.title}</h3>
              <p className="mt-3">{card.description}</p>
              <Button
                link="#"
                text="Learn More"
                style="global"
                arrowClassName="border border-[#545454] group-hover:bg-[#CE7D63] group-hover:border-[#CE7D63]"
                className="mt-10"
                isSection
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;
