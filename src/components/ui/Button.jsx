import Link from "next/link";

const Button = ({
  style,
  text,
  link,
  className,
  arrowClassName,
  isHero,
  isSection,
}) => {
  if (style === "cta") {
    return (
      <button className={`bg-[#0F0F0F] rounded-xl ${className}`}>
        <Link
          href={link}
          className="f-center py-[1.156rem] px-8.5 gap-[0.899rem]"
        >
          <span className="text-[#F3DFD8] uppercase text-lg leading-normal">
            {text}
          </span>
          <img
            className="w-[1.203rem] h-[1.203rem]"
            src="/assets/images/arrow.svg"
            alt="Arrow Button"
          />
        </Link>
      </button>
    );
  }
  if (style === "global") {
    return (
      <button className={`${className} group`}>
        <Link className="f-center gap-2.5 relative" href={link}>
          <div
            className={`${isHero ? "w-13 h-13" : "w-11 h-11"} ${
              isSection ? "w-13 h-13" : "w-11 h-11"
            } rounded-full f-center trns ${arrowClassName}`}
          >
            <img
              className={`w-[1.063rem] h-[1.063rem] group-hover:rotate-45 trns filter-[brightness(0)_saturate(100%)_invert(1%)_sepia(14%)_saturate(4%)_hue-rotate(314deg)_brightness(124%)_contrast(91%)]  ${
                isHero
                  ? "group-hover:filter-[brightness(0)_saturate(100%)_invert(1%)_sepia(14%)_saturate(4%)_hue-rotate(314deg)_brightness(124%)_contrast(91%)]"
                  : "group-hover:filter-none"
              } ${
                isSection
                  ? "filter-none group-hover:filter-[brightness(0)_saturate(100%)_invert(1%)_sepia(14%)_saturate(4%)_hue-rotate(314deg)_brightness(124%)_contrast(91%)]!"
                  : ""
              }`}
              src="/assets/images/arrow.svg"
              alt="Arrow Button"
            />
          </div>
          <span
            className={`uppercase  leading-normal trns  ${
              isHero
                ? "text-[#CE7D63] text-[1.5rem] font-primary font-500 group-hover:text-white"
                : "text-white text-lg font-secondary"
            } ${isSection ? "text-xl group-hover:text-[#CE7D63]" : ""}`}
          >
            {text}
          </span>
          {isHero && (
            <img
              src="/assets/images/shape.svg"
              className="absolute -left-4 w-[4.813rem] h-[4.813rem]"
              alt="Shape Button"
            />
          )}
        </Link>
      </button>
    );
  }

  return null;
};

export default Button;
