import Card from "@/components/cards/Card";
import TechTeamCard from "@/components/cards/TechTeamCard";
import SectionHeader from "@/components/common/SectionHeader";
import React from "react";

const Works = () => {
  const worksDetails = [
    {
      id: 1,
      title: "Zenith Fitness App",
      description:
        "An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.",
      iconLink: "/assets/images/magic-stick.svg",
      link: "#",
      category: "Mobile App Development",
      time: "6 months",
      thumbnail: "/assets/images/works-img-1.webp",
      technologies: [
        "React Native",
        "Firebase",
        "Redux",
        "REST API",
        "MongoDB",
      ],
      teamImages: [
        "/assets/images/member-1.webp",
        "/assets/images/member-2.webp",
        "/assets/images/member-3.webp",
        "/assets/images/member-4.webp",
        "/assets/images/member-5.webp",
      ],
    },
    {
      id: 2,
      title: "A-Aura Ecommerce",
      description:
        "A complete overhaul of a corporate website to enhance its brand identity and user experience.",
      iconLink: "/assets/images/balloon.svg",
      link: "#",
      category: "Web Design & Development",
      time: "3 months",
      thumbnail: "/assets/images/works-img-2.webp",
      technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
      teamImages: [
        "/assets/images/member-1.webp",
        "/assets/images/member-2.webp",
        "/assets/images/member-3.webp",
        "/assets/images/member-4.webp",
        "/assets/images/member-5.webp",
      ],
    },
  ];
  return (
    <section className="top-padded">
      <div className="inner-padded">
        <SectionHeader title="Our Works" isBtn link="#" btnTitle="All Works" />
        {worksDetails.map((sec, index) => (
          <div
            key={sec.id}
            className={`grid grid-cols-3 gap-5 ${index === 0 ? "mb-5" : ""}`}
          >
            <Card
              title={sec.title}
              description={sec.description}
              iconLink={sec.iconLink}
              category={sec.category}
              time={sec.time}
              link={sec.link}
              btnText="Details"
              isWorksCard
            />
            <img
              className="h-full object-cover rounded-[0.875rem]"
              src={sec.thumbnail}
              alt={sec.title}
            />
            <TechTeamCard
              technologies={sec.technologies}
              teamImages={sec.teamImages}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
