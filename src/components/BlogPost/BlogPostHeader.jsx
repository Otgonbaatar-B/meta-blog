import Link from "next/link";
import { useState, useEffect } from "react";

export const BlogPostHeader = ({ handleTagChange }) => {
  const [clickedButton, setClickedButton] = useState("");

  // useEffect(() => {
  //   document.getElementById("button").click();
  // }, []);

  const handleClick = (tag) => {
    setClickedButton(tag);
    handleTagChange(tag);
  };

  return (
    <div className="flex flex-col w-full gap-8">
      <h1 className="flex w-auto h-auto dark:text-gray-night-900 text-gray-light-900 text-2xl font-bold font-work-sans">
        All Blog Posts
      </h1>
      <div className="hidden md:flex justify-between w-full">
        <div className="flex w-auto gap-5">
          <button
            id="button"
            onClick={() => handleClick("")}
            className={`text-xs font-bold ${
              clickedButton === ""
                ? "text-[#D4A373]"
                : "dark:text-gray-night-600 text-gray-light-600"
            } hover:text-[#D4A373] dark:hover:text-[#D4A373] font-work-sans`}
          >
            All
          </button>

          <button
            onClick={() => handleClick("learning")}
            className={`text-xs font-bold ${
              clickedButton === "learning"
                ? "text-[#D4A373]"
                : "dark:text-gray-night-600 text-gray-light-600"
            } hover:text-[#D4A373] dark:hover:text-[#D4A373] font-work-sans`}
          >
            Learning
          </button>
          <button
            onClick={() => handleClick("webdev")}
            className={`text-xs font-bold ${
              clickedButton === "webdev"
                ? "text-[#D4A373]"
                : "dark:text-gray-night-600 text-gray-light-600"
            } hover:text-[#D4A373] dark:hover:text-[#D4A373] font-work-sans`}
          >
            Web Dev
          </button>
          <button
            onClick={() => handleClick("frontend")}
            className={`text-xs font-bold ${
              clickedButton === "frontend"
                ? "text-[#D4A373]"
                : "dark:text-gray-night-600 text-gray-light-600"
            } hover:text-[#D4A373] dark:hover:text-[#D4A373] font-work-sans`}
          >
            Front-End
          </button>
          <button
            onClick={() => handleClick("javascript")}
            className={`text-xs font-bold ${
              clickedButton === "javascript"
                ? "text-[#D4A373]"
                : "dark:text-gray-night-600 text-gray-light-600"
            } hover:text-[#D4A373] dark:hover:text-[#D4A373] font-work-sans`}
          >
            Javascript
          </button>
          <button
            onClick={() => handleClick("coding")}
            className={`text-xs font-bold ${
              clickedButton === "coding"
                ? "text-[#D4A373]"
                : "dark:text-gray-night-600 text-gray-light-600"
            } hover:text-[#D4A373] dark:hover:text-[#D4A373] font-work-sans`}
          >
            Coding
          </button>
          <button
            onClick={() => handleClick("programming")}
            className={`text-xs font-bold ${
              clickedButton === "programming"
                ? "text-[#D4A373]"
                : "dark:text-gray-night-600 text-gray-light-600"
            } hover:text-[#D4A373] dark:hover:text-[#D4A373] font-work-sans`}
          >
            Programming
          </button>
        </div>
        <button>
          <Link href="./blog-list">
            <p className="text-xs font-bold dark:text-gray-night-600 text-gray-light-600 hover:text-[#D4A373] dark:hover:text-[#D4A373] font-work-sans">
              View All
            </p>
          </Link>
        </button>
      </div>
    </div>
  );
};
