import Link from "next/link";

export const FooterLink = () => {
  return (
    <div className="flex flex-col w-full h-auto max-w-full justify-start items-center align-top md:max-w-[521px] gap-2">
      <Link href={"/"}>
        <div className="text-[var(--secondary-600)] text-base font-normal">
          Home
        </div>
      </Link>
      <Link href={"./blog-list"}>
        <div className="text-[var(--secondary-600)] text-base font-normal">
          Blog
        </div>
      </Link>
      <Link href={"./contact-us"}>
        <div className="text-[var(--secondary-600)] text-base font-normal">
          Contact
        </div>
      </Link>
    </div>
  );
};
