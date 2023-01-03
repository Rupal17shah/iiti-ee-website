import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import bg from "../images/bg.png";

export default function Caraousel() {
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <div>
      <div className="container">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-10" src={bg} alt="First slide" />
          </Carousel.Item>
          {/* <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={about}
                        alt="Second slide"
                      />
                    </Carousel.Item> */}
          {/* <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={image4}
                        alt="fourth slide"
                      />
                    </Carousel.Item> */}
        </Carousel>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
