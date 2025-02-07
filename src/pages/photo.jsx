import { Avatar } from "@mui/material";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from "react-router";

const Photo = () => {
  let params = useParams();
  const images = [
    {
      id: 1,
      src: "/hansk.png",
      alt: "Mountain",
      description: "Hans Kalbo Fajardo",
      author: "Hans Fajardo",
      date: "2025-02-07",
      location: "Region, Philippines",
    },
    {
      id: 2,
      src: "https://picsum.photos/id/1015/400/400",
      alt: "River",
      description: "A majestic mountain landscape",
      author: "Vonn Pactol",
      date: "2025-02-07",
      location: "Region, Philippines",
    },
    {
      id: 3,
      src: "/scr.png",
      alt: "Forest",
      description: "A majestic mountain landscape",
      author: "Hanns Curtis",
      date: "2025-02-07",
      location: "Region, Philippines",
    },
    {
      id: 4,
      src: "https://picsum.photos/id/1018/600/400",
      alt: "Mountain",
      description: "A majestic mountain landscape",
      author: "Vhonn Navarro",
      date: "2025-02-07",
      location: "Region, Philippines",
    },
    {
      id: 5,
      src: "https://picsum.photos/id/1015/400/400",
      alt: "River",
      description: "A serene river flowing through nature",
      author: "Roi Ice Tanedo",
      date: "2025-02-07",
      location: "Region, Philippines",
    },
    {
      id: 6,
      src: "https://picsum.photos/id/1019/400/600",
      alt: "Forest",
      description: "A lush green forest",
      author: " Hans Pactol",
      date: "2025-02-07",
      location: "Region, Philippines",
    },
    {
      id: 7,
      src: "https://picsum.photos/id/1016/600/600",
      alt: "Waterfall",
      description: "A powerful waterfall in action",
      author: "Vonn Fajardo",
      date: "2025-02-07",
      location: "Region, Philippines",
    },
    {
      id: 8,
      src: "https://picsum.photos/id/1020/400/300",
      alt: "Road",
      description: "A winding road through scenic landscape",
      author: "Oishi Prawn Crackers",
      date: "2025-02-07",
      location: "Region, Philippines",
    },
    {
      id: 9,
      src: "https://picsum.photos/id/1021/400/400",
      alt: "Coast",
      description: "A beautiful coastal view",
      author: "Clover",
      date: "2025-02-07",
      location: "Region, Philippines",
    },
    {
      id: 10,
      src: "https://picsum.photos/id/1022/400/600",
      alt: "Lake",
      description: "A tranquil lake surrounded by nature",
      author: "Vonn Fajardo Pactol",
      date: "2025-02-07",
      location: "Region, Philippines",
    },
    {
      id: 11,
      src: "https://picsum.photos/id/1023/600/400",
      alt: "Bear",
      description: "A wild bear in its natural habitat",
      author: "Hans Pactol Fajardo",
      date: "2025-02-07",
      location: "Region, Philippines",
    },
    {
      id: 12,
      src: "https://picsum.photos/id/1024/400/400",
      alt: "Cactus",
      description: "A desert cactus under the sun",
      author: "Hans Batumbakal",
      date: "2025-02-07",
      location: "Region, Philippines",
    },
    {
      id: 13,
      src: "https://picsum.photos/id/1025/400/300",
      alt: "Pug",
      description: "An adorable pug looking at the camera",
      author: "Vonn Mondragon Jr.",
      date: "2025-02-07",
      location: "Region, Philippines",
    },
  ];

  const { id } = params;
  console.log(id);
  const photo = images.find((images) => images.id === Number(id));
  console.log(photo);

  return (
    <div className=" h-full">
      <div className=" p-3 w-full max-h-[400px]">
        <div className=" p-3 bg-[#4e4e4e] rounded-t-lg">
          <img
            src={photo.src}
            className=" w-full h-full max-h-[400px] object-cover"
          />
        </div>
        <div className=" rounded-b-lg bg-[#4e4e4e] p-3 pt-0 flex flex-col gap-1">
          <p className=" text-3xl font-bold w-full text-center text-white">
            {photo.alt}
          </p>
          <div className=" flex justify-between text-white/60 font-semibold">
            <div className=" flex justify-center items-center">
              <FaLocationDot className=" text-red-500/75 mr-1" />
              <p>{photo.location}</p>
            </div>
            <p>{photo.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
