import TestimonialCard from "@/components/cards/TestimonialCard";
import SectionHeader from "@/components/common/SectionHeader";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      title: "NexGen turned our business around!",
      description:
        "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
      name: "Sarah Thompson",
      designation: "CEO of BlueBloom",
      imageLink: "/assets/images/testimonial-image-4.webp",
    },
    {
      id: 2,
      title: "NexGen turned our business around!",
      description:
        "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
      name: "Wade Warren",
      designation: "Art Director",
      imageLink: "/assets/images/testimonial-image-1.webp",
    },
    {
      id: 3,
      title: "Working with NexGen was a pleasure.",
      description:
        "Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
      name: "Lisa Williams",
      designation: "CEO Of HealthTech",
      imageLink: "/assets/images/testimonial-image-2.webp",
    },
    {
      id: 4,
      title: "NexGen's web design team brought our vision to life.",
      description:
        "Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.",
      name: "Jennifer Lee",
      designation: "COO of Foodie Haven",
      imageLink: "/assets/images/testimonial-image-3.webp",
    },
  ];
  return (
    <section className="top-padded">
      <div className="inner-padded">
        <SectionHeader title="Testimonials" />
        <div className="grid grid-cols-4 gap-5 mt-5">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              title={item.title}
              description={item.description}
              name={item.name}
              imageLink={item.imageLink}
              designation={item.designation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
