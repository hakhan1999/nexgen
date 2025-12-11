import Link from "next/link";
import React from "react";

const TechTeamCard = ({ technologies = [], teamImages = [] }) => {
  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="p-10 rounded-[0.87rem] bg-[#1A1A1A]">
        <h4 className="text-lg!">Technologies Used</h4>
        <ul className="flex items-center gap-2.5 flex-wrap mt-5">
          {technologies.map((tech, index) => (
            <li
              key={index}
              className="text-[#E6E6E6] bg-[#0f0f0f] rounded-[2.813rem] text-[1rem] px-4 py-2.5 font-secondary"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-10 rounded-[0.87rem] bg-[#1A1A1A]">
        <div className="flex items-center justify-start gap-10">
          <h4 className="text-lg!">Team Members</h4>
          <div className="f-center gap-2.5">
            {teamImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Team member ${index}`}
                className="w-12.5 h-12.5 rounded-full object-cover"
              />
            ))}
          </div>
        </div>
      </div>
      <button>
        <Link
          className="text-lg uppercase text-[#0F0F0F] bg-[#CE7D63] rounded-xl w-full block py-4.5 font-medium hover:bg-white trns"
          href="#"
        >
          Book a Call
        </Link>
      </button>
    </div>
  );
};

export default TechTeamCard;
