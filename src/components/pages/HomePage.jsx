import { useEffect, useState } from "react";
import { BlogPost } from "../BlogPost/BlogPost";
import { Slider } from "../Carousel/Carousel";
import { Trending } from "../Trending/Trending";
import { useTheme } from "../Utils/ThemeContext";

export default function HomePage() {
  const { isDarkMode, handleThemeToggle } = useTheme();
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [tag, setTag] = useState("");
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
  //---------------------------------------useEffects---------------------------------------//
  useEffect(() => {
    fetchData();
  }, [page, tag]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-gray-night-950 dark:bg-gray-light-950 m-auto gap-[100px]">
      <Slider isDarkMode={isDarkMode} />
      <Trending />
      <BlogPost
        articles={articles}
        handlePlusPage={handlePlusPage}
        handleTagChange={handleTagChange}
        loading={loading}
      />
    </div>
  );
}
