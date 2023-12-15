import PopularSearchesItem from "./item";

const PopularSearches = () => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-xl">Δημοφιλείς αναζητήσεις</h4>
      <div className="flex flex-row gap-4 flex-wrap">
        {Array.from(Array(15).keys()).map((item, index) => (
          <div className="w-24 bg-red-400">|</div>
        ))}
      </div>
    </div>
  );
};

export default PopularSearches;
