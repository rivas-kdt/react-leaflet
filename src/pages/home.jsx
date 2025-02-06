import { Button, Card, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { FaLocationDot, FaPlus } from "react-icons/fa6";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <div className=" min-h-[calc(100vh-60px)]">
      <div className="p-3 w-screen flex justify-between items-center">
        <p className=" text-2xl font-bold">Recent Photos</p>
        <NavLink to={"/"}>All{" >"}</NavLink>
      </div>
      <div className=" w-screen h-28 bg-[#2e2e2e] border-[1px] border-y-white/20 border-x-0 flex items-center pl-3 gap-3">
        <div className=" w-[70px] h-[90px] bg-[#727272] flex justify-center items-center rounded-lg">
          <Button>
            <FaPlus className=" w-[48px] h-[48px] text-white rounded-full bg-[#2e2e2e]" />
          </Button>
        </div>
        <div className=" flex gap-3 overflow-x-scroll">
          <img src="scr.png" className=" h-[90px] rounded-lg w-auto" />
          <img src="vite.svg" className=" h-[90px] rounded-lg w-auto" />
          <img src="marker-icon.svg" className=" h-[90px] rounded-lg w-auto" />
          <img src="marker-icon2.svg" className=" h-[90px] rounded-lg w-auto" />
        </div>
      </div>
      <div className="p-3 w-screen flex justify-between items-center">
        <p className="text-2xl font-bold">Featured Trips</p>
        <NavLink to={"/"}>All{" >"}</NavLink>
      </div>
      <div className=" px-8 space-y-5 pb-5">
        <Card className=" w-full h-[180]">
          <CardMedia sx={{ height: 200 }} image="scr.png" title="Screenshot" />
          <div className=" flex justify-between px-2 h-[50px] bg-[#2e2e2e] text-white">
            <div className=" flex flex-col">
              <p className=" font-bold">Card Title</p>
              <div className=" flex items-center">
                <FaLocationDot className=" text-white/40" />
                <p className=" font-medium text-white/40 italic">Location</p>
              </div>
            </div>
            <div className=" flex flex-col">
              <p className=" font-medium text-white/40 italic">11/17/2032</p>
              <NavLink to="/map">Go to</NavLink>
            </div>
          </div>
        </Card>
        <Card className=" w-full h-[180]">
          <CardMedia sx={{ height: 200 }} image="scr.png" title="Screenshot" />
          <div className=" flex justify-between px-2 h-[50px] bg-[#2e2e2e] text-white">
            <div className=" flex flex-col">
              <p className=" font-bold">Card Title</p>
              <div className=" flex items-center">
                <FaLocationDot className=" text-white/40" />
                <p className=" font-medium text-white/40 italic">Location</p>
              </div>
            </div>
            <div className=" flex flex-col">
              <p className=" font-medium text-white/40 italic">11/17/2032</p>
              <NavLink to="/map">Go to</NavLink>
            </div>
          </div>
        </Card>
        <Card className=" w-full h-[180]">
          <CardMedia sx={{ height: 200 }} image="scr.png" title="Screenshot" />
          <div className=" flex justify-between px-2 h-[50px] bg-[#2e2e2e] text-white">
            <div className=" flex flex-col">
              <p className=" font-bold">Card Title</p>
              <div className=" flex items-center">
                <FaLocationDot className=" text-white/40" />
                <p className=" font-medium text-white/40 italic">Location</p>
              </div>
            </div>
            <div className=" flex flex-col">
              <p className=" font-medium text-white/40 italic">11/17/2032</p>
              <NavLink to="/map">Go to</NavLink>
            </div>
          </div>
        </Card>
        <Card className=" w-full h-[180]">
          <CardMedia sx={{ height: 200 }} image="scr.png" title="Screenshot" />
          <div className=" flex justify-between px-2 h-[50px] bg-[#2e2e2e] text-white">
            <div className=" flex flex-col">
              <p className=" font-bold">Card Title</p>
              <div className=" flex items-center">
                <FaLocationDot className=" text-white/40" />
                <p className=" font-medium text-white/40 italic">Location</p>
              </div>
            </div>
            <div className=" flex flex-col">
              <p className=" font-medium text-white/40 italic">11/17/2032</p>
              <NavLink to="/map">Go to</NavLink>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
