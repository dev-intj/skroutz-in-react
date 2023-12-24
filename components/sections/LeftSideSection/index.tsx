"use client";

import { useEffect, useState } from "react";

import Categories from "./Categories";
import PopularSearches from "./PopularSearches";

import { get } from "lodash";
import axios from "axios";

const LeftSideSection = () => {
  const [categories, setCategories] = useState<
    any[]
  >([]);

  const [popularSearches, setPopularSearches] =
    useState<any[]>([]);

  const fetchCategories = async () => {
    try {
      let api = await axios.get(
        "/api/categories"
      );

      setCategories(get(api, "data.items", []));
    } catch (e) {
      console.error(e);
    }
  };

  const fetchPopularSearches = async () => {
    try {
      let api = await axios.get("/api/searches");

      setPopularSearches(
        get(api, "data.items", [])
      );
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchPopularSearches();
  }, []);

  return (
    <div className="w-1/5 sticky top-0 left-0 max-h-screen overflow-y-auto no-scrollbar pt-36 pr-8 pb-16">
      <div className="flex flex-col gap-16">
        <Categories items={categories} />
        <PopularSearches
          items={popularSearches}
        />
      </div>
    </div>
  );
};

export default LeftSideSection;
