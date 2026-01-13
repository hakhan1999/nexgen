"use client";
import FAQCard from "@/components/cards/FAQCard";
import FormCard from "@/components/cards/FormCard";
import SectionHeader from "@/components/common/SectionHeader";

const FAQ = ({ data }) => {
  if (!data) return null;
  return (
    <section className="sec-padded">
      <div className="inner-padded">
        <SectionHeader title={data?.faq_section_title} />
        <div className="flex items-start gap-5">
          <div className="w-[55%] flex flex-col gap-5">
            {data?.faq_boxes?.map((faq, index) => (
              <FAQCard
                key={index}
                title={faq.title}
                description={faq.description}
                defaultOpen={index === 0}
              />
            ))}
          </div>
          <div className="w-[45%]">
            <FormCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
