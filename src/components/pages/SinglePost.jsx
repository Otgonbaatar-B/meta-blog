import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { DateFormatter } from "../Utils/DateFormatter";

const SinglePostPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const [article, setArticle] = useState({});
  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  const formattedDate = <DateFormatter article={article} />;
  return (
    <div className="flex flex-col w-full h-auto justify-center items-center">
      <div className="container max-w-[1256px] flex flex-col items-center gap-[100px]">
        <Header />
        <div className="flex flex-col w-full p-4 md:px-20 md:py-4 gap-8">
          <h1 className="font-bold font-work-sans text-4xl ">
            {article?.title}
          </h1>
          {/* <div className="flex items-center gap-3 mt-5">
            <img
              className="w-9 h-9 border rounded-full "
              src={article?.user?.profile_image}
            />
            <p className="text-[#97989F]">{article?.user?.name}</p>
          </div> */}
          <div className="flex text-center items-center gap-5">
            <div className="flex w-auto h-auto gap-2">
              <div
                style={{
                  backgroundImage: `url(${article?.user?.profile_image})`,
                  width: "36px",
                  height: "36px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "50%",
                }}
                className="flex"
              ></div>
              <div className="flex items-center text-[var(--secondary-400)] text-base font-normal">
                {article?.user?.name}
              </div>
            </div>
            <div className="flex text-[var(--secondary-400)] text-base font-normal">
              {formattedDate}
            </div>
          </div>
          <div className="flex w-full items-center flex-col text-[#3B3C4A] gap-8">
            <div className="w-full h-auto">
              <img src={article?.cover_image} width={"100%"} height={"auto"} />
            </div>
            <div className="w-full h-auto">
              <h1 className="text-2xl font-semibold">{article?.description}</h1>
            </div>
            <div>
              <p>
                Russian President Vladimir Putin has made it clear his goal is
                to gain control over the entirety of Ukraine’s Donetsk and
                Luhansk regions and taking over Pokrovsk, an important military
                and supply hub, would be a major step towards that objective. It
                sits on a key road that connects it to other military cities in
                the area and a railroad that links it with Dnipro. The last
                major coking coal mine still under Kyiv’s control is also just
                to the west of the city, supplying coke to make steel – an
                indispensable wartime resource. Ukrainian soldiers in the area
                paint a grim picture of the situation. Kyiv’s forces are clearly
                outnumbered and outgunned, with some commanders estimating there
                are 10 Russian soldiers to each Ukrainian.
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                Research Your Destination
              </h1>
              <p>
                “The days are long, they live in a dugout, on duty around the
                clock and if they can’t shoot, the Russians have an advantage,
                they hear them advancing and they know that if they had fired it
                wouldn’t have happened,” said Andryi Horetskyi, a Ukrainian
                military officer whose unit is now fighting in Chasiv Yar,
                another eastern frontline hot spot. Serhiy Tsehotskiy, an
                officer with the 59th Separate Motorized Infantry Brigade, told
                CNN the unit tries to rotate soldiers in and out every three to
                four days. But drones, which have only increased in number over
                the course of the war, can make that too dangerous, forcing
                soldiers to stay put for longer. “The record is 20 days,” he
                said.
              </p>
            </div>
            <div className="mb-24">
              <h1 className="text-2xl font-semibold">Plan Your Itinerary</h1>
              <p>
                It’s a staggering and – most likely – incomplete number. Several
                commanders told CNN that many officers would not report
                desertion and unauthorized absences, hoping instead to convince
                troops to return voluntarily, without facing punishment. This
                approach became so common that Ukraine changed the law to
                decriminalize desertion and absence without leave, if committed
                for the first time. Horetskyi told CNN that this move made
                sense. “Threats will only make things worse. A smart commander
                will delay threats, or even avoid them,” he said. Pokrovsk has
                become the epicenter of the fight for Ukraine’s east. Russian
                forces have been inching towards the city for months, but their
                advances have sped up in recent weeks as Ukrainian defenses
                begin to crumble.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SinglePostPage;
