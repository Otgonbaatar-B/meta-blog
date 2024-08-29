export const BlogPostHeader = () => {
  return (
    <div className="flex flex-col w-full gap-8">
      <h1 className="w-auto h-auto text-[var(--secondary-800)] text-2xl font-bold">
        All Blog Post
      </h1>
      <div className="flex justify-between w-full">
        <div className="flex w-auto gap-5">
          <h1 className="text-xs font-bold text-[#D4A373]">All</h1>
          <h1 className="text-xs font-bold text-[#495057]">Design</h1>
          <h1 className="text-xs font-bold text-[#495057]">Travel</h1>
          <h1 className="text-xs font-bold text-[#495057]">Fashion</h1>
          <h1 className="text-xs font-bold text-[#495057]">Technology</h1>
          <h1 className="text-xs font-bold text-[#495057]">Branding</h1>
        </div>
        <h1 className="text-xs font-bold text-[#495057]">View All</h1>
      </div>
    </div>
  );
};
