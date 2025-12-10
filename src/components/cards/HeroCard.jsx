import Button from "../ui/Button";

const HeroCard = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <img
        src="/assets/images/heroImage.webp"
        alt="Hero Image"
        className="rounded-[1.25rem] w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#CE7D63CC] mix-blend-color rounded-[1.25rem]" />
      <span className="absolute bottom-7.5 right-7.5 text-white text-[1rem] py-2.5 px-3.5 rounded-[0.625rem] bg-[#FFFFFF33] backdrop-blur-xl uppercase font-primary font-normal">
        Web Development
      </span>
      <Button
        link="#"
        text="View Blog"
        style="global"
        arrowClassName="bg-white group-hover:bg-[#0F0F0F]"
        className="absolute bottom-7.5 left-7.5"
      />
    </div>
  );
};

export default HeroCard;
