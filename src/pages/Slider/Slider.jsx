export const Slider = () => {
  return (
    <div className="flex w-full h-[651px] justify-center px-[350px] py-8">
      <div className="flex absolute w-auto h-auto bg-center">
        <img src="/Images/Image.svg" alt="" srcset="" />
        <div className="absolute flex flex-col w-[592px] h-[252px] p-10 bg-white bottom-2 left-2 rounded-xl gap-6">
          <div className="flex w-auto flex-col gap-4">
            <h1 className="w-[97px]] h-7 bg-[#4B6BFB] text-white text-sm font-medium px-[10px] py-1 rounded-md">
              Technology
            </h1>
            <h1 className="text-[var(--secondary-800)] text-4xl font-semibold">
              Grid system for better Design User Interface
            </h1>
          </div>
          <div className="text-[var(--secondary-400)] text-base font-normal">
            August 20, 2022
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
