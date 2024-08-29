export const TrendingCard = ({ badge, title, imgUrl }) => {
  return (
    <div
      className="flex flex-col w-auto h-[320px] rounded-xl justify-end p-[30px] gap-4"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <h1 className="w-auto h-7 bg-[#4B6BFB] text-white text-sm font-medium px-[10px] py-1 rounded-md">
        {badge}
      </h1> */}
      <div className="flex flex-col w-[230px] h-auto items-start bg-transparent gap-4">
        <div className="w-auto h-7 bg-[#4B6BFB] text-white text-sm font-medium px-[10px] py-1 rounded-md">
          {badge}
        </div>
      </div>
      <p className="text-white text-lg font-semibold">{title}</p>
    </div>
  );
};
