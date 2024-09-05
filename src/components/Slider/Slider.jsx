import { useEffect, useState } from "react";
import { SliderContent } from "./SliderContent";
import { DateFormatter } from "../util/DateFormatter";

export const Slider = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=1&page=${page}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
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

  useEffect(() => {
    const interval = setInterval(() => {
      handleForwardBtn();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center max-w-[1056px] w-full h-auto p-4 md:p-0">
      <div className="container w-full flex flex-col items-center justify-center gap-3">
        {articles.map((data) => (
          <div
            key={data.id}
            className="container w-auto h-[600px] flex flex-col justify-end items-start gap-3 p-4 md:px-4 md:py-4 rounded-xl"
            style={{
              backgroundImage: `url(${data.cover_image})`,
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
                  <SliderContent
                    key={article.id}
                    badge={article.tag_list[0]}
                    title={article.description}
                    date={formattedDate}
                  />
                );
              })}
            </div>
          </div>
        ))}

        <div className="flex w-full justify-end items-end">
          <div className="flex w-auto h-auto gap-2">
            <button onClick={handleBackBtn}>
              <img src="/Icons/back.svg" alt="" />
            </button>
            <button onClick={handleForwardBtn}>
              <img src="/Icons/forward.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
