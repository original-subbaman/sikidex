import React from "react";
import SearchBar from "../components/SearchBar";
import NewEventSection from "../components/NewEventSection";
function HomePage(props) {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-4">
      <SearchBar />
      <NewEventSection />
    </div>
  );
}

export default HomePage;
