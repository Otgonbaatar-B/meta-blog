import { useEffect, useState } from "react";
import { BlogPost } from "../Blog-Post/BlogPost";
import { Header } from "../Header/Header";
import { Slider } from "../Slider/Slider";
import { Trending } from "../Trending/Trending";
import { Footer } from "../Footer/Footer";

export default function HomePage() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=4&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        // Append new data to the existing articles
        setArticles((prevArticles) => [...prevArticles, ...data]);
      });
  };

  const handlePlusPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="container flex flex-col max-w-[1216px] w-auto h-full m-auto gap-[100px]">
      <Header />
      <Slider imgUrl={"/Images/Image.svg"} />
      <Trending articles={articles} />
      <BlogPost articles={articles} handlePlusPage={handlePlusPage} />
      <Footer />
    </div>
  );
}
