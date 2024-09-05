import { useEffect } from "react";
import { CloseIconDark } from "../Icons/CloseIconDark";
import { CloseIconLight } from "../Icons/CloseIconLight";
import { MoonIcon } from "../Icons/MoonIcon";
import { SunIcon } from "../Icons/SunIcon";
import Link from "next/link";

export const MobileMenu = ({
  isDarkMode,
  handleOpenMenu,
  isOpenMenu,
  handleToggleDarkMode,
}) => {
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
      className={`absolute transition-all duration-100000 ease-in-out ${
        isOpenMenu ? "right-0" : "left-[-100%]"
      } flex justify-end min-w-[375px] w-full h-screen bg-[rgba(17,24,39,0.1)] dark:bg-[rgba(31,41,55,0.1)] backdrop-blur-sm `}
    >
      <div className="menu flex flex-col w-[320px] h-full bg-white dark:bg-gray-night ">
        <div className="flex space-between p-4 border-solid border-b border-gray-light-100 dark:border-gray-night-100">
          <div className="flex w-full">
            <div className="flex w-auto cursor-pointer">
              <img src="/Images/Logo.svg" alt="" />
            </div>
          </div>
          <button
            onClick={handleOpenMenu}
            className="flex justify-end w-full h-auto"
          >
            {isDarkMode ? <CloseIconDark /> : <CloseIconLight />}
          </button>
        </div>
        <div className="flex flex-col p-4 gap-4 border-solid border-b border-gray-light-100 dark:border-gray-night-100">
          <Link href={"/"}>
            <h1 className="text-gray-light-600 dark:text-gray-night-600 cursor-pointer">
              Home
            </h1>
          </Link>
          <Link href={"/bloglist"}>
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
        <div className="flex flex-col p-4 gap-4">
          <div className="flex space-between items-center">
            <div className="w-full text-gray-light-600 dark:text-gray-night-600">
              Switch Theme
            </div>
            <div className="cursor-pointer" onClick={handleToggleDarkMode}>
              {isDarkMode ? <MoonIcon /> : <SunIcon />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
