"use client";
import { ImportedImage } from "../utils";

const CategoryItem = ({
  title = "Categories",
  link = "https://mdbootstrap.com//img/Photos/Square/1.jpg",
  imageSrc = "https://mdbootstrap.com//img/Photos/Square/1.jpg",
}: any) => {
  return (
    <a
      href={link}
      className="flex flex-row gap-3"
    >
      <div>
        <ImportedImage src={imageSrc} />
      </div>
      <span className="my-auto text-md">
        {title}
      </span>
    </a>
  );
};

export default CategoryItem;
