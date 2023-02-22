import * as React from "react";
import { render } from "react-dom";
import "./styles.css";
import { ReactPhotoCollage } from "react-photo-collage";
import { Typography ,Container} from '@mui/material'


const setting = {
 
  width: "1200px",
  height: ["450px", "350px"],
  
  layout: [1,3,2,3,2,3,2],
  photos: [
    {
      source:
        'IMG_6913.JPG'
    },
    {
      source:
        'IMG_6925.JPG' 
    },
    {
      source:
        'IMG_6920.JPG'
    },
    {
      source:
      'IMG_6928.JPG'
    },
    {
      source:
      'IMG_6805.JPG'
    },  
    {
      source:
        '9K6A6820.JPG'
    },
    {
      source:
        '9K6A6859.JPG'
    },
    {
      source:
      '9K6A6855.JPG'
    },  
    {
      source:
      'IMG_6892.JPG'
    },
    {
      source:
      '9K6A6827.JPG'
    }, 
    {
      source:
      '9K6A6843.JPG'
    },
    {
      source:
      '9K6A6862.JPG'
    },
    {
      source:
      '9K6A6826.JPG'
    },
    {
      source:
      '9K6A6838.JPG'
    },
    {
      source:
      '9K6A6853.JPG'
    },
    {
      source:
      '9K6A6861.JPG'
    }
   ],
  showNumOfRemainingPhotos: true
 
}
  ;

  function Gallery() {
  
  return (
    <>
     <Typography variant="h3" my={3} align='center'>
          Gallery
          </Typography>
          <Container>
    <ReactPhotoCollage {...setting} />
    </Container>
   </>
  );
  }

   const rootElement = document.getElementById("root");
  render(<Gallery/>, rootElement);

  export default Gallery