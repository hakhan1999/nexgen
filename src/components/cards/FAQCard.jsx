import { useRef, useState } from "react";

const FAQCard = ({ title, description, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);

  return (
    <div className="bg-[#1A1A1A] rounded-2xl relative">
      <div className="p-15 ">
        <h5
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="font-medium!"
        >
          {title}
        </h5>
        <p
          ref={contentRef}
          style={{
            maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          }}
          className={`trns w-200 ${
            isOpen
              ? "opacity-100 max-h-96 pointer-events-all mt-10"
              : " opacity-0 max-h-0 pointer-events-none"
          }`}
        >
          {description}
        </p>
      </div>

      <div
        className={`w-13 h-13 f-center toggle p-4.5 rounded-full border border-[#333333] trns bg-[#1F1F1F] hover:bg-white hover:border-white absolute top-13 right-15 cursor-pointer group
    ${isOpen ? "bg-white border-white" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={` ${
            isOpen ? "assets/images/minus.svg" : "assets/images/plus.svg"
          }`}
          alt="Accordion Toggle"
          className={`w-4 group-hover:filter-[brightness(0)_saturate(100%)_invert(1%)_sepia(14%)_saturate(4%)_hue-rotate(314deg)_brightness(124%)_contrast(91%)] ${
            isOpen
              ? "filter-[brightness(0)_saturate(100%)_invert(1%)_sepia(14%)_saturate(4%)_hue-rotate(314deg)_brightness(124%)_contrast(91%)]"
              : ""
          }`}
        />
      </div>
    </div>
  );
};

export default FAQCard;
