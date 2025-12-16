"use client";
import SectionHeader from "@/components/common/SectionHeader";
import Button from "@/components/ui/Button";

const Reasons = ({ data }) => {
  if (!data) return null;
  return (
    <section className="top-padded">
      <div className="inner-padded">
        <SectionHeader title={data.reasons_section_title} />

        <div className="grid grid-cols-4 gap-5">
          {data?.reasons_boxes?.map((card, index) => (
            <div
              key={index}
              className="card p-10 rounded-[0.875rem] bg-[#1A1A1A]"
            >
              <h3>{card.title}</h3>
              <p className="mt-3">{card.description}</p>

              <Button
                link={card.button_link.url}
                text={card.button_link.title}
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
