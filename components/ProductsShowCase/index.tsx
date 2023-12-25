"use client";

import ProductItem from "../ProductItem";
import { HeaderTitle } from "../utils";

import { ArrowRightIcon } from "@heroicons/react/24/solid";

const ProductsShowCase = ({
  title,
  redirectButton,
  showStars,
}: any) => {
  return (
    <div className="flex flex-col gap-4 px-4 ">
      <div className="flex flex-row">
        <HeaderTitle title={title} />
        {redirectButton && (
          <div className="flex flex-row gap-2 ml-auto my-auto">
            <span className="text-gray-600">
              Δες τα όλα
            </span>
            <ArrowRightIcon className="h-4 w-4 text-gray-500 my-auto" />
          </div>
        )}
      </div>
      <div className="relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0">
        <div className="flex flex-row gap-4">
          {Array.from(Array(13).keys()).map(
            (item, index) => (
              <ProductItem key={index} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsShowCase;
