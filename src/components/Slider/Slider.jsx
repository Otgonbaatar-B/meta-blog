import { SliderContent } from "./SliderContent";

export const Slider = ({ imgUrl }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div
        className="container flex flex-col w-full h-[651px] justify-end rounded-xl p-4 md:px-20 md:py-4 bg-cover bg-center"
        // style={{"background-image: url('/Images/Image.svg')"}}
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
