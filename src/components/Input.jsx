import React from "react";

function Input({ label, name, type, ...props }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="font-semibold text-lg">
        {label}
      </label>
      <input
        type={type}
        name={name}
        {...props}
        className="outline-none border border-gray-500 rounded-md p-2"
      />
    </div>
  );
}

export default Input;
