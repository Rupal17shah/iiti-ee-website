import React from "react";
import "./Components Css/Carousel.css";
import { Container, Typography } from "@mui/material";

const NewCarousel = () => {
  return (
    //   <Container>
    <div className="imgSlider">
      <div className="Carousel-text">
        <Typography
          fontSize={"2rem"}
          margin={"auto"}
        //   fontFamily={"segoeUI"}
          fontWeight={600}
        >
          Welcome to the  Department of
          <br />
          Electrical Engineering
        </Typography>
      </div>
    </div>

    //   </Container>
  );
};

export default NewCarousel;
