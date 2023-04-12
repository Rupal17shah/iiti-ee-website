import React from "react";
import Body from "../components/HomeBody/Body";
import Carousel from "../components/Carousel";
import { Container } from "@mui/system";
import NewCarousel from "../components/NewCarousel";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

const HomePage = (props) => {
  return (
    <>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Carousel page="home" program=""/>
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <NewCarousel />
      </Box>
      <Body />
    </>
  );
};

export default HomePage;
