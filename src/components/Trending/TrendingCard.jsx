export const TrendingCard = ({ badge, title, imgUrl }) => {
  return (
    <div
      className="flex flex-col w-auto h-[320px] rounded-xl justify-end p-[20px] gap-4"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(20, 22, 36, 0.40) 0%, rgba(20, 22, 36, 0.40) 100%), url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "6px",
        backgroundColor: "lightgray",
      }}
    >
      {/* <h1 className="w-auto h-7 bg-[#4B6BFB] text-white text-sm font-medium px-[10px] py-1 rounded-md">
        {badge}
      </h1> */}
      <div className="flex flex-col md:w-[230px] h-auto rounded-xl  p-2">
        <div className="flex flex-col w-[230px] h-auto items-start bg-transparent gap-4">
          <div className="w-auto h-7 bg-[#4B6BFB] text-white text-sm font-medium font-work-sans px-[10px] py-1 rounded-md">
            {badge}
          </div>
        </div>
        <p className="text-white text-lg font-semibold font-work-sans line-clamp-3">
          {title}
        </p>
      </div>
    </div>
  );
};
