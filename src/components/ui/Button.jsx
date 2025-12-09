import Link from "next/link";

const Button = ({ style, text, link, className }) => {
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
};

export default Button;
