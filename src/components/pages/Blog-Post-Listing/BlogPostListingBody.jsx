export const BlogPostListingBody = ({ imgUrl, badge, title, date }) => {
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
      <div className="w-auto h-7 bg-[#4B6BFB0D] text-[#4B6BFB] text-sm font-medium px-[10px] py-1 rounded-md">
        <span>{badge}</span>
      </div>
      <div className="text-[var(--secondary-800)]] text-lg font-semibold">
        {title}
      </div>
      <div className="text-[var(--secondary-400)] text-base font-normal">
        {date}
      </div>
    </div>
  );
};
