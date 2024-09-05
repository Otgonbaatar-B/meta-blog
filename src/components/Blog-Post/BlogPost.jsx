import { DateFormatter } from "../util/DateFormatter";
import { BlogPostBody } from "./BlogPostBody";
import { BlogPostHeader } from "./BlogPostHeader";

export const BlogPost = ({
  articles = [],
  handlePlusPage,
  handleTagChange,
  newTag,
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex max-w-[1256px] flex-col w-full h-auto justify-center items-center p-4 md:px-20 md:py-4 gap-8">
        <BlogPostHeader handleTagChange={handleTagChange} />
        <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 h-auto gap-2 md:gap-5 m-auto">
          {articles.map((article) => {
            const formattedDate = <DateFormatter article={article} />;
            const filteredTags = article.tag_list.filter((tag) =>
              tag.includes(newTag)
            );

            return (
              <BlogPostBody
                articleTrend={article.path}
                key={article.id}
                imgUrl={article.cover_image}
                badge={filteredTags[0] || article.tag_list[0]}
                title={article.description}
                date={formattedDate}
              />
            );
          })}
        </div>
        <button
          onClick={handlePlusPage}
          className="flex justify-center items-center w-[123px] h-[48px] border border-[rgba(105,106,117,0.3)] rounded-md px-5 py-3 text-base font-medium text-[var(--secondary-500)]"
        >
          Load More
        </button>
      </div>
    </div>
  );
};
