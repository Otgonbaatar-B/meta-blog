export const BlogPostHeader = ({ handleTagChange }) => {
  return (
    <div className="flex flex-col w-full gap-8">
      <h1 className="flex w-auto h-auto text-[var(--secondary-800)] text-2xl font-bold">
        All Blog Post
      </h1>
      <div className="hidden md:flex justify-between w-full">
        <div className="flex w-auto gap-5">
          <button
            onClick={() => handleTagChange("")}
            className="text-xs font-bold text-[#495057] hover:text-[#D4A373]"
          >
            All
          </button>
          <button
            onClick={() => handleTagChange("learning")}
            className="text-xs font-bold text-[#495057] hover:text-[#D4A373]"
          >
            Learning
          </button>
          <button
            onClick={() => handleTagChange("beginner")}
            className="text-xs font-bold text-[#495057] hover:text-[#D4A373]"
          >
            Beginner
          </button>
          <button
            onClick={() => handleTagChange("frontend")}
            className="text-xs font-bold text-[#495057] hover:text-[#D4A373]"
          >
            Front-End
          </button>
          <button
            onClick={() => handleTagChange("javascript")}
            className="text-xs font-bold text-[#495057] hover:text-[#D4A373]"
          >
            Javascript
          </button>
          <button
            onClick={() => handleTagChange("coding")}
            className="text-xs font-bold text-[#495057] hover:text-[#D4A373]"
          >
            Coding
          </button>
          <button
            onClick={() => handleTagChange("programming")}
            className="text-xs font-bold text-[#495057] hover:text-[#D4A373]"
          >
            Programming
          </button>
        </div>
        <button className="text-xs font-bold text-[#495057]">View All</button>
      </div>
    </div>
  );
};
