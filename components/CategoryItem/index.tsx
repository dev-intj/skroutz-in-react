"use client";
import { ImportedImage } from "@/components/utils";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const CategoryItem = ({
  title = "Categories",
  link = "https://mdbootstrap.com//img/Photos/Square/1.jpg",
  imageSrc = "https://b.scdn.gr/assets/schwartz/timeline/verticals/Home-b27a6579e644348ddb5e689134e687f1.png",
  image = true,
  arrow = false,
}: any) => {
  return (
    <a
      href={link}
      className="flex flex-row gap-3"
    >
      {image && (
        <div className="">
          <ImportedImage src={imageSrc} />
        </div>
      )}
      <span className="my-auto text-lg">
        {title}
      </span>
      {arrow && (
        <div className="ml-auto  my-auto">
          <ChevronRightIcon className="h-6 w-6 text-gray-400 mt-1 " />
        </div>
      )}
    </a>
  );
};

export default CategoryItem;
