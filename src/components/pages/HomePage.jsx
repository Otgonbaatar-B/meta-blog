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

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=6&page=${page}&tag=${tag}`)
      .then((response) => response.json())
      .then((data) => {
        if (page === 1) {
          setArticles(data);
        } else {
          setArticles((prevArticles) => [...prevArticles, ...data]);
        }

        setTrendingData(
          data
            .sort((a, b) => b.public_reactions_count - a.public_reactions_count)
            .slice(0, 4)
        );
      });
  };

  const handleTagChange = (newTag) => {
    setTag(newTag);
    console.log(newTag);
    setPage(1);
    setArticles([]);
  };

  const handlePlusPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchData();
  }, [page, tag]);

  return (
    <div className="container flex flex-col max-w-[1216px] w-auto h-full m-auto gap-[100px]">
      <Header />
      <Slider imgUrl={"/Images/Image.svg"} />
      <Trending trendingData={trendingData} />
      <BlogPost
        articles={articles}
        handlePlusPage={handlePlusPage}
        handleTagChange={handleTagChange}
      />
      <Footer />
    </div>
  );
}
