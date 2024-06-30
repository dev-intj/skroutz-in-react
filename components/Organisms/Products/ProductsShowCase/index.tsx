"use client";

import { useEffect, useState } from "react";

import ProductItem from "../ProductItem";
import { HeaderTitle, ReactCarousel } from "../../../utils";

import { ArrowRightIcon } from "@heroicons/react/24/solid";

import { get } from "lodash";

import axios from "axios";

import apiDataProductsRow1 from "@/apiData/productsRow1.json";
import apiDataProductsRow2 from "@/apiData/productsRow2.json";
import apiDataProductsRow3 from "@/apiData/productsRow3.json";

const ProductsShowCase = ({
  title,
  id,
  redirectButton,
  showStars = false,
}: any) => {
  const [products, setProducts] = useState<any[]>([]);

  const fetchProducts = async () => {
    try {
      // let api = await axios.get(`/api/search/${id || 1}`);
      // setProducts(get(api, "data.items", []));

      if (id == 1) setProducts([...apiDataProductsRow1]);
      if (id == 2) setProducts([...apiDataProductsRow2]);
      if (id == 3) setProducts([...apiDataProductsRow3]);
    } catch (e) {
      console.error("error:", e);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col gap-4 px-4">
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
      <ReactCarousel>
        {products.map((item, index) => (
          <ProductItem
            key={index}
            showStars={showStars}
            {...item}
          />
        ))}
      </ReactCarousel>
    </div>
  );
};

export default ProductsShowCase;
