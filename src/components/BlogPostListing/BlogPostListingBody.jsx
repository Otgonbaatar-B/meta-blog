export const BlogPostListingBody = ({
  imgUrl,
  badges,
  title,
  userImg,
  userName,
  date,
}) => {
  const noImage = "/public/Images/NoImage.png";
  return (
    <div className="flex flex-col justify-between w-auto h-auto rounded-xl border border-solid border-[var(--secondary-100)] p-4 bg-white dark:bg-gray-light-800 gap-4 shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
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
        {/* <img
          className="rounded-md"
          src="public/Images/NoImage.png"
          alt=""
          srcset=""
          width={"100%"}
          height={"240px"}
        /> */}
      </div>
      <div className="flex flex-wrap gap-1">
        {badges && badges.length > 0 ? (
          badges.map((badge, index) => (
            <span
              key={index}
              className="flex w-auto h-auto bg-[#4B6BFB0D] text-[#4B6BFB] text-sm font-medium font-work-sans px-[10px] py-1 rounded-md"
            >
              {badge.charAt(0).toUpperCase() + badge.slice(1)}
            </span>
          ))
        ) : (
          <span className="flex w-auto h-auto bg-[#4B6BFB0D] text-[#4B6BFB] text-sm font-medium font-work-sans px-[10px] py-1 rounded-md">
            Empty
          </span>
        )}
      </div>
      <div className="text-gray-light-700 dark:text-gray-night-700 text-lg font-semibold line-clamp-3">
        {title}
      </div>
      <div className="flex justify-between text-center items-center gap-5">
        <div className="flex w-auto h-auto gap-3">
          <div
            style={{
              backgroundImage: `url(${userImg})`,
              width: "36px",
              height: "36px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "50%",
            }}
            className="flex"
          ></div>
          <div className="flex items-center text-gray-light-500 dark:text-gray-night-500 text-base font-work-sans font-normal line-clamp-1">
            {userName}
          </div>
        </div>
        <div className="flex text-gray-light-500 dark:text-gray-night-500 text-base font-normal font-work-sans">
          {date}
        </div>
      </div>
    </div>
  );
};
