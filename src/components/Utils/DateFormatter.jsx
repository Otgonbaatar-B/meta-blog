export const DateFormatter = ({ article }) => {
  const date = new Date(article.published_at);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
