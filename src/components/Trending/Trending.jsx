import { TrendingCard } from "./TrendingCard";

export const Trending = ({ trendingData }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex w-full h-auto justify-center p-4 md:px-20 md:py-4">
        <div className="flex flex-col w-full gap-[30px]">
          <div className="w-auto text-2xl text-[var(--secondary-800)] font-work-sans font-extrabold">
            Trending
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-auto gap-5">
            {trendingData.map((data) => {
              return (
                <TrendingCard
                  key={data.id}
                  badge={data.tag_list[0]}
                  title={data.description}
                  imgUrl={data.cover_image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
