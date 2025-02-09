import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiHome } from "react-icons/ti";
import { FaMapLocationDot } from "react-icons/fa6";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router";

const Navbar = () => {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <nav className=" h-[60px] w-screen bg-[#2e2e2e] flex justify-between items-center px-4 border-b border-b-white/20 border-0">
      <p className="  text-[32px] text-white font-bold">App Title</p>
      <Button onClick={toggleDrawer(true)}>
        <GiHamburgerMenu className=" w-[30px] h-[30px] text-white" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        <Box
          sx={{ width: "50vw" }}
          role="presentation"
          onClick={toggleDrawer(false)}
          className=" h-screen bg-[#2e2e2e] text-white flex flex-col"
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/");
                }}
              >
                <ListItemIcon>
                  <TiHome className=" w-[30px] h-[30px] text-white" />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/map");
                }}
              >
                <ListItemIcon>
                  <FaMapLocationDot className=" w-[30px] h-[30px] text-white" />
                </ListItemIcon>
                <ListItemText>Map</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/login");
                }}
              >
                <ListItemIcon>
                  <FaMapLocationDot className=" w-[30px] h-[30px] text-white" />
                </ListItemIcon>
                <ListItemText>Log In</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
