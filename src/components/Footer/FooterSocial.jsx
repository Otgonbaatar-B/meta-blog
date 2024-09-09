import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../Icons/FooterIcons/FooterIcons";

export const FooterSocial = () => {
  return (
    <div className="flex w-auto justify-center gap-3">
      <FacebookIcon />
      <TwitterIcon />
      <LinkedinIcon />
      <InstagramIcon />
    </div>
  );
};
