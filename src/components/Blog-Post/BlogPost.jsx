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
    <div className="flex flex-col w-full h-auto justify-center px-[350px] py-8 gap-8">
      <BlogPostHeader />
      <div className="grid grid-cols-3 h-auto gap-5 ">
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
  );
};
