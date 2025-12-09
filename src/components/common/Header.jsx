"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const navLinks = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "Services", link: "/services" },
    { id: 3, text: "Projects", link: "/projects" },
    { id: 4, text: "About", link: "/about" },
    { id: 5, text: "Careers", link: "/careers" },
    { id: 6, text: "Blogs", link: "/blogs" },
    { id: 7, text: "Contact Us", link: "/contact-us" },
  ];

  const pathname = usePathname();

  return (
    <header className="myContainer f-bw py-[2.719rem]! bg-(--primary) rounded-2xl">
      <div className="w-fit">
        <Link href={"/"}>
          <img
            src="/assets/images/logo.webp"
            alt="Logo"
            className="w-32.5 h-6"
          />
        </Link>
      </div>
      <nav>
        <ul className="f-center gap-4">
          {navLinks.map((item) => (
            <li key={item.id}>
              <Link
                className={`${
                  item.id === 7
                    ? "bg-[#CE7D63] text-[#0F0F0F]"
                    : "text-[#81807E]"
                } bg-(--black)  hover:bg-[#CE7D63] hover:text-[#0F0F0F] font-secondary text-lg  uppercase rounded-xl px-4.5 py-5 font-medium trns ${
                  pathname === item.link ? "text-[#E7BEB1]" : ""
                }`}
                href={item.link}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
