"use client";
import TestimonialCard from "@/components/cards/TestimonialCard";
import SectionHeader from "@/components/common/SectionHeader";

const Testimonials = ({ data }) => {
  return (
    <section className="top-padded">
      <div className="inner-padded">
        <SectionHeader title={data?.testimonials_section_title} />
        <div className="grid grid-cols-4 gap-5 mt-5">
          {data?.testimonials_boxes?.map((item, index) => (
            <TestimonialCard
              key={index}
              title={item.title}
              description={item.description}
              name={item.name}
              imageLink={item.image}
              designation={item.designation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
