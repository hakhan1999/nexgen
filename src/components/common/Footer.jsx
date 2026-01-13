import CTA from "./CTA";
import SocialCard from "../cards/SocialCard";
import Link from "next/link";
import InfiniteMarquee from "./InfiniteMarquee";
import { getFooter, getMenu } from "@/lib/wpApi";

const Footer = async () => {
  const [data, menus] = await Promise.all([getFooter(), getMenu()]);

  if (!data) return null;
  return (
    <footer>
      <CTA />
      <InfiniteMarquee
        texts={data.marquee_text_footer?.map((item) => item.text) || []}
        repeat={20}
        className="mt-5"
      />

      <div className="grid grid-cols-5 grid-rows-6 gap-5 mt-5">
        {data?.social_boxes?.map((item, index) => (
          <div
            key={index}
            className={`row-span-3 ${
              index === 2 ? "col-start-1 row-start-4" : ""
            } ${index === 3 ? "row-span-3 col-start-2 row-start-4" : ""}`}
          >
            <SocialCard
              iconLink={item.icon}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          </div>
        ))}
        <div className="col-span-3 row-span-3 col-start-3 row-start-1 py-10 px-15 bg-[#1A1A1A] rounded-[0.875rem] grid grid-cols-4 gap-15">
          <div className="grid-item">
            <h5 className="mb-7.5">{data?.menu_titles?.menu_1_title}</h5>
            <ul className="flex flex-col gap-4.5">
              {menus?.footerMenu1?.map((item) => (
                <li key={item.id}>
                  <Link
                    className="text-[#B3B3B2] font-primary text-lg leading-normal hover:text-[#CE7D63] trns"
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid-item">
            <h5 className="mb-7.5">{data?.menu_titles?.menu_2_title}</h5>
            <ul className="flex flex-col gap-4.5">
              {menus?.footerMenu2?.map((item) => (
                <li key={item.id}>
                  <Link
                    className="text-[#B3B3B2] font-primary text-lg leading-normal hover:text-[#CE7D63] trns"
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid-item">
            <h5 className="mb-7.5">{data?.menu_titles?.menu_3_title}</h5>
            <ul className="flex flex-col gap-4.5">
              {menus?.footerMenu3?.map((item) => (
                <li key={item.id}>
                  <Link
                    className="text-[#B3B3B2] font-primary text-lg leading-normal hover:text-[#CE7D63] trns"
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid-item">
            <h5 className="mb-7.5">{data?.menu_titles?.menu_4_title}</h5>
            <ul className="flex flex-col gap-4.5">
              {menus?.footerMenu4?.map((item) => (
                <li key={item.id}>
                  <Link
                    className="text-[#B3B3B2] font-primary text-lg leading-normal hover:text-[#CE7D63] trns"
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-3 row-span-2 row-start-4 py-10 px-15 bg-[#1A1A1A] rounded-[0.875rem] f-bw">
          <div className="w-[50%]">
            <p className="text-[#B3B3B2] font-secondary mb-2.5 uppercase">
              {data?.newsletter_section?.sub_title}
            </p>
            <h4 className="mb-3">{data?.newsletter_section?.title}</h4>
          </div>
          <div className="w-[45%] flex items-end justify-end gap-5">
            <input
              className="placeholder:text-lg placeholder:text-[#B3B3B2] placeholder:leading-normal placeholder:font-primary! text-[#F9EFEC] w-92 py-4.5 px-3 border-b border-[#333333]"
              type="text"
              name="email"
              id="newsletter"
              placeholder="Enter your email"
            />
            <Link
              className="rounded-full p-3.5 border border-[#333333] bg-[#1F1F1F]"
              href="#"
              target="_blank"
            >
              <img
                className="w-[1.063rem] h-[1.063rem]"
                src="/assets/images/arrow.svg"
                alt="Arrow Icon"
              />
            </Link>
          </div>
        </div>
        <div className="col-span-3 col-start-3 row-start-6 py-10 px-15 bg-[#1A1A1A] rounded-[0.875rem] f-bw">
          <span className="text-[#B3B3B2] font-secondary text-lg">
            {data?.copyright_text?.text}
          </span>
          <ul className="flex gap-8">
            {menus?.policyMenu?.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.url}
                  className="text-[#B3B3B2] font-secondary text-lg hover:text-[#CE7D63] trns"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
