"use client";
import { HeaderTitle } from "@/components/utils";

import PopularSearchesItem from "./item";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";

const PopularSearches = ({ items }: any) => {
  return (
    <div className="flex flex-col gap-4">
      <HeaderTitle
        title={"Δημοφιλείς αναζητήσεις"}
        iconWrapper="bg-orange-500 rounded-full p-2"
        icon={
          <ArrowTrendingUpIcon className="h-4 w-4 text-white" />
        }
      />
      <div className="flex flex-row gap-3 flex-wrap">
        {items.map((item: any, index: number) => (
          <PopularSearchesItem
            key={index}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularSearches;
