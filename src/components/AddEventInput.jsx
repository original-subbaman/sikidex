import React from "react";
function AddEventInput({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center px-2  min-w-fit
      bg-[#cfd0da] drop-shadow-md
      text-center text-gray-600 text-lg border-4 border-gray-600 rounded-full font-bold
     hover:border-[#434ccc] hover:text-[#5863f8] hover:bg-white transition-all duration-300"
    >
      Post An Event
    </button>
  );
}

export default AddEventInput;
