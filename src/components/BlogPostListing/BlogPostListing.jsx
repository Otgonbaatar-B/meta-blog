import { DateFormatter } from "@/components/Utils/DateFormatter";
import { BlogPostListingBody } from "./BlogPostListingBody";
import Link from "next/link";

export const BlogPostListing = ({ articles = [], handlePlusPage, loading }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="container max-w-[1256px] flex flex-col w-full h-auto justify-center items-center p-4 md:px-20 md:py-4 gap-8">
        <div className="flex flex-col w-full gap-8">
          <h1 className="flex w-auto h-auto text-[var(--secondary-800)] text-2xl font-bold font-work-sans">
            All Blog Post
          </h1>
        </div>
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
                  <Link href={`blog/${article.id}`}>
                    <BlogPostListingBody
                      key={article.id}
                      imgUrl={article.cover_image}
                      badges={article.tag_list}
                      title={article.description}
                      userName={article.user.name}
                      userImg={article.user.profile_image_90}
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
