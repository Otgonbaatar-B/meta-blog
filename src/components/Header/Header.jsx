import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  const [clickedButton, setClickedButton] = useState("home");

  const handleClick = (tag) => {
    setClickedButton(tag);
    console.log(tag);
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="w-full flex flex-col bg-white items-center justify-center">
      <div className="flex w-full max-w-[1256px]  bg-white justify-center p-4 md:px-20 md:py-4">
        <div className="w-full  bg-white flex justify-between items-center">
          <div className="flex w-auto">
            <img src="/Images/Logo.svg" alt="" />
          </div>
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
            <Link href={""}>
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
          <div className="flex md:hidden w-auto h-auto bg-var(--Secondary-100) cursor-pointer">
            <img src="/Icons/menu-outline.svg" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};
