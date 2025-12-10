import CTA from "./CTA";
import SocialCard from "../cards/SocialCard";
import Link from "next/link";
import InfiniteMarquee from "./InfiniteMarquee";

const Footer = () => {
  const social = [
    {
      id: 1,
      iconLink: "/assets/images/instagram.svg",
      title: "Instagram",
      description:
        "Share visually appealing snippets of our latest web projects.",
      link: "#",
    },
    {
      id: 2,
      iconLink: "/assets/images/twitter.svg",
      title: "Twitter",
      description: "Tweet about interesting coding challenges you've overcome.",
      link: "#",
    },
    {
      id: 3,
      iconLink: "/assets/images/dribble.svg",
      title: "Dribble",
      description: "Showcase design elements of our web projects.",
      link: "#",
    },
    {
      id: 4,
      iconLink: "/assets/images/behance.svg",
      title: "Behance",
      description: "Create detailed presentations for our projects.",
      link: "#",
    },
  ];

  const home = [
    { id: 1, text: "Why Us", link: "#" },
    { id: 2, text: "About Us", link: "#" },
    { id: 3, text: "Testimonials", link: "#" },
    { id: 4, text: "FAQs", link: "#" },
  ];

  const services = [
    { id: 1, text: "Web Development", link: "#" },
    { id: 2, text: "App Development", link: "#" },
    { id: 3, text: "Web Design", link: "#" },
    { id: 4, text: "Digital Marketing", link: "#" },
  ];

  const projects = [
    { id: 1, text: "Klothink", link: "#" },
    { id: 2, text: "Zenith", link: "#" },
    { id: 3, text: "Novus", link: "#" },
    { id: 4, text: "Apex", link: "#" },
  ];

  const blogs = [
    { id: 1, text: "Business", link: "#" },
    { id: 2, text: "Design", link: "#" },
    { id: 3, text: "Development", link: "#" },
  ];
  return (
    <footer>
      <CTA />
      <InfiniteMarquee
        texts={["Follow Us on Social Media"]}
        repeat={20}
        className="mt-5"
      />

      <div className="grid grid-cols-5 grid-rows-6 gap-5 mt-5">
        {social.map((item, index) => (
          <div
            key={item.id}
            className={`row-span-3 ${
              index === 2 ? "col-start-1 row-start-4" : ""
            } ${index === 3 ? "row-span-3 col-start-2 row-start-4" : ""}`}
          >
            <SocialCard
              iconLink={item.iconLink}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          </div>
        ))}
        <div className="col-span-3 row-span-3 col-start-3 row-start-1 py-10 px-15 bg-[#1A1A1A] rounded-[0.875rem] grid grid-cols-4 gap-15">
          <div className="grid-item">
            <h5 className="mb-7.5">Home</h5>
            <ul className="flex flex-col gap-4.5">
              {home.map((item) => (
                <li key={item.id}>
                  <Link
                    className="text-[#81807E] font-primary text-lg leading-normal hover:text-[#CE7D63] trns"
                    href={item.link}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid-item">
            <h5 className="mb-7.5">Services</h5>
            <ul className="flex flex-col gap-4.5">
              {services.map((item) => (
                <li key={item.id}>
                  <Link
                    className="text-[#81807E] font-primary text-lg leading-normal hover:text-[#CE7D63] trns"
                    href={item.link}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid-item">
            <h5 className="mb-7.5">Projects</h5>
            <ul className="flex flex-col gap-4.5">
              {projects.map((item) => (
                <li key={item.id}>
                  <Link
                    className="text-[#81807E] font-primary text-lg leading-normal hover:text-[#CE7D63] trns"
                    href={item.link}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid-item">
            <h5 className="mb-7.5">Blogs</h5>
            <ul className="flex flex-col gap-4.5">
              {blogs.map((item) => (
                <li key={item.id}>
                  <Link
                    className="text-[#81807E] font-primary text-lg leading-normal hover:text-[#CE7D63] trns"
                    href={item.link}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-3 row-span-2 row-start-4 py-10 px-15 bg-[#1A1A1A] rounded-[0.875rem] f-bw">
          <div className="w-[50%]">
            <p className="text-[#676665] font-secondary mb-2.5 uppercase">
              Newsletter
            </p>
            <h4 className="mb-3">Subscribe To our Newsletter</h4>
          </div>
          <div className="w-[45%] flex items-end justify-end gap-5">
            <input
              className="placeholder:text-lg placeholder:text-[#676665] placeholder:leading-normal placeholder:font-primary! text-[#F9EFEC] w-92 py-4.5 px-3 border-b border-[#333333]"
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
            © 2024 NextGen. All rights reserved.
          </span>
          <ul className="flex gap-8">
            <li>
              <Link
                href="#"
                className="text-[#B3B3B2] font-secondary text-lg hover:text-[#CE7D63] trns"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-[#B3B3B2] font-secondary text-lg hover:text-[#CE7D63] trns"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
