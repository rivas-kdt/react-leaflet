"use client";

import React, { useState, useEffect } from "react";

function getSpanClass(width, height) {
  const aspectRatio = width / height;
  if (aspectRatio > 1.7) return "col-span-2"; // Wide images
  if (aspectRatio < 0.7) return "row-span-2"; // Tall images
  if (width >= 500 && height >= 500) return "col-span-2 row-span-2"; // Large images
  return "";
}

export default function DynamicGrid({ imageData }) {
  const [imageDimensions, setImageDimensions] = useState({});
  const images = imageData;
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.onload = () => {
        setImageDimensions((prev) => ({
          ...prev,
          [image.src]: { width: img.width, height: img.height },
        }));
      };
      img.src = image.src;
    });
  }, []);

  return (
    <div className="container mx-auto p-2">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] auto-rows-[150px] gap-4 grid-flow-dense">
        {images.map((image, index) => {
          const dimensions = imageDimensions[image.src];
          const spanClass = dimensions
            ? getSpanClass(dimensions.width, dimensions.height)
            : "";

          return (
            <div
              key={index}
              className={`rounded-lg overflow-hidden shadow-lg ${spanClass}`}
            >
              {/* <FlipCard imageSrc={image.src} imageAlt={image.alt} description={image.description}/> */}
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
