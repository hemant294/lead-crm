import React from "react";

const Button = ({ name }) => {
  return (
    <div className="flex justify-center">
      <button className="bg-lime-400 hover:bg-lime-300 transition px-8 py-4 rounded-xl font-semibold text-gray-900 flex items-center gap-2 cursor-pointer">
        {name}
      </button>
    </div>
  );
};

export default Button;
