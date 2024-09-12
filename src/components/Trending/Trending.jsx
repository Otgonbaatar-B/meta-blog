import Link from "next/link";
import { TrendingCard } from "./TrendingCard";
import { useEffect, useState } from "react";

export const Trending = () => {
  const [trendingArticles, setTrendingArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTrendingData = () => {
    setLoading(true);
    fetch(`https://dev.to/api/articles?per_page=4&top=4`)
      .then((response) => response.json())
      .then((data) => {
        setTrendingArticles(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTrendingData();
  }, []);

  return (
    <div className="w-full flex flex-col bg-gray-night-950 dark:bg-gray-light-950 items-center justify-center">
      <div className="w-full max-w-[1256px] flex flex-col items-center justify-center">
        <div className="flex w-full h-auto justify-center p-4 md:px-20 md:py-4">
          <div className="flex flex-col w-full gap-[30px]">
            <div className="w-auto text-2xl dark:text-gray-night-900 text-gray-light-900 font-work-sans font-extrabold">
              Trending
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-auto gap-5">
              {loading
                ? Array.from({ length: 4 }).map((_, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-end items-start gap-3 p-4 md:px-4 md:py-4 rounded-xl bg-gray-200 animate-pulse"
                    >
                      <div className="skeleton h-60 w-full rounded-xl bg-gray-300"></div>
                      <div className="skeleton h-4 w-3/4 mt-2 bg-gray-300"></div>
                      <div className="skeleton h-4 w-1/2 bg-gray-300"></div>
                    </div>
                  ))
                : trendingArticles.map((data) => (
                    <Link key={data.id} href={`blog/${data.id}`} passHref>
                      <TrendingCard
                        badge={data.tag_list[0]}
                        title={data.description}
                        imgUrl={data.cover_image}
                      />
                    </Link>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
