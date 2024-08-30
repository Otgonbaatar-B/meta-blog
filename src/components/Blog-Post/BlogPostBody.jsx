export const BlogPostBody = ({ imgUrl, badge, title, date }) => {
  return (
    <div className="flex flex-col w-auto h-auto rounded-xl border border-solid border-[var(--secondary-100)] p-4 bg-white gap-4">
      <div className="flex m-auto w-auto h-[240px]">
        <img src={imgUrl} alt="" srcset="" />
      </div>
      <div className="w-auto h-7 bg-[#4B6BFB0D] text-[#4B6BFB] text-sm font-medium px-[10px] py-1 rounded-md">
        {badge}
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
