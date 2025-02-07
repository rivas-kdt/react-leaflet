import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from "react-router";
import DynamicGrid from "../components/DynamicGrid";

const Trip = () => {
  let params = useParams();
  console.log(params);
  const long = "121.13753688955514";
  const lat = "14.630719351560295";
  const [address, setAddress] = useState();

  const images = [
    { src: "/hansk.png", alt: "Mountain" },
    { src: "https://picsum.photos/id/1015/400/400", alt: "River", description: "A majestic mountain landscape" },
    { src: "/scr.png", alt: "Forest", description: "A majestic mountain landscape" },
    { src: "https://picsum.photos/id/1018/600/400", alt: "Mountain", description: "A majestic mountain landscape" },
    { src: "https://picsum.photos/id/1015/400/400", alt: "River", description: "A serene river flowing through nature" },
    { src: "https://picsum.photos/id/1019/400/600", alt: "Forest", description: "A lush green forest" },
    { src: "https://picsum.photos/id/1016/600/600", alt: "Waterfall", description: "A powerful waterfall in action" },
    { src: "https://picsum.photos/id/1020/400/300", alt: "Road", description: "A winding road through scenic landscape" },
    { src: "https://picsum.photos/id/1021/400/400", alt: "Coast", description: "A beautiful coastal view" },
    { src: "https://picsum.photos/id/1022/400/600", alt: "Lake", description: "A tranquil lake surrounded by nature" },
    { src: "https://picsum.photos/id/1023/600/400", alt: "Bear", description: "A wild bear in its natural habitat" },
    { src: "https://picsum.photos/id/1024/400/400", alt: "Cactus", description: "A desert cactus under the sun" },
    { src: "https://picsum.photos/id/1025/400/300", alt: "Pug", description: "An adorable pug looking at the camera" },
  ];

  useEffect(() => {
    const getLocation = async () => {
      const data = await (
        await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`
        )
      ).json();
      console.log(data);
      setAddress(data.address.city + ", " + data.address.country);
    };
    getLocation();
  }, [long, lat]);

  return (
    <div className="h-full">
      <p className=" text-2xl font-bold w-full text-center my-3">Trip Title</p>
      <div className=" relative">
        <img src="/scr.png" className=" h-auto w-full" />
        <div className=" absolute right-0 bottom-0 w-full h-1/2 flex items-end justify-end py-2 px-1 bg-gradient-to-t from-black to-50%">
          <div className=" flex items-center gap-1">
            <FaLocationDot className=" h-4 w-4 text-red-500" />
            <p className=" font-bold align-text-bottom">{address}</p>
          </div>
        </div>
      </div>
      <p className=" p-3 overflow-hidden text-ellipsis">
        Embark on a visual adventure through my travel photo albums, capturing
        the essence of every destination I’ve explored. From bustling cityscapes
        to serene landscapes, each album tells a unique story of the places I’ve
        visited, the cultures I’ve encountered, and the unforgettable moments
        along the way.
      </p>
      <p className=" mt-0 m-3 text-2xl font-bold">Memories</p>
       <DynamicGrid imageData={images}/>
    </div>
  );
};

export default Trip;

// *:bg-[#2e2e2e] *:h-full *:object-contain gap-2 px-2 *:rounded-lg *:border *:border-white/20
