"use client";

import { useState } from "react";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Squares2X2Icon } from "@heroicons/react/24/outline";

import CategoriesModal from "./CategoriesModal";

const SearchBar = ({ width }: any) => {
  const [search, setSearch] =
    useState<string>("");

  const [
    categoriesModalOpen,
    setCategoriesModalOpen,
  ] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-row border rounded-3xl relative group hover:border-orange-400 ${width}`}
    >
      <CategoriesModal
        isOpen={categoriesModalOpen}
        setIsOpen={setCategoriesModalOpen}
      />
      <div className="flex flex-row w-full relative">
        <div className="flex cursor-pointer h-full w-12 pl-4 pr-12 rounded-l-3xl group">
          <MagnifyingGlassIcon className="h-8 w-8 text-gray-600 absolute top-[25%] mx-auto hover:text-orange-400" />
        </div>
        <input
          className="py-3 w-full !outline-none h-full"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
        {search != "" && (
          <XMarkIcon
            className="h-6 w-6 text-gray-600 absolute top-[30%] right-4 cursor-pointer"
            onClick={() => setSearch("")}
          />
        )}
      </div>
      <div
        className="flex flex-row gap-2 border-l pl-4 py-3 items-center justify-between w-48 pr-4"
        onClick={() =>
          setCategoriesModalOpen(true)
        }
      >
        <Squares2X2Icon className="h-8 w-8 text-gray-600" />
        <span>Κατηγορίες</span>
        <ChevronDownIcon className="h-6 w-6 text-gray-600 mt-1" />
      </div>
    </div>
  );
};

export default SearchBar;
