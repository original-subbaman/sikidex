import React from "react";
import SearchBar from "../components/SearchBar";
function HomePage(props) {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-4">
      <SearchBar />
    </div>
  );
}

export default HomePage;
