import Link from "next/link";
import Button from "../ui/Button";

const HomeHeroCard = ({ className }) => {
  return (
    <Link href="#" className={`relative overflow-hidden group ${className}`}>
      <img
        src="/assets/images/homeHeroImage.webp"
        alt="Hero Image"
        className="rounded-[1.25rem] w-full h-full object-cover"
      />
      <div className="p-7.5 rounded-b-[1.25rem] bg-[#1F1F1F]  absolute bottom-0 w-full">
        <h4>Estatein Real Estate</h4>
        <p>Web Development</p>
      </div>
      <div className="bg-[#0F0F0F] rounded-full f-center absolute -top-4 -right-[-2.6rem] w-[11.938rem] h-[11.938rem]">
        <div className="rounded-full bg-[#CE7D63] w-22 h-22 f-center trns group-hover:bg-white">
          <img
            className="w-[2.578rem] h-[2.578rem] trns filter-[brightness(0)_saturate(100%)_invert(1%)_sepia(14%)_saturate(4%)_hue-rotate(314deg)_brightness(124%)_contrast(91%)]"
            src="/assets/images/arrow.svg"
            alt="Arrow"
          />
        </div>
        <img
          className="absolute top-8 left-6"
          src="/assets/images/heroShape.svg"
          alt="Hero Shape"
        />
      </div>
    </Link>
  );
};

export default HomeHeroCard;
