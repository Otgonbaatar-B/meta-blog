export const Header = () => {
  return (
    <div className="flex w-full justify-center px-[350px] py-8">
      <div className="w-full flex justify-between items-center">
        <div className="flex w-auto">
          <img src="/Images/Logo.svg" alt="" />
        </div>
        <div className="flex w-auto gap-10">
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
        <div className="w-auto h-auto bg-var(--Secondary-100)">
          <img src="/Icons/search-icon.svg" alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};
