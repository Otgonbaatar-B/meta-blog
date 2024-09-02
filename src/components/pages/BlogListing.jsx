import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { BlogPostListing } from "./Blog-Post-Listing/BlogPostListing";

export const BlogListing = ({ articles, handlePlusPage }) => {
  return (
    <>
      <Header />
      <BlogPostListing articles={articles} handlePlusPage={handlePlusPage} />
      <Footer />
    </>
  );
};
export default BlogListing;
