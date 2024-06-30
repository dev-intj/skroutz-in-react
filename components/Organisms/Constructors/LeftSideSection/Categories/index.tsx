"use client";
import CategoryItem from "@/components/Organisms/CategoryItem";

import { HeaderTitle } from "@/components/utils";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

const Categories = ({ items }: any) => {
  return (
    <div className="flex flex-col gap-4">
      <HeaderTitle title={"Κατηγορίες"} />
      <div className="flex flex-col gap-4">
        {items.map((item: any, index: number) => (
          <CategoryItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
