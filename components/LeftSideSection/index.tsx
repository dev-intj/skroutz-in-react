import Categories from "./Categories";
import PopularSearches from "./PopularSearches";

const LeftSideSection = () => {
  return (
    <div className="w-1/5 sticky top-0 left-0 max-h-screen overflow-y-auto no-scrollbar pt-36 pr-8">
      <div className="flex flex-col gap-16">
        <Categories />
        <PopularSearches />
      </div>
    </div>
  );
};

export default LeftSideSection;
