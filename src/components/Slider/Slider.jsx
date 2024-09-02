import { SliderContent } from "./SliderContent";

export const Slider = ({ imgUrl }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div
        className="container w-auto h-[600px] max-w-[1056px] flex flex-col justify-end items-start gap-3 p-4 md:px-4 md:py-4 rounded-xl"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="flex w-auto h-auto bg-center">
          {/* <img src="/Images/Image.svg" alt="" srcset="" /> */}
          <SliderContent
            badge={"Technology"}
            title={"Grid system for better Design User Interface"}
            date={"August 20, 2022"}
          />
        </div>
      </div>
      <div className="flex justify-end items-end">
        <div className="flex w-auto h-auto">
          <img src="/Icons/back.svg" alt="" srcset="" />
          <img src="/Icons/forward.svg" alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};
