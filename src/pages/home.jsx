import { Avatar, Button, Card, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { FaLocationDot, FaPlus } from "react-icons/fa6";
import { NavLink } from "react-router";
import { GrLinkNext } from "react-icons/gr";

const Home = () => {
  const trips = [
    {
      id: "1",
      title: "Trip to Boracay",
      location: "Boracay, Philippines",
      date: "01/28/2025",
      img: "https://picsum.photos/3000/1000",
      author: "Hans Fajardo",
    },
    {
      id: "2",
      title: "Hinulugang Taktak",
      location: "Antipolo, Rizal, Philippines",
      date: "07/02/2024",
      img: "https://picsum.photos/200/300",
      author: "Vonn Pactol",
    },
    {
      id: "3",
      title: "Pinto Art Museum",
      location: "Antipolo, Rizal, Philippines",
      date: "02/13/2024",
      img: "https://picsum.photos/300/400",
      author: "Roi Tanedo",
    },
    {
      id: "4",
      title: "Canada Forest",
      location: "Toronto, Raptors, Canada",
      date: "11/17/2023",
      img: "https://picsum.photos/300/200",
      author: "Anne Dela Vega",
    },
    {
      id: "5",
      title: "Palawan Underwater Cave",
      location: "Palawan, Philippines",
      date: "01/28/2025",
      img: "https://picsum.photos/800/400",
      author: "Edric Rivas",
    },
    {
      id: "6",
      title: "Trip to Jerusalem",
      location: "Jerusalem, Jerusalem",
      date: "05/09/2022",
      img: "https://picsum.photos/600/300",
      author: "Hans Fajardo Pactol",
    },
    {
      id: "7",
      title: "Dyan lang sa tabi",
      location: "Antipolo, Philippines",
      date: "06/12/2024",
      img: "https://picsum.photos/200/300",
      author: "Vonn Pactol Fajardo",
    },
  ];
  return (
    <div className=" min-h-full">
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
      <div className=" px-4 space-y-2.5 pb-5">
        {trips.map((t) => {
          return (
            <div key={t.id} className=" px-4 py-2.5">
              <div className=" relative">
                <Card className=" w-full h-fit" variant="outlined">
                  <CardMedia
                    sx={{ height: 200 }}
                    image={`${t.img}`}
                    title="Screenshot"
                  />
                  <div className=" flex justify-between px-2 h-[50px] bg-[#2e2e2e] text-white">
                    <div className=" flex flex-col">
                      <p className=" font-bold">{t.title}</p>
                      <div className=" flex items-center">
                        <FaLocationDot className=" text-white/40" />
                        <p className=" font-light text-white/40 italic">
                          {t.location}
                        </p>
                      </div>
                    </div>
                    <div className=" flex flex-col">
                      <p className=" font-medium text-white/40 italic">
                        {t.date}
                      </p>
                      <NavLink
                        to={`/trip/${t.id}`}
                        className=" flex justify-end"
                      >
                        <GrLinkNext className=" w-5 h-5" />
                      </NavLink>
                    </div>
                  </div>
                </Card>
                <div className=" absolute rounded-full flex justify-center items-center w-13 h-13 bg-[#242424] top-0 left-0 z-10">
                  <span className=" absolute bg-[#242424] h-7 w-14 right-0 -top-1 z-10"></span>
                  <span className=" absolute bg-[#242424] h-14 w-7 -left-1 bottom-0 z-10"></span>
                  <Avatar sx={{ bgcolor: "#00b0ff" }} className=" z-20 -translate-x-[2px] -translate-y-[2px]">
                    {t.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </Avatar>
                </div>
              </div>
            </div>
          );
        })}
        {/* <Card className=" w-full h-[180]">
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
              <NavLink to="/trip/32" className=" flex justify-end"><GrLinkNext   className=" w-5 h-5"/></NavLink>
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
              <NavLink to="/trip/32" className=" flex justify-end"><GrLinkNext   className=" w-5 h-5"/></NavLink>
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
              <NavLink to="/trip/32" className=" flex justify-end"><GrLinkNext   className=" w-5 h-5"/></NavLink>
            </div>
          </div>
        </Card> */}
      </div>
    </div>
  );
};

export default Home;
