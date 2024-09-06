import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export default function SinglePost() {
  return (
    <main>
      <div className="flex flex-col w-auto h-screen gap-[100px]">
        <Header />
        <div className="w-full flex flex-col items-center justify-center">
          <div className="container max-w-[1256px] flex flex-col w-full h-auto justify-center items-center p-4 md:px-20 md:py-4 gap-8"></div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
