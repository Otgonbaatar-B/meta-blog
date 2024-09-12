import { useEffect, useState } from "react";
import { CloseIconDark } from "../Icons/CloseIconDark";
import { CloseIconLight } from "../Icons/CloseIconLight";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { MetaBlog, MetaBlogLight, MetaBlogNight } from "../Icons/MetaBlog";

export const MobileMenu = ({
  handleOpenMenu,
  isOpenMenu,
  isDarkMode,
  handleThemeToggle,
}) => {
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
      filter.title.toLowerCase().includes(value.toLowerCase())
    );
    setData(filteredArray);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenMenu]);

  return (
    <div
      // onClick={handleOpenMenu}
      className={`absolute transition-all duration-500 ease-in-out ${
        isOpenMenu ? "right-0" : "left-[-150%]"
      } flex justify-end min-w-[375px] w-full h-screen bg-[rgba(17,24,39,0.1)] dark:bg-[rgba(31,41,55,0.1)] backdrop-blur-sm`}
    >
      <div className="menu flex flex-col w-[320px] h-full bg-white dark:bg-gray-night ">
        <div className="flex space-between p-4 border-solid border-b dark:border-gray-light-700 border-gray-night-700">
          <div className="flex w-full">
            <div className="flex w-auto cursor-pointer">
              {/* <img src="/Images/Logo.svg" alt="" /> */}
              {isDarkMode ? <MetaBlogNight /> : <MetaBlogLight />}
            </div>
          </div>
          <button
            onClick={handleOpenMenu}
            className="flex justify-end w-full h-auto"
          >
            {isDarkMode ? <CloseIconDark /> : <CloseIconLight />}
          </button>
        </div>
        <div className="flex flex-col p-4 gap-4 border-solid border-b dark:border-gray-light-700 border-gray-night-700">
          <Link href={"/"}>
            <h1 className="text-gray-light-600 dark:text-gray-night-600 cursor-pointer">
              Home
            </h1>
          </Link>
          <Link href={"/blog-list"}>
            <h1 className="text-gray-light-600 dark:text-gray-night-600 cursor-pointer">
              Blog
            </h1>
          </Link>
          <Link href={"/contact-us"}>
            <h1 className="text-gray-light-600 dark:text-gray-night-600 cursor-pointer">
              Contact
            </h1>
          </Link>
        </div>
        <div className="flex items-center border-b dark:border-gray-light-700 border-gray-night-700 p-4">
          <input
            type="checkbox"
            id="checkbox"
            className="hidden"
            checked={isDarkMode}
            onChange={handleThemeToggle}
          />
          <label
            htmlFor="checkbox"
            className="flex items-center justify-center w-14 h-7 bg-gray-400 dark:bg-gray-600 rounded-full p-1 cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faMoon}
              className={`text-yellow-500 ${isDarkMode ? "" : "opacity-0"}`}
            />
            <FontAwesomeIcon
              icon={faSun}
              className={`text-yellow-400 translate-x-5 ${
                isDarkMode ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                isDarkMode ? "translate-x-0" : "-translate-x-7"
              }`}
            ></span>
          </label>
        </div>
        <div className="flex flex-col p-4 gap-4">
          <form
            action="https://www.google.com/search"
            method="GET"
            className="flex w-[160px] h-auto bg-[var(--secondary-100)] pl-4 py-2 pr-2 rounded-[5px] "
          >
            <input
              type="search"
              placeholder="Search"
              onChange={(event) => handleSearchFilter(event.target.value)}
              className="bg-[var(--secondary-100)] w-[114px] h-5 outline-none"
              name="q"
            />
            <button type="submit">
              <img src="/Icons/search-icon.svg" alt="Search Icon" />
            </button>
          </form>
        </div>
        {searchQuery && data.length > 0 && (
          <div className="w-full h-auto overflow-scroll p-4 border dark:border-gray-light-700 border-gray-night-700">
            <div className="flex flex-col text-clip text-gray-light-950 dark:text-gray-night-950 font-work-sans bg-transparent backdrop-blur-sm gap-2">
              {data.map((article, index) => (
                <Link href={`/blog/${article.id}`} key={index}>
                  <button
                    onClick={handleOpenMenu}
                    className="w-full h-auto border dark:border-gray-light-700 border-gray-night-700 rounded-lg p-1"
                  >
                    {article.title}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        )}
        {searchQuery && data.length === 0 && (
          <div className="p-4 text-gray-500">Хайлт олдсонгүй.</div>
        )}
      </div>
    </div>
  );
};
