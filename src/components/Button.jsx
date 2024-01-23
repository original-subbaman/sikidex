import React from "react";

function Button({ children }) {
  return (
    <button
      className="px-2 
    rounded-md border 
    border-white text-white 
    text-lg drop-shadow-md 
    hover:bg-blue-600 hover:border-none 
    hover:transition-all hover:duration-300"
    >
      {children}
    </button>
  );
}

export default Button;
