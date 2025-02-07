import { Avatar } from "@mui/material";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from "react-router";

const Photo = () => {
  let params = useParams();
  console.log(params);

  return (
    <div className=" h-full">
      <div className=" p-3 w-full max-h-[400px]">
        <div className=" p-3 bg-[#4e4e4e] rounded-t-lg">
          <img
            src="https://picsum.photos/400/800"
            className=" w-full h-full max-h-[400px] object-cover"
          />
        </div>
        <div className=" rounded-b-lg bg-[#4e4e4e] p-3 pt-0 flex flex-col gap-1">
          <p className=" text-3xl font-bold w-full text-center text-white">
            Photo Title
          </p>
          <div className=" flex justify-between text-white/60 font-semibold">
            <div className=" flex justify-center items-center">
              <FaLocationDot className=" text-red-500/75 mr-1" />
              <p>Tagaytay, Philippines</p>
            </div>
            <p>11/21/2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
