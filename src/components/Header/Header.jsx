import Link from "next/link";
import { useEffect, useState } from "react";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { MoonIcon } from "../Icons/MoonIcon";
import { SunIcon } from "../Icons/SunIcon";

export const Header = ({ handleToggleDarkMode, isDarkMode }) => {
  const [clickedButton, setClickedButton] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (tag) => {
    setClickedButton(tag);
    console.log(tag);
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="w-full flex flex-col bg-white items-center justify-center">
      <div className="flex w-full max-w-[1256px]  bg-white justify-center md:px-20 md:py-4">
        <div className="w-full  bg-white flex justify-between items-center">
          <Link href={"/"}>
            <div className="flex w-auto cursor-pointer">
              <img src="/Images/Logo.svg" alt="" />
            </div>
          </Link>
          <div className="hidden md:flex w-auto gap-10">
            <Link href={"/"}>
              <button
                className={` ${
                  clickedButton === "home"
                    ? "text-[#D4A373]"
                    : "text-[var(--secondary-600)]"
                } text-base font-normal not-italic font-work-sans`}
                onClick={() => handleClick("home")}
              >
                Home
              </button>
            </Link>
            <Link href={"./bloglist"}>
              <button
                className={` ${
                  clickedButton === "blog"
                    ? "text-[#D4A373]"
                    : "text-[var(--secondary-600)]"
                } text-base font-normal not-italic font-work-sans`}
                onClick={() => handleClick("blog")}
              >
                Blog
              </button>
            </Link>
            <Link href={"./contact-us"}>
              <button
                className={` ${
                  clickedButton === "contact"
                    ? "text-[#D4A373]"
                    : "text-[var(--secondary-600)]"
                } text-base font-normal not-italic font-work-sans`}
                onClick={() => handleClick("contact")}
              >
                Contact
              </button>
            </Link>
          </div>
          <div className="hidden md:flex header-action h-9 items-center gap-4">
            <div className="cursor-pointer" onClick={handleToggleDarkMode}>
              {isDarkMode ? <MoonIcon /> : <SunIcon />}
            </div>
          </div>
          <div className="hidden md:flex w-auto h-auto bg-[var(--secondary-100)] pl-4 py-2 pr-2 rounded-[5px] gap-3">
            <input
              type="search"
              placeholder="Search"
              className="bg-[var(--secondary-100)] w-[114px] h-5 outline-none"
              name=""
              id=""
            />
            <img src="/Icons/search-icon.svg" alt="" srcset="" />
          </div>
          <div
            className="flex md:hidden w-auto h-auto bg-var(--Secondary-100) cursor-pointer"
            onClick={handleOpenMenu}
          >
            <img src="/Icons/menu-outline.svg" alt="" srcset="" />
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
