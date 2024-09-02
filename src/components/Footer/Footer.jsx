import { FooterAbout } from "./FooterAbout";
import { FooterCopyRight } from "./FooterCopyRight";
import { FooterLink } from "./FooterLink";
import { FooterSocial } from "./FooterSocial";

export const Footer = () => {
  return (
    <div className="w-full flex max-w-[1256px] flex-col items-center justify-center bg-[var(--secondary-50)]">
      <div className="flex flex-col w-full h-auto justify-center p-4 md:px-20 md:py-4 gap-[30px]">
        <div className="flex flex-col md:flex-row w-auto h-auto gap-[30px]">
          <FooterAbout />
          <FooterLink />
          <FooterSocial />
        </div>
        <FooterCopyRight />
      </div>
    </div>
  );
};
