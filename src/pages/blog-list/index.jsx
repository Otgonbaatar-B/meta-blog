import { useEffect, useState } from "react";
import BlogListing from "../../components/Pages/BlogListing";

const BlogListPage = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);

    fetch(`https://dev.to/api/articles?per_page=12&page=${page}`)
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

  const handlePlusPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <main>
      <BlogListing
        articles={articles}
        handlePlusPage={handlePlusPage}
        loading={loading}
      />
      ;
    </main>
  );
};

export default BlogListPage;
