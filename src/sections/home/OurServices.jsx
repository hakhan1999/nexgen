"use client";
import Card from "@/components/cards/Card";
import SectionHeader from "@/components/common/SectionHeader";

const OurServices = () => {
  const services = [
    {
      id: 1,
      link: "#",
      title: "Web Design",
      description:
        "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.",
      iconLink: "/assets/images/pen.svg",
      pricetext: "Starts From $1,500",
    },
    {
      id: 2,
      link: "#",
      title: "Mobile App Development",
      description:
        "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go.",
      iconLink: "/assets/images/smartphone.svg",
      pricetext: "Starts From $2,500",
    },
    {
      id: 3,
      link: "#",
      title: "Web Development",
      description:
        "Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites.",
      iconLink: "/assets/images/code.svg",
      pricetext: "Starts From $1,800",
    },
    {
      id: 4,
      link: "#",
      title: "Digital Marketing",
      description:
        "In the digital age, marketing is a critical aspect of your business's success. Our Digital Marketing service employs data-driven strategies to enhance your brand's visibility",
      iconLink: "/assets/images/branding.svg",
      pricetext: "Starts From $1,200",
    },
  ];
  return (
    <section className="top-padded">
      <div className="inner-padded">
        <SectionHeader title="Our Services" />
        <div className="f-bw">
          <div className="grid grid-cols-2 gap-5">
            {services.map((card) => (
              <Card
                key={card.id}
                link={card.link}
                description={card.description}
                iconLink={card.iconLink}
                pricetext={card.pricetext}
                title={card.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
