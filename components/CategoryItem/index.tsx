"use client";
import { ImportedImage } from "@/components/utils";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

import { isEmpty } from "lodash";

const CategoryItem = ({
  img = {
    src: "https://b.scdn.gr/assets/schwartz/timeline/verticals/Home-b27a6579e644348ddb5e689134e687f1.png",
    alt: "",
  },
  title = "Categories",
  link = "/category",
  arrow = false,
  bgColor = "#ffda00",
}: any) => {
  return (
    <a href={link} className="flex flex-row gap-3">
      {!isEmpty(img) && (
        <div className="">
          <ImportedImage
            src={img.src}
            alt={img.alt}
            bgColor={bgColor}
          />
        </div>
      )}
      <span className="my-auto text-lg">{title}</span>
      {arrow && (
        <div className="ml-auto my-auto">
          <ChevronRightIcon className="h-6 w-6 text-gray-400 mt-1 " />
        </div>
      )}
    </a>
  );
};

export default CategoryItem;
