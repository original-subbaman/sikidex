import React from "react";
import { FaSearch } from "react-icons/fa";
function SearchBar(props) {
  return (
    <form className="min-w-[600px]">
      <div className="relative">
        <div className="bg-gradient-to-r  from-purple-500 via-green-500-500 to-cyan-500 rounded-full p-1">
          <input
            type="search"
            placeholder="Search events..."
            className="w-full p-4 rounded-full bg-white border-[#5863f8] focus:outline-none"
          />
        </div>
        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-4 rounded-full bg-slate-900 text-white">
          <FaSearch />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
