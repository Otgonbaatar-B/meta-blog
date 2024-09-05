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
      <h1 className="flex w-auto h-auto text-[var(--secondary-800)] text-2xl font-bold font-work-sans">
        All Blog Posts
      </h1>
      <div className="hidden md:flex justify-between w-full">
        <div className="flex w-auto gap-5">
          <button
            id="button"
            onClick={() => handleClick("")}
            className={`text-xs font-bold ${
              clickedButton === "" ? "text-[#D4A373]" : "text-[#495057]"
            } hover:text-[#D4A373] font-work-sans`}
          >
            All
          </button>

          <button
            onClick={() => handleClick("learning")}
            className={`text-xs font-bold ${
              clickedButton === "learning" ? "text-[#D4A373]" : "text-[#495057]"
            } hover:text-[#D4A373] font-work-sans`}
          >
            Learning
          </button>
          <button
            onClick={() => handleClick("beginner")}
            className={`text-xs font-bold ${
              clickedButton === "beginner" ? "text-[#D4A373]" : "text-[#495057]"
            } hover:text-[#D4A373] font-work-sans`}
          >
            Beginner
          </button>
          <button
            onClick={() => handleClick("frontend")}
            className={`text-xs font-bold ${
              clickedButton === "frontend" ? "text-[#D4A373]" : "text-[#495057]"
            } hover:text-[#D4A373] font-work-sans`}
          >
            Front-End
          </button>
          <button
            onClick={() => handleClick("javascript")}
            className={`text-xs font-bold ${
              clickedButton === "javascript"
                ? "text-[#D4A373]"
                : "text-[#495057]"
            } hover:text-[#D4A373] font-work-sans`}
          >
            Javascript
          </button>
          <button
            onClick={() => handleClick("coding")}
            className={`text-xs font-bold ${
              clickedButton === "coding" ? "text-[#D4A373]" : "text-[#495057]"
            } hover:text-[#D4A373] font-work-sans`}
          >
            Coding
          </button>
          <button
            onClick={() => handleClick("programming")}
            className={`text-xs font-bold ${
              clickedButton === "programming"
                ? "text-[#D4A373]"
                : "text-[#495057]"
            } hover:text-[#D4A373] font-work-sans`}
          >
            Programming
          </button>
        </div>
        <button>
          <Link href="./bloglist">
            <p className="text-xs font-bold text-[#495057] hover:text-[#D4A373] font-work-sans">
              View All
            </p>
          </Link>
        </button>
      </div>
    </div>
  );
};
