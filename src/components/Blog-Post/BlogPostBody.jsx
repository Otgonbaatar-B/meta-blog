import Link from "next/link";

export const BlogPostBody = ({ imgUrl, badge, title, date, articleTrend }) => {
  return (
    <div className="flex flex-col justify-between w-auto h-auto rounded-xl border border-solid border-[var(--secondary-100)] p-4 bg-white gap-4">
      <div
        style={{
          backgroundImage: `url(${imgUrl})`,
          width: "100%",
          height: "240px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "6px",
        }}
      >
        {/* <img src={imgUrl} alt="" srcset="" /> */}
      </div>
      <div>
        <span className="w-auto h-7 bg-[#4B6BFB0D] text-[#4B6BFB] text-sm font-medium font-work-sans px-[10px] py-1 rounded-md">
          {badge}
        </span>
      </div>
      <div className="text-[var(--secondary-800)]] text-lg font-semibold font-work-sans cursor-pointer line-clamp-3">
        <Link href={articleTrend}>{title}</Link>
        {title}
      </div>
      <div className="text-[var(--secondary-400)] text-base font-normal font-work-sans">
        {date}
      </div>
    </div>
  );
};
