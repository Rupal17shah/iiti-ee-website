import React from "react";
import Body from "../components/HomeBody/Body";
import Carousel from "../components/Carousel";
import { Container } from "@mui/system";

const HomePage = () => {
  return (
    <>
      <Container sx={{ marginTop: "20px" }}>
        <Carousel />
      </Container>
      <Body />
    </>
  );
};

export default HomePage;
