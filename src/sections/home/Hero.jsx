"use client";
import HomeHeroCard from "@/components/cards/HomeHeroCard";
import ServicesHeroCard from "@/components/cards/ServicesHeroCard";
import InfiniteMarquee from "@/components/common/InfiniteMarquee";
import Button from "@/components/ui/Button";
import CounterSec from "@/components/ui/CounterSec";

const Hero = ({
  isHomePage,
  isServicesPage,
  isProjectsPage,
  isAboutPage,
  isCareersPage,
  isBlogsPage,
  isContactPage,
  data,
}) => {
  if (!data) return null;
  return (
    <section>
      <div className="flex justify-between mt-12.5">
        <div className="w-[70%] rounded-[1.25rem] bg-[#1A1A1A]">
          <div className="pt-25 myContainer">
            <div className="f-start gap-2">
              <h1 className="mb-5 w-190">{data.hero_content.title}</h1>
              <Button
                link={data.hero_content.button.url}
                text={data.hero_content.button.title}
                style="global"
                arrowClassName="bg-[#CE7D63] group-hover:bg-white"
                className="mt-[1.219rem]"
                isHero
              />
            </div>
            <p className="text-[#B3B3B2] mr-30">
              {data.hero_content.description}
            </p>
          </div>
          <div className="mx-5">
            <InfiniteMarquee
              texts={data.hero_marquee?.map((item) => item.text) || []}
              repeat={4}
              className="mt-22.5 mb-5  bg-[#0F0F0F]!"
            />
          </div>
        </div>
        {isHomePage && <HomeHeroCard className="w-[29%]" />}
        {isServicesPage && <ServicesHeroCard className="w-[29%]" />}
      </div>
      {isHomePage && <CounterSec data={data} />}
    </section>
  );
};

export default Hero;
