"use client";
import { useState } from "react";

const FlipCard = ({ imageSrc, imageAlt, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flip-card w-full h-auto cursor-pointer "
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`flip-card-inner relative w-full h-full flex transition-transform duration-500 ${
          isFlipped ? "flip-card-flipped" : ""
        }`}
      >
        <div className="flip-card-front absolute w-full h-full">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="flip-card-back absolute w-full h-full bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center">
          <p className="text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
