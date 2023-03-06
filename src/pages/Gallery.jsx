import * as React from "react";
import { ReactPhotoCollage } from "react-photo-collage";
import { Typography, Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

const setting = {
  width: "1200px",
  height: ["450px", "350px"],

  layout: [1, 3, 2, 3, 2, 3, 2],
  photos: [
    {
      source: "Images/gallery/IMG_6913.JPG",
    },
    {
      source: "Images/gallery/IMG_6925.JPG",
    },
    {
      source: "Images/gallery/IMG_6920.JPG",
    },
    {
      source: "Images/gallery/IMG_6928.JPG",
    },
    {
      source: "Images/gallery/IMG_6805.JPG",
    },
    {
      source: "Images/gallery/9K6A6820.JPG",
    },
    {
      source: "Images/gallery/9K6A6859.JPG",
    },
    {
      source: "Images/gallery/9K6A6855.JPG",
    },
    {
      source: "Images/gallery/IMG_6892.JPG",
    },
    {
      source: "Images/gallery/9K6A6827.JPG",
    },
    {
      source: "Images/gallery/9K6A6843.JPG",
    },
    {
      source: "Images/gallery/9K6A6862.JPG",
    },
    {
      source: "Images/gallery/9K6A6826.JPG",
    },
    {
      source: "Images/gallery/9K6A6838.JPG",
    },
    {
      source: "Images/gallery/9K6A6853.JPG",
    },
    {
      source: "Images/gallery/9K6A6861.JPG",
    },
  ],
  showNumOfRemainingPhotos: true,
};
function Gallery() {
  return (
    <>
      <Container sx={{ py: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
        >
          <Typography variant="h4" color="primary" textAlign="center">
            Gallery
          </Typography>
          <Typography variant="h5" color="teritiary" textAlign="center">
            Department of Electrical Engineering
          </Typography>
        </motion.div>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
          >
            <Box sx={{ borderTop: "7px solid #9d0455", px: 5 }}>
              <hr />
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
          >
            <Box sx={{ borderTop: "7px solid black", px: 4 }}>
              <hr />
            </Box>
          </motion.div>
        </Box>
        <br />
        <br />

        <ReactPhotoCollage {...setting} />
      </Container>
    </>
  );
}

export default Gallery;
