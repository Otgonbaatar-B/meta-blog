import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "./Header/Header";
import { Slider } from "./Slider/Slider";
import { Trending } from "./Trending/Trending";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="main w-full h-full">
      <div className="body flex flex-col w-auto h-auto m-auto gap-[100px]">
        <Header />
        <Slider />
        <Trending />
      </div>
    </div>
  );
}
