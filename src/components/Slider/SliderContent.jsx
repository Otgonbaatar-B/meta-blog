export const SliderContent = ({ badge, title, date }) => {
  return (
    <div className="flex flex-col max-w-[592px] h-[252px] p-10 bg-white bottom-2 left-2 rounded-xl gap-6">
      <div className="flex w-auto flex-col gap-4">
        <h1 className="w-[97px]] h-7 bg-[#4B6BFB] text-white text-sm font-medium px-[10px] py-1 rounded-md">
          {badge}
        </h1>
        <h1 className="text-[var(--secondary-800)] text-4xl font-semibold">
          {title}
        </h1>
      </div>
      <div className="text-[var(--secondary-400)] text-base font-normal">
        {date}
      </div>
    </div>
  );
};
