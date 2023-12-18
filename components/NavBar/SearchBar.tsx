"use client";

import { useState } from "react";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Squares2X2Icon } from "@heroicons/react/24/outline";

const SearchBar = ({ width }: any) => {
  const [search, setSearch] = useState("");
  return (
    <div
      className={`flex flex-row border rounded-3xl relative px-4 group ${width}`}
    >
      <div className="w-full relative">
        <MagnifyingGlassIcon className="h-8 w-8 text-gray-600 absolute top-[25%] left-0" />
        <input
          className="bg-transparent py-3 ml-12 w-full !outline-none h-full"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
        {search != "" && (
          <XMarkIcon
            className="h-6 w-6 text-gray-600 absolute top-[30%] right-4"
            onClick={() => setSearch("")}
          />
        )}
      </div>
      <div className="flex flex-row gap-2 border-l pl-4 py-3 items-center justify-between w-48">
        <Squares2X2Icon className="h-8 w-8 text-gray-600" />
        <span>Κατηγορίες</span>
        <ChevronDownIcon className="h-6 w-6 text-gray-600 mt-1" />
      </div>
    </div>
  );
};

export default SearchBar;
