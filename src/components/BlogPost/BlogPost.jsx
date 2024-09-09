import Link from "next/link";
import { DateFormatter } from "../Utils/DateFormatter";
import { BlogPostBody } from "./BlogPostBody";
import { BlogPostHeader } from "./BlogPostHeader";

export const BlogPost = ({
  articles = [],
  handlePlusPage,
  handleTagChange,
  loading,
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex max-w-[1256px] flex-col w-full h-auto justify-center items-center p-4 md:px-20 md:py-4 gap-8">
        <BlogPostHeader handleTagChange={handleTagChange} />
        <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 h-auto gap-2 md:gap-5 m-auto">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-end items-start gap-3 p-4 md:px-4 md:py-4 rounded-xl bg-gray-200 animate-pulse"
                >
                  <div className="skeleton h-80 w-80 rounded-xl bg-gray-300"></div>
                  <div className="skeleton h-4 w-3/4 mt-2 bg-gray-300"></div>
                  <div className="skeleton h-4 w-1/2 bg-gray-300"></div>
                </div>
              ))
            : articles.map((article) => {
                const formattedDate = <DateFormatter article={article} />;
                return (
                  <Link key={article.id} href={`blog/${article.id}`} passHref>
                    <BlogPostBody
                      imgUrl={article.cover_image}
                      badges={article.tag_list}
                      title={article.description}
                      date={formattedDate}
                    />
                  </Link>
                );
              })}
        </div>
        <button
          onClick={handlePlusPage}
          className="flex justify-center items-center w-[123px] h-[48px] border border-[rgba(105,106,117,0.3)] rounded-md px-5 py-3 text-base font-medium text-[var(--secondary-500)] shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
        >
          Load More
        </button>
      </div>
    </div>
  );
};
