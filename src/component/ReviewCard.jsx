import React from "react";

const ReviewCard = ({ initial, name, date, review, stars = 5, color }) => {
  return (
    <div className="border rounded-2xl shadow-md p-6 bg-white">
      {/* Top Row */}
      <div className="flex items-center gap-4">
        <div
          className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold`}
          style={{ background: color || "#ef4444" }}
        >
          {initial}
        </div>

        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-gray-500 text-sm">{date}</p>
        </div>

        
      </div>

      {/* Stars */}
      <p className="text-yellow-500 mt-3">{Array(stars).fill("⭐").join("")}</p>

      {/* Review */}
      <p className="text-gray-700 mt-3 text-sm leading-relaxed">{review}</p>

     
    </div>
  );
};

export default ReviewCard;
