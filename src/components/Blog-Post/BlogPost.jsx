import { BlogPostBody } from "./BlogPostBody";
import { BlogPostHeader } from "./BlogPostHeader";
const blogPostDatas = [
  {
    imgUrl: "/BlogPostImages/BlogPostImg1.svg",
    badge: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    imgUrl: "/BlogPostImages/BlogPostImg2.svg",
    badge: "Design",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    imgUrl: "/BlogPostImages/BlogPostImg3.svg",
    badge: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    imgUrl: "/BlogPostImages/BlogPostImg4.svg",
    badge: "Software",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    imgUrl: "/BlogPostImages/BlogPostImg5.svg",
    badge: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    imgUrl: "/BlogPostImages/BlogPostImg6.svg",
    badge: "Design",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    imgUrl: "/BlogPostImages/BlogPostImg1.svg",
    badge: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    imgUrl: "/BlogPostImages/BlogPostImg1.svg",
    badge: "Software",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    imgUrl: "/BlogPostImages/BlogPostImg1.svg",
    badge: "Design",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
];
export const BlogPost = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col w-full h-auto justify-center p-4 md:px-20 md:py-4 gap-8">
        <BlogPostHeader />
        <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 h-auto gap-2 md:gap-5 m-auto">
          {blogPostDatas.map((data) => {
            return (
              <BlogPostBody
                imgUrl={data.imgUrl}
                badge={data.badge}
                title={data.title}
                date={data.date}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
