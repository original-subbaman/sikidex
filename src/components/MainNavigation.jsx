import React from "react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
function MainNavigation(props) {
  return (
    <header className="h-24 drop-shadow-lg sticky top-0">
      <div className="flex items-center bg-gradient-to-r from-[#16bac5] to-[#5863f8] h-full">
        <Link to="/" className="flex-1">
          <h1 className="text-5xl font-extrabold text-white text-start pl-4">
            SikiDex
          </h1>
        </Link>

        <div className="flex mr-4 gap-2 z-30">
          <Link
            to="postEvent"
            className="flex items-center justify-center bg-cyan-300 bg-opacity-10
          hover:bg-[#5d67fa] transition-all duration-300 drop-shadow-lg rounded-md px-4 
          text-white font-thin md:text-lg lg:text-xl"
          >
            <button className="flex  items-center justify-center">
              Post Event <MdAdd className="w-8 h-8" />
            </button>
          </Link>
          <div className="w-12 h-12 rounded-full border-4 border-white bg-cyan-500 drop-shadow-lg hover:w-14 hover:h-14 transition-all duration-300"></div>
        </div>
      </div>
    </header>
  );
}

export default MainNavigation;
