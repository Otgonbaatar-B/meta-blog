import { TrendingCard } from "./TrendingCard";

export const Trending = () => {
  const trendingDatas = [
    {
      imgUrl: "/Images/trend-img1.jpg",
      badge: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      imgUrl: "/Images/Image.svg",
      badge: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      imgUrl: "/Images/trend-img1.jpg",
      badge: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      imgUrl: "/Images/trend-img1.jpg",
      badge: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
    },
  ];

  return (
    <div className="flex w-full h-auto justify-center px-[350px] py-8">
      <div className="flex flex-col w-full gap-[30px]">
        <div className="w-auto text-2xl text-[var(--secondary-800)] font-extrabold">
          Trending
        </div>
        <div className="grid grid-cols-4 h-auto gap-5 ">
          {trendingDatas.map((data) => {
            return (
              <TrendingCard
                badge={data.badge}
                title={data.title}
                imgUrl={data.imgUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
