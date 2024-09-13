import { useEffect, useState } from "react";
import { SliderContent } from "./CarouselContent";
import { DateFormatter } from "../Utils/DateFormatter";
import Link from "next/link";
import {
  BackButtonLight,
  BackButtonNight,
  ForwardButtonLight,
  ForwardButtonNight,
} from "../Icons/BackForwardButton";
import { useTheme } from "../Utils/ThemeContext";

export const Slider = () => {
  const { isDarkMode } = useTheme();
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const fetchData = () => {
    setLoading(true);
    fetch(`https://dev.to/api/articles?per_page=1&page=${page}&top=5`)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      });
  };

  const handleBackBtn = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handleForwardBtn = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleForwardBtn();
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="w-full flex flex-col bg-gray-night-950 dark:bg-gray-light-950 items-center justify-center">
      <div className="flex justify-center items-center max-w-[1096px] w-full h-auto p-4 md:p-0">
        <div className="container w-full flex flex-col items-center justify-center gap-3">
          {loading ? (
            <div className="container w-full h-[600px] flex flex-col justify-end items-start gap-3 p-4 md:px-4 md:py-4 rounded-xl">
              <div className="skeleton h-full w-[1096px] rounded-xl bg-gray-300 animate-pulse"></div>
              <div className="skeleton h-[500px] w-[600px] rounded-xl bg-gray-300 animate-pulse"></div>
            </div>
          ) : (
            articles.map((data) => (
              <div
                key={data.id}
                className="container w-auto h-[600px] flex flex-col justify-end items-start gap-3 p-4 md:px-4 md:py-4 rounded-xl"
                style={{
                  backgroundImage: `url(${
                    data.cover_image
                      ? data.cover_image
                      : "https://images.squarespace-cdn.com/content/v1/62f9aaa33a6fe8320f52f5aa/1673511295216-OKBJ25VEVMSY116D6MES/noimage.jpg"
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "600px",
                }}
              >
                <div className="flex w-auto h-auto bg-center">
                  {articles.map((article) => {
                    const formattedDate = <DateFormatter article={article} />;
                    return (
                      <Link href={`blog/${data.id}`} key={article.id}>
                        <SliderContent
                          badge={article.tag_list[0]}
                          title={article.description}
                          date={formattedDate}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))
          )}

          <div className="flex w-full justify-end items-end">
            <div className="flex w-auto h-auto gap-2">
              <button
                className="shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 rounded-lg"
                onClick={handleBackBtn}
              >
                {/* <img src="/Icons/back.svg" alt="Back" /> */}

                {isDarkMode ? <BackButtonNight /> : <BackButtonLight />}
              </button>
              <button
                className="shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 rounded-lg"
                onClick={handleForwardBtn}
              >
                {/* <img src="/Icons/forward.svg" alt="Forward" /> */}
                {isDarkMode ? <ForwardButtonNight /> : <ForwardButtonLight />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
