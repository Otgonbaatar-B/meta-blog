export const SliderContent = ({ badge, title, date }) => {
  return (
    <div className="flex flex-col max-w-[592px] h-[252px] p-7 bg-gray-night-800 dark:bg-gray-light-800 bottom-2 left-2 rounded-xl gap-6">
      <div className="flex w-auto flex-col gap-4">
        <div>
          <span className="bg-[#4B6BFB] text-white text-sm font-medium font-work-sans px-[10px] py-1 rounded-md">
            {badge}
          </span>
        </div>
        <h1 className="text-gray-light-700 dark:text-gray-night-700 text-4xl font-semibold font-work-sans line-clamp-3">
          {title}
        </h1>
      </div>
      <div className="text-gray-light-500 dark:text-gray-night-500 text-base font-normal font-work-sans">
        {date}
      </div>
    </div>
  );
};
