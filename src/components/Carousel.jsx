import React from "react";
import Carousel from "react-material-ui-carousel";

function Example(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img_url: "bg_1.jpg",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img_url: "bg_2.jpg",
    },
    {
      name: "Random Name #3",
      description: "Hello World!",
      img_url: "bg_3.jpg",
    },
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
      <img
        className="carousel-bg"
        src={props.item.img_url}
        alt="carr"
        width="100%"
        height="650px"
      />
    </>
  );
}

export default Example;
