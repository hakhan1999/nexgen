import HeroCard from "@/components/cards/HeroCard";
import InfiniteMarquee from "@/components/common/InfiniteMarquee";
import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <section className="flex justify-between mt-12.5">
      <div className="w-[70%] rounded-[1.25rem] bg-[#1A1A1A]">
        <div className="pt-25 myContainer">
          <div className="f-start gap-2">
            <h1 className="mb-5 w-200">Our Comprehensive Digital Solutions</h1>
            <Button
              link="#"
              text="Start a Project"
              style="global"
              arrowClassName="bg-[#CE7D63] group-hover:bg-white"
              className="mt-[1.219rem]"
              isHero
            />
            <Button />
          </div>
          <p className="text-[#676665] mr-30">
            At NexGen, we offer a comprehensive suite of digital solutions
            designed to propel your business to new heights in the digital
            realm. With a team of skilled professionals, cutting-edge
            technologies, and a passion for innovation
          </p>
        </div>
        <div className="mx-5">
          <InfiniteMarquee
            texts={[
              "Website Development",
              "Mobile App Development",
              "Digital Marketing",
              "Website Design",
              "Branding",
            ]}
            repeat={4}
            className="mt-22.5 mb-5  bg-[#0F0F0F]!"
          />
        </div>
      </div>
      <HeroCard className="w-[29%]" />
    </section>
  );
};

export default Hero;
