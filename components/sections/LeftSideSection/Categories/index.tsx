import CategoryItem from "@/components/CategoryItem";

const Categories = () => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-xl">Κατηγοριες</h4>
      <div className="flex flex-col gap-4">
        {Array.from(Array(13).keys()).map((item, index) => (
          <CategoryItem key={index} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
