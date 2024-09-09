import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export default function ContactUs() {
  return (
    <main>
      <div className="flex flex-col w-auto h-screen gap-[100px]">
        <Header />
        <div className="flex flex-col m-auto justify-center items-center h-auto sm:px-4 md:px-20 md:py-4 2xl:px-[350px]">
          <div className="flex flex-col justify-center items-center w-auto h-auto px-4 py-4 md:px-20 md:py-4 xl:px-[165px] 2xl:px-[340px] gap-5">
            <div className="flex flex-col gap-5">
              <h1 className="text-black text-4xl font-semibold font-work-sans">
                Contact Us
              </h1>
              <h1 className="text-[var(--secondary-500)] text-base font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam
              </h1>
            </div>
            <div className="flex w-auto h-auto justify-between gap-4 md:gap-[50px] py-[10px]">
              <div className="flex flex-col w-auto h-auto p-4 rounded-xl border border-solid border-[#E8E8EA]">
                <h1 className="text-black text-2xl font-semibold font-work-sans">
                  Address
                </h1>
                <h1 className="text-[var(--secondary-500)] text-lg font-normal">
                  1328 Oak Ridge Drive, Saint Louis, Missouri
                </h1>
              </div>
              <div className="flex flex-col w-auto h-auto p-4 rounded-xl border border-solid border-[#E8E8EA]">
                <h1 className="text-black text-2xl font-semibold font-work-sans">
                  Contact
                </h1>
                <h1 className="text-[var(--secondary-500)] text-lg font-normal">
                  313-332-8662 info@email.com
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-auto h-auto bg-[var(--secondary-50)] px-4 py-4 md:pt-[29px] md:pr-[130px] md:pb-[26px] md:pl-[35px] gap-6">
            <h1 className="text-black font-work-sans text-lg font-semibold">
              Leave a Message
            </h1>
            <div className="flex h-auto justify-between gap-6">
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Name"
                className="w-full md:w-auto h-[38px] py-[14px] pr-[14px] pl-5 bg-white rounded-[5px] border border-solid border-[#DCDDDF]"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Email"
                className="w-full md:w-auto h-[38px] py-[14px] pr-[14px] pl-5 bg-white rounded-[5px] border border-solid border-[#DCDDDF]"
              />
            </div>
            <div className="flex flex-col gap-6">
              <input
                type="text"
                name=""
                id=""
                placeholder="Subject"
                className="w-auto h-[38px] py-[14px] pr-[14px] pl-5 bg-white rounded-[5px] border border-solid border-[#DCDDDF]"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Write a message"
                className="w-auto h-[134px] py-[14px] pr-[14px] pl-5 bg-white rounded-[5px] border border-solid border-[#DCDDDF]"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
