import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // Assuming you might want to keep the icon for visual consistency

const Card = ({ profile, onSummaryClick }) => {
  return (
    <div className="w-[250px] h-[300px] bg-white rounded-md border overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
      <div className="w-full h-[100px] bg-indigo-700 flex items-center justify-center transition-colors duration-300 hover:bg-indigo-800">
        <div className="w-[56px] h-[56px] rounded-full bg-white relative overflow-hidden transition-transform transform hover:scale-110">
          <img
            src={profile.profilePic || "https://via.placeholder.com/56"} // Fallback profile picture
            alt={profile.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="py-2 px-4">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-violet-700 transition-colors duration-300 hover:text-violet-800">
            {profile.name}
          </h3>
          <p className="font-semibold text-gray-700 text-base">
            {profile.role}
          </p>
        </div>
        <p className="text-center text-gray-500 text-xs mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis,
          sequi nulla quisquam quas itaque?
        </p>
        <div className="flex justify-center mt-4">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click event from firing
              onSummaryClick(profile);
            }}
            className="bg-purple-700 text-white px-3 py-1 rounded-full font-semibold text-sm transition-colors duration-300 hover:bg-purple-800"
          >
            Summary
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
