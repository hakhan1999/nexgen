import Marquee from "react-fast-marquee";

const InfiniteMarquee = () => {
  const text = "Follow Us on Social Media";
  const repeat = 20;
  return (
    <Marquee
      speed={90}
      loop={0}
      pauseOnHover={true}
      className="bg-[#1A1A1A] rounded-xl py-5 flex items-center mt-5"
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div key={i} className="flex items-center gap-5 pr-8">
          <span className="text-xl uppercase text-[#676665] font-secondary whitespace-nowrap">
            {text}
          </span>
          <div className="w-[7px] h-[7px] bg-[#CE7D63] rounded-full"></div>
        </div>
      ))}
    </Marquee>
  );
};

export default InfiniteMarquee;
