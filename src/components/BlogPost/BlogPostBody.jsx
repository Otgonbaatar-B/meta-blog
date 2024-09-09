import Link from "next/link";

export const BlogPostBody = ({ articles, imgUrl, badges, title, date }) => {
  return (
    <div className="flex flex-col justify-between w-auto h-auto rounded-xl border border-solid border-[var(--secondary-100)] p-4 bg-white gap-4 shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
      <div
        style={{
          backgroundImage: `url(${
            imgUrl
              ? imgUrl
              : "https://images.squarespace-cdn.com/content/v1/62f9aaa33a6fe8320f52f5aa/1673511295216-OKBJ25VEVMSY116D6MES/noimage.jpg"
          })`,
          width: "100%",
          height: "240px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "6px",
        }}
      >
        {/* <img src={imgUrl} alt="" srcset="" /> */}
      </div>
      <div className="flex flex-wrap gap-1">
        {badges.map((badge) => {
          return (
            <span className="flex w-auto h-auto bg-[#4B6BFB0D] text-[#4B6BFB] text-sm font-medium font-work-sans px-[10px] py-1 rounded-md">
              {badge}
            </span>
          );
        })}
      </div>

      <div className="text-[var(--secondary-800)]] text-lg font-semibold font-work-sans cursor-pointer line-clamp-3">
        {title}
      </div>
      <div className="text-[var(--secondary-400)] text-base font-normal font-work-sans">
        {date}
      </div>
    </div>
  );
};
