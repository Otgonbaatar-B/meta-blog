import { useEffect, useState } from "react";
import BlogListing from "../../components/pages/BlogListing";

export default function BlogList() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=12&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        if (page === 1) {
          setArticles(data);
        } else {
          setArticles((prevArticles) => [...prevArticles, ...data]);
        }
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
