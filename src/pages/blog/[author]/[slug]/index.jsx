import { useRouter } from "next/router";

export async function generateMetadata({ params }) {
  // const response = await fetch(
  //   `https://dev.to/api/articles/${params.author}/${params.slug}`
  // );
  // const article = await response.json();
  console.log({ params }); 
}

export default function Page({ params }) {
  // const response = await fetch(
  //   `https://dev.to/api/articles/${params.author}/${params.slug}`
  // );
  // const article = await response.json();

  const router = useRouter();
  console.log(router);

  return (
    <main>
      <div className="container mx-auto bg-white py-10">
        <div className="">
          {/* <div className="prose mx-auto">{article.title}</div>
          <div className="prose mx-auto">{parse(article.body_html)}</div> */}
          2222
        </div>
      </div>
    </main>
  );
}
