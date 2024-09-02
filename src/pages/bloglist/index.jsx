import { useEffect, useState } from "react";
import BlogListing from "../../components/pages/BlogListing";

export default function BlogList() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=6&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setArticles((prevArticles) => [...prevArticles, ...data]);
      });
  };

  const handlePlusPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchData();
  }, [page]);
  return <BlogListing articles={articles} handlePlusPage={handlePlusPage} />;
}
