import CategoryItem from "@/components/CategoryItem";

const Categories = ({ items }: any) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-xl">Κατηγοριες</h4>
      <div className="flex flex-col gap-4">
        {items.map((item: any, index: number) => (
          <CategoryItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
