import { useRouter } from "next/router";

export default function Page() {
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
          111
        </div>
      </div>
    </main>
  );
}
