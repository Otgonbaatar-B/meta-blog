import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { MetaBlogLight, MetaBlogNight } from "../Icons/MetaBlog";

export const Header = ({ handleThemeToggle, isDarkMode }) => {
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

  const startSpeechRecognition = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Таны яриа таних боломжгүй байна");
      return;
    }
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.start();
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
      handleSearchFilter(transcript);
    };
    recognition.onerror = (event) => {
      console.error("Error:", event.error);
    };
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex w-full fixed max-w-[1256px] justify-center mt-16 md:px-20">
        <div className="w-full h-[70px] bg-gray-night-950 dark:bg-gray-light-950 flex justify-between items-center px-4 xl:px-1 lg:px-0 md:px-0 md:py-4 ">
          <Link href={"/"}>
            <div className="flex w-auto cursor-pointer">
              {isDarkMode ? <MetaBlogNight /> : <MetaBlogLight />}
            </div>
          </Link>
          <div className="hidden lg:flex w-auto gap-10">
            <Link href={"/"}>
              <button
                className={` ${
                  isActive("/")
                    ? "text-[#D4A373]"
                    : "text-gray-light-600 dark:text-gray-night-600"
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
                    : "text-gray-light-600 dark:text-gray-night-600"
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
                    : "text-gray-light-600 dark:text-gray-night-600"
                } text-base font-normal not-italic font-work-sans group relative w-max`}
              >
                <span>Contact</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-[#D4A373] group-hover:w-3/6"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-[#D4A373] group-hover:w-3/6"></span>
              </button>
            </Link>
          </div>
          <div className="flex gap-5">
            <div className="hidden lg:flex items-center">
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
            <div className="hidden md:flex w-auto h-auto bg-[var(--secondary-100)] pl-4 py-2 pr-2 rounded-[5px] gap-3">
              <input
                placeholder="Search"
                onChange={(event) => handleSearchFilter(event.target.value)}
                value={searchQuery}
                type="search"
                className="bg-[var(--secondary-100)] w-[114px] h-5 outline-none"
                name="q"
                id=""
              />
              <button type="button" onClick={startSpeechRecognition}>
                <FontAwesomeIcon
                  className="hover:shadow-2xl"
                  icon={faMicrophone}
                  style={{ color: "#52525b" }}
                />
              </button>
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
                      <Link href={`/blog/${article.id}`} key={index}>
                        <div
                          className={`w-full text-white hover:backdrop-blur-sm hover:border-x-white h-auto border rounded-md px-2`}
                        >
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
          </div>
          <div
            className="flex md:hidden w-auto h-auto bg-var(--secondary-100) cursor-pointer"
            onClick={handleOpenMenu}
          >
            <img src="/Icons/menu-outline.svg" alt="" />
          </div>
        </div>
        <MobileMenu
          isDarkMode={isDarkMode}
          handleOpenMenu={handleOpenMenu}
          isOpenMenu={isOpen}
          handleThemeToggle={handleThemeToggle}
        />
      </div>
    </div>
  );
};
