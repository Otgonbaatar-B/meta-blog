import { useEffect, useState } from "react";
import { BlogPost } from "../BlogPost/BlogPost";
import { Header } from "../Header/Header";
import { Slider } from "../Slider/Carousel";
import { Trending } from "../Trending/Trending";
import { Footer } from "../Footer/Footer";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [tag, setTag] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  //----------------------------------------Fetch----------------------------------------//

  const fetchData = () => {
    setLoading(true);
    fetch(`https://dev.to/api/articles?per_page=9&page=${page}&tag=${tag}`)
      .then((response) => response.json())
      .then((data) => {
        if (page === 1) {
          setArticles(data);
          setLoading(false);
        } else {
          setArticles((prevArticles) => [...prevArticles, ...data]);
          setLoading(false);
        }
      });
  };

  //-----------------------------------------Handles-----------------------------------------//

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setPage(1);
    setArticles([]);
  };

  const handlePlusPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  //---------------------------------------useEffects---------------------------------------//

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    fetchData();
  }, [page, tag]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-gray-night-950 dark:bg-gray-light-950 m-auto gap-[100px]">
      <Header isDarkMode={isDarkMode} handleThemeToggle={handleThemeToggle} />
      <Slider isDarkMode={isDarkMode} />
      <Trending />
      <BlogPost
        articles={articles}
        handlePlusPage={handlePlusPage}
        handleTagChange={handleTagChange}
        loading={loading}
      />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
