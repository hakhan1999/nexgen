import React from "react";
import Button from "../ui/Button";

const SectionHeader = ({ isBtn, title, link, btnTitle }) => {
  return (
    <div className="myContainer py-12.5 bg-[#1A1A1A] rounded-2xl f-bw mb-5">
      <h2>{title}</h2>
      {isBtn && (
        <Button
          link={link}
          text={btnTitle}
          style="global"
          arrowClassName="border border-[#545454] group-hover:bg-[#CE7D63] group-hover:border-[#CE7D63]"
          isSection
        />
      )}
    </div>
  );
};

export default SectionHeader; 
