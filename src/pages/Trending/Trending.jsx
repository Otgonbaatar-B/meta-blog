export const Trending = () => {
  return (
    <div className="flex w-full h-auto justify-center px-[350px] py-8">
      <div className="flex flex-col w-full gap-[30px]">
        <div className="w-auto text-2xl text-[var(--secondary-800)] font-extrabold">
          Trending
        </div>
        <div className="grid grid-cols-4 h-auto gap-5">
          <div className="absolute w-auto h-auto rounded-xl">
            <img src="/Images/trend-img1.jpg" alt="" srcset="" />
            <div className="flex flex-col absolute w-[230px] h-[120px] bg-transparent bottom-7 right-[28.5px] left-[30.5px] gap-4">
              <div className="w-auto h-7 bg-[#4B6BFB] text-white text-sm font-medium px-[10px] py-1 rounded-md">
                Technology
              </div>
              <div className="text-white text-lg font-semibold">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </div>
            </div>
          </div>
          <div className="absolute w-auto h-auto rounded-xl">
            <img src="/Images/trend-img1.jpg" alt="" srcset="" />
            <div className="flex flex-col absolute w-[230px] h-[120px] bg-transparent bottom-7 right-[28.5px] left-[30.5px] gap-4">
              <div className="w-[97px] h-7 bg-[#4B6BFB] text-white text-sm font-medium px-[10px] py-1 rounded-md">
                Technology
              </div>
              <div className="text-white text-lg font-semibold">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
