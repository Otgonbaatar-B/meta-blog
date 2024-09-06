import { MetaBlogIcon } from "../FooterIcons/FooterIcons";

export const FooterCopyRight = () => {
  return (
    <div className="flex justify-between md:py-8 border-t border-solid border-[var(--secondary-200)]">
      <div className="flex gap-1 m-auto md:m-0">
        <div className="flex">
          <MetaBlogIcon />
        </div>
        <div className="flex flex-col">
          <h1 className="text-[var(--secondary-600)] text-xl font-extrabold-">
            Meta<b>Blog</b>
          </h1>
          <h1 className="text-[var(--secondary-600)] text-base font-normal">
            © All Rights Reserved.
          </h1>
        </div>
      </div>
      <div className="md:flex hidden w-auto items-center gap-4">
        <h1 className="text-[var(--secondary-600)] text-base font-normal">
          Terms of Use
        </h1>
        <h1 className="text-[var(--secondary-600)] text-base font-normal">
          Privacy Policy
        </h1>
        <h1 className="text-[var(--secondary-600)] text-base font-normal">
          Cookie Policy
        </h1>
      </div>
    </div>
  );
};
