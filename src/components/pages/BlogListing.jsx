import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { BlogPostListing } from "../BlogPostListing/BlogPostListing";

export const BlogListing = ({ articles, handlePlusPage, loading }) => {
  return (
    <div>
      <div className="flex flex-col gap-[100px]">
        <BlogPostListing
          articles={articles}
          handlePlusPage={handlePlusPage}
          loading={loading}
        />
      </div>
    </div>
  );
};
export default BlogListing;
