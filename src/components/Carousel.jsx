import React from "react";
import Carousel from "react-material-ui-carousel";

// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';

import { Box } from "@mui/system";

function Example(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img_url: "/Images/Carousel/1.jpg",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img_url: "/Images/Carousel/2.jpg",
    },
    {
      name: "Random Name #3",
      description: "Hello World!",
      img_url: "/Images/Carousel/3.jpg",
    },
    {
      name: "Random Name #3",
      description: "Hello World!",
      img_url: "/Images/Carousel/4.jpg",
    },
    {
      name: "Random Name #3",
      description: "Hello World!",
      img_url: "/Images/Carousel/5.jpg",
    },
    // {
    //   name: "Random Name #3",
    //   description: "Hello World!",
    //   img_url: "/Images/Carousel/6.jpg",
    // },
    {
      name: "Random Name #3",
      description: "Hello World!",
      img_url: "/Images/Carousel/7.jpg",
    },
    {
      name: "Random Name #3",
      description: "Hello World!",
      img_url: "/Images/Carousel/8.jpg",
    },
    // {
    //   name: "Random Name #3",
    //   description: "Hello World!",
    //   img_url: "/Images/Carousel/9.jpg",
    // },
    {
      name: "Random Name #3",
      description: "Hello World!",
      img_url: "/Images/Carousel/10.jpg",
    },
    {
      name: "Random Name #3",
      description: "Hello World!",
      img_url: "/Images/Carousel/11.jpg",
    },
    // {
    //   name: "Random Name #3",
    //   description: "Hello World!",
    //   img_url: "/Images/Carousel/12.jpg",
    // },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex" }, background: "black" }}>
        {/* <ImageList sx={{ width: '100%', height: 500 }} cols={1} rowHeight={1}>
                
                    <ImageListItem >
                        <img
                            src={`${props.item.img_url}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${props.item.img_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={props.item.name}
                            loading="lazy"
                        />
                    </ImageListItem>
                
            </ImageList> */}
        <img className='carousel-div' src={props.item.img_url} alt="carr" width="100%" />
        {/* <div className='carousel-text'>

                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>

                <Button className="CheckButton">
                    Check it out!
                </Button>
            </div> */}
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" }, background: "black" }}>
        <img src={props.item.img_url} alt="carr" width="100%" />
      </Box>
    </>
  );
}

export default Example;
