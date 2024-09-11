import { useEffect, useState } from "react";
import { BlogPost } from "../BlogPost/BlogPost";
import { Header } from "../Header/Header";
import { Slider } from "../Slider/Slider";
import { Trending } from "../Trending/Trending";
import { Footer } from "../Footer/Footer";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  // const [searchArticles, setSearchArticles] = useState([]);
  // const [data, setData] = useState([]);
  const [trendingData, setTrendingData] = useState([]);
  const [page, setPage] = useState(1);
  const [tag, setTag] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const fetchTrendingData = () => {
    setLoading(true);
    fetch(`https://dev.to/api/articles?per_page=4&top=4`)
      .then((response) => response.json())
      .then((data) => {
        setTrendingData(data);
        setLoading(false);
      });
  };

  // const fetchSearchData = () => {
  //   fetch(`https://dev.to/api/articles`)
  //     .then((response) => response.json())
  //     .then((data) => setSearchArticles(data));
  // };

  // const handleSearchFilter = (value) => {
  //   const filteredArray = searchArticles.filter((filter) =>
  //     filter.title.toLowerCase().includes(value)
  //   );

  //   setData(filteredArray);
  // };

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setPage(1);
    setArticles([]);
  };

  const handlePlusPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    fetchData();
    fetchTrendingData();
  }, [page, tag]);

  // useEffect(() => {
  //   fetchSearchData();
  // }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-gray-night-950 dark:bg-gray-light-950 m-auto gap-[100px]">
      <Header
        // data={data}
        // handleSearchFilter={handleSearchFilter}
        isDarkMode={isDarkMode}
        handleToggle={handleToggle}
      />
      <Slider isDarkMode={isDarkMode} />
      <Trending trendingData={trendingData} loading={loading} />
      <BlogPost
        articles={articles}
        handlePlusPage={handlePlusPage}
        handleTagChange={handleTagChange}
        loading={loading}
        // path={articles.path}
      />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
