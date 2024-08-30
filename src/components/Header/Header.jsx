export const Header = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex w-full justify-center p-4 md:px-20 md:py-4">
        <div className="w-full flex justify-between items-center">
          <div className="flex w-auto">
            <img src="/Images/Logo.svg" alt="" />
          </div>
          <div className="hidden md:flex w-auto gap-10">
            <h1 className="text-[var(--secondary-600)] text-base font-normal not-italic font-work-sans">
              Home
            </h1>
            <h1 className="text-[var(--secondary-600)] text-base font-normal not-italic font-work-sans">
              Blog
            </h1>
            <h1 className="text-[var(--secondary-600)] text-base font-normal not-italic ">
              Blog
            </h1>
          </div>
          <div className="hidden md:flex w-auto h-auto bg-var(--Secondary-100)">
            <img src="/Icons/search-icon.svg" alt="" srcset="" />
          </div>
          <div className="flex md:hidden w-auto h-auto bg-var(--Secondary-100)">
            <img src="/Icons/menu-outline.svg" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};
