import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import Link from "next/link";

const Cusetom404 = () => {
  return (
    <main>
      <div className="flex flex-col justify-between items-center w-full h-screen gap-[100px]">
        <Header />
        <div className="flex w-auto max-w-[642px] h-208px p-4 md:px-20 md:py-4 gap-10">
          <div className="flex font-work-sans text-7xl font-normal items-center text-black">
            404
          </div>
          <div className="w-[1px] h-[156px] bg-[#E8E8EA]">
            {/* <img src="/public/Icons/FacebookIcon.svg" alt="" /> */}
          </div>
          <div className="flex flex-col gap-5 px-2">
            <span className="text-2xl font-semibold font-work-sans">
              Page Not Found
            </span>
            <p className="text-[var(--secondary-500)] font-work-sans text-lg font-normal">
              We're sorry, This page is unknown or does not exist the page you
              are looking for.
            </p>
            <Link href={"/"}>
              <button className="flex w-[130px] h-10 px-4 py-[10px] bg-[#4B6BFB] text-white items-center text-sm font-medium rounded-md">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Cusetom404;
