import { TrendingCard } from "./TrendingCard";

export const Trending = ({ articles }) => {
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
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex w-full h-auto justify-center p-4 md:px-20 md:py-4">
        <div className="flex flex-col w-full gap-[30px]">
          <div className="w-auto text-2xl text-[var(--secondary-800)] font-extrabold">
            Trending
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-auto gap-5 ">
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
    </div>
  );
};
