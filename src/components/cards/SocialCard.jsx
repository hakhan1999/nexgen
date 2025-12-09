import Link from "next/link";

const SocialCard = ({ iconLink, link, title, description }) => {
  return (
    <div className="rounded-[0.875rem] p-10 bg-[#1A1A1A] flex flex-col gap-20 h-full">
      <div className="f-bw">
        <div className="border border-[#333333] bg-[#1F1F1F] rounded-xl p-4 w-16.5 h-16.5 f-center">
          <img width={34} height={34} src={iconLink} alt={title} />
        </div>
        <Link
          className="rounded-full p-3.5 border border-[#333333] bg-[#1F1F1F]"
          href={link}
          target="_blank"
        >
          <img
            className="w-[1.063rem] h-[1.063rem]"
            src="/assets/images/arrow.svg"
            alt="Arrow Icon"
          />
        </Link>
      </div>
      <div>
        <h4 className="mb-3">{title}</h4>
        <p className="text-[#B3B3B2]">{description}</p>
      </div>
    </div>
  );
};

export default SocialCard;
