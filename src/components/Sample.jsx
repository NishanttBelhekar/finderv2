import React from "react";

const Sample = () => {
  return (
    <div className="w-[250px] h-[300px] bg-white rounded-md border overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="w-full h-[100px] bg-indigo-700 flex items-center justify-center transition-colors hover:bg-indigo-800">
        <div className="w-[56px] h-[56px] rounded-full bg-white relative overflow-hidden border-2 border-indigo-700 transition-transform transform hover:scale-110">
          <img
            src=""
            alt="user"
            className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
          />
        </div>
      </div>
      <div className="py-2 px-4">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-violet-700 transition-colors duration-300 hover:text-violet-900">
            John Doe
          </h3>
          <p className="font-semibold text-gray-700 text-base">
            React Developer
          </p>
        </div>
        <p className="text-center text-gray-500 text-xs mt-2 transition-opacity duration-300 hover:opacity-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis,
          sequi nulla quisquam quas itaque?
        </p>
        <div className="flex justify-center mt-3">
          <button className="bg-purple-700 text-white px-3 py-1 rounded-full font-semibold text-sm transition-colors duration-300 hover:bg-purple-800 hover:shadow-md">
            Summary
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sample;
