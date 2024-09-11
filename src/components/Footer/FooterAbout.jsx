export const FooterAbout = () => {
  return (
    <div className="md:flex hidden flex-col w-auto max-w-[280px] gap-6">
      <div className="flex flex-col gap-3">
        <div className="text-[var(--secondary-800)] dark:text-gray-night-800 text-lg font-semibold">
          About
        </div>
        <div className="text-base text-[var(--secondary-500)] dark:text-gray-night-500 font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-[var(--secondary-600)] dark:text-gray-night-600 text-base font-normal">
          Email : info@jstemplate.net
        </div>
        <div className="text-[var(--secondary-600)] dark:text-gray-night-600 text-base font-normal">
          Phone : 880 123 456 789
        </div>
      </div>
    </div>
  );
};
