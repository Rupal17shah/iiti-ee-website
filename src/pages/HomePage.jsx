import React from "react";
import Body from "../components/HomeBody/Body";
import Carousel from "../components/Carousel";
import { Container } from "@mui/system";
import NewCarousel from "../components/NewCarousel";

const HomePage = () => {
  return (
    <>

      {/* <Carousel /> */}
      <NewCarousel />

      <Body />
    </>
  );
};

export default HomePage;
