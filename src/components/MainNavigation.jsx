import React from "react";

function MainNavigation(props) {
  return (
    <header className="h-24 drop-shadow-lg">
      <div className="flex items-center justify-center bg-gradient-to-r from-[#16bac5] to-[#5863f8] h-full">
        <h1 className="text-5xl font-extrabold text-white">SikiDex</h1>
      </div>
      <nav></nav>
    </header>
  );
}

export default MainNavigation;
