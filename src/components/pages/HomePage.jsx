import { useEffect, useState } from "react";
import { BlogPost } from "../Blog-Post/BlogPost";
import { Header } from "../Header/Header";
import { Slider } from "../Slider/Slider";
import { Trending } from "../Trending/Trending";
import { Footer } from "../Footer/Footer";

export default function HomePage() {
  const [articles, setArticles] = useState([]);
  const [trendingData, setTrendingData] = useState([]);
  const [page, setPage] = useState(1);
  const [tag, setTag] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=9&page=${page}&tag=${tag}`)
      .then((response) => response.json())
      .then((data) => {
        if (page === 1) {
          setArticles(data);
        } else {
          setArticles((prevArticles) => [...prevArticles, ...data]);
        }
      });
  };

  const fetchTrendingData = () => {
    fetch(`https://dev.to/api/articles?per_page=4&top=4`)
      .then((response) => response.json())
      .then((data) => {
        setTrendingData(data);
      });
  };

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setPage(1);
    setArticles([]);
  };

  const handlePlusPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  useEffect(() => {
    fetchData();
    fetchTrendingData();
  }, [page, tag]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full m-auto gap-[100px]">
      <Header
        isDarkMode={isDarkMode}
        handleToggleDarkMode={handleToggleDarkMode}
      />
      <Slider />
      <Trending trendingData={trendingData} />
      <BlogPost
        articles={articles}
        handlePlusPage={handlePlusPage}
        handleTagChange={handleTagChange}
        // path={articles.path}
      />
      <Footer />
    </div>
  );
}
