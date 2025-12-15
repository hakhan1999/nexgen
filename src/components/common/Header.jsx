"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useContext } from "react";
import { LoadingContext } from "@/context/LoadingContext";
import { getLogo, getMenu } from "@/lib/wpApi";

const Header = () => {
  const { setLoading } = useContext(LoadingContext);
  const [logo, setLogo] = useState(null);
  const [menuLinks, setMenuLinks] = useState([]);

  const pathname = usePathname();

  // Fetch logo and menu from WP REST API
  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        const [logoData, menuData] = await Promise.all([getLogo(), getMenu()]);

        setLogo(logoData?.logo || null);

        // Transform menu data to fit navLinks format
        const links =
          menuData?.map((item, index) => ({
            id: index + 1,
            text: item.title,
            link: item.url.replace(
              process.env.NEXT_PUBLIC_WP_API_URL?.replace("/wp-json", ""),
              ""
            ), // convert full URL to relative path
          })) || [];

        setMenuLinks(links);
      } catch (error) {
        console.error("Failed to fetch header data", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [setLoading]);

  return (
    <header className="myContainer f-bw py-[2.719rem]! bg-(--primary) rounded-2xl">
      <div className="w-fit">
        <Link href={"/"}>
          {logo && <img src={logo} alt="Logo" className="w-32.5 h-6" />}
        </Link>
      </div>
      <nav>
        <ul className="f-center gap-4">
          {menuLinks.length > 0
            ? menuLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    className={`${
                      item.id === menuLinks.length
                        ? "bg-[#CE7D63] text-[#0F0F0F]"
                        : "text-[#81807E]"
                    } bg-(--black) hover:bg-[#CE7D63] hover:text-[#0F0F0F] font-secondary text-lg uppercase rounded-xl px-4.5 py-5 font-medium trns ${
                      pathname === item.link ? "text-[#E7BEB1]" : ""
                    }`}
                    href={item.link}
                  >
                    {item.text}
                  </Link>
                </li>
              ))
            : null}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
