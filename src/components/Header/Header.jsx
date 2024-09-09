import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MobileMenu } from "../MobileMenu/MobileMenu";

export const Header = ({ handleToggleDarkMode, isDarkMode }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = () => {
    fetch(`https://dev.to/api/articles`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  const handleSearchFilter = (value) => {
    setSearchQuery(value);
    const filteredArray = articles.filter((filter) =>
      filter.title.toLowerCase().includes(value)
    );

    setData(filteredArray);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (pathname) => router.pathname === pathname;

  return (
    <div className="w-full flex flex-col bg-white items-center justify-center">
      <div className="flex w-full fixed max-w-[1256px] bg-white justify-center mt-16 md:px-20">
        <div className="w-full h-[70px] bg-white flex justify-between items-center px-4 xl:px-1 lg:px-0 md:px-0 md:py-4 ">
          <Link href={"/"}>
            <div className="flex w-auto cursor-pointer">
              <img src="/Images/Logo.svg" alt="" />
            </div>
          </Link>
          <div className="hidden lg:flex w-auto gap-10">
            <Link href={"/"}>
              <button
                className={` ${
                  isActive("/")
                    ? "text-[#D4A373]"
                    : "text-[var(--secondary-600)]"
                } text-base font-normal not-italic font-work-sans group relative w-max`}
              >
                <span>Home</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-[#D4A373] group-hover:w-3/6"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-[#D4A373] group-hover:w-3/6"></span>
              </button>
            </Link>
            <Link href={"/blog-list"}>
              <button
                className={` ${
                  isActive("/blog-list")
                    ? "text-[#D4A373]"
                    : "text-[var(--secondary-600)]"
                } text-base font-normal not-italic font-work-sans group relative w-max`}
              >
                <span>Blog</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-[#D4A373] group-hover:w-3/6"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-[#D4A373] group-hover:w-3/6"></span>
              </button>
            </Link>
            <Link href={"/contact-us"}>
              <button
                className={` ${
                  isActive("/contact-us")
                    ? "text-[#D4A373]"
                    : "text-[var(--secondary-600)]"
                } text-base font-normal not-italic font-work-sans group relative w-max`}
              >
                <span>Contact</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-[#D4A373] group-hover:w-3/6"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-[#D4A373] group-hover:w-3/6"></span>
              </button>
            </Link>
          </div>

          <div className="hidden md:flex w-auto h-auto bg-[var(--secondary-100)] pl-4 py-2 pr-2 rounded-[5px] gap-3">
            <input
              placeholder="Search"
              onChange={(event) => handleSearchFilter(event.target.value)}
              type="search"
              className="bg-[var(--secondary-100)] w-[114px] h-5 outline-none"
              name="q"
              id=""
            />
            {searchQuery && data.length > 0 && (
              <div
                style={{
                  background:
                    "linear-gradient(0deg, rgba(20, 22, 36, 0.40) 0%, rgba(20, 22, 36, 0.40) 100%)",
                }}
                className="absolute overflow-scroll w-[400px] h-[400px] right-[85px] backdrop-blur-sm mt-9 m-auto outline-none rounded-lg p-3"
              >
                <div className="flex flex-col flex-wrap gap-4 text-[var(--secondary-600)] font-work-sans bg-transparent mt-3">
                  {data.map((article, index) => (
                    <Link href={`blog/${article.id}`} key={index}>
                      <div className="w-full text-white hover:backdrop-blur-sm hover:border-x-white h-auto border rounded-md px-2">
                        {article.title}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <button type="submit">
              <img src="/Icons/search-icon.svg" alt="Search Icon" />
            </button>
          </div>

          <div
            className="flex md:hidden w-auto h-auto bg-var(--Secondary-100) cursor-pointer"
            onClick={handleOpenMenu}
          >
            <img src="/Icons/menu-outline.svg" alt="" />
          </div>
        </div>
        <MobileMenu
          isDarkMode={isDarkMode}
          handleOpenMenu={handleOpenMenu}
          isOpenMenu={isOpen}
          handleToggleDarkMode={handleToggleDarkMode}
        />
      </div>
    </div>
  );
};
