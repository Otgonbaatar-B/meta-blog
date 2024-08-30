import { BlogPost } from "../Blog-Post/BlogPost";
import { Header } from "../Header/Header";
import { Slider } from "../Slider/Slider";
import { Trending } from "../Trending/Trending";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Slider imgUrl={"/Images/Image.svg"} />
      <Trending />
      <BlogPost />
    </div>
  );
}
