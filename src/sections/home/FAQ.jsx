import FAQCard from "@/components/cards/FAQCard";
import FormCard from "@/components/cards/FormCard";
import SectionHeader from "@/components/common/SectionHeader";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      title: "How long does it take to complete a web development project?",
      description:
        "The timeline varies depending on the projects complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards",
    },
    {
      id: 2,
      title: "Can you handle large-scale mobile app development projects?",
      description:
        "The timeline varies depending on the projects complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards",
    },
    {
      id: 3,
      title: "Can you integrate third-party APIs into our mobile app?",
      description:
        "The timeline varies depending on the projects complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards",
    },
    {
      id: 4,
      title: "How do you ensure cross-platform compatibility for mobile apps?",
      description:
        "The timeline varies depending on the projects complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards",
    },
    {
      id: 5,
      title: "What is your approach to user experience (UX) design?",
      description:
        "The timeline varies depending on the projects complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards",
    },
  ];
  return (
    <section className="sec-padded">
      <div className="inner-padded">
        <SectionHeader title="Frequently Asked Questions" />
        <div className="flex items-start gap-5">
          <div className="w-[55%] flex flex-col gap-5">
            {faqs.map((faq, index) => (
              <FAQCard
                key={faq.id}
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
