"use client";

import { useState } from "react";

const SearchBar = ({ width }: any) => {
  const [search, setSearch] = useState("");
  return (
    <div
      className={`flex flex-row border rounded-3xl px-4 group ${width}`}
    >
      <input
        className="focus:shadow-none focus:border-none py-3 w-full"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
      {search != "" && (
        <div className="absolute top-0 right-0">
          X
        </div>
      )}
      <div className="border-l pl-4 py-3">
        dropdown
      </div>
    </div>
  );
};

export default SearchBar;
