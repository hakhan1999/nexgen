import HeroCard from "@/components/cards/HeroCard";
import InfiniteMarquee from "@/components/common/InfiniteMarquee";
import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <section className="flex justify-between mt-12.5">
      <div className="w-[70%] rounded-[1.25rem] bg-[#1A1A1A]">
        <div className="pt-25 myContainer">
          <div className="f-start gap-2">
            <h1 className="mb-5 w-190">Digital Solutions That Drive Success</h1>
            <Button
              link="#"
              text="Start a Project"
              style="global"
              arrowClassName="bg-[#CE7D63] group-hover:bg-white"
              className="mt-[1.219rem]"
              isHero
            />
          </div>
          <p className="text-[#B3B3B2] mr-30">
            At NexGen, we believe in the transformative power of digital
            solutions. Our team of experts is dedicated to helping businesses
            like yours thrive in the fast-paced digital landscape.
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
