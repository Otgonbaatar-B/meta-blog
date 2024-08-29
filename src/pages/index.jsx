import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "../components/Header/Header";
import { Slider } from "../components/Slider/Slider";
import { Trending } from "../components/Trending/Trending";
import HomePage from "@/components/pages/HomePage";
// import { Work_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="main w-full h-full">
      <div className="body flex flex-col w-auto h-auto m-auto gap-[100px]">
        <HomePage />
      </div>
    </div>
  );
}
