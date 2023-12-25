"use client";

import { useEffect, useState } from "react";

import ProductItem from "../ProductItem";
import { HeaderTitle } from "../utils";

import { ArrowRightIcon } from "@heroicons/react/24/solid";

import { get } from "lodash";

import axios from "axios";

const ProductsShowCase = ({
  title,
  id,
  redirectButton,
  showStars,
}: any) => {
  const [products, setProducts] = useState<any[]>([]);

  const fetchProducts = async () => {
    try {
      let api = await axios.get(`/api/search/${id || 1}`);

      setProducts(get(api, "data.items", []));
    } catch (e) {
      console.error("error:", e);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
          {products.map((item, index) => (
            <ProductItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsShowCase;
