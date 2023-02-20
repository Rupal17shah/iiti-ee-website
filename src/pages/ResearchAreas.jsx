import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { motion } from "framer-motion";

// import researchData from '../DATA/researchDATA.js'

const ResearchAreas = (props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 50 }}
      >
        <Typography variant="h3" color="primary" textAlign="center">
          Research Areas
        </Typography>
      </motion.div>
      <Typography variant="h5" color="teritiary" textAlign="center">
        Department of Electrical Engineering
      </Typography>
      <hr />
      {/* </Box>
          <Box sx={{ borderTop: "7px solid black", px: 4 }}> */}
      <hr />
      {/* </Box> */}
      {/* </Box> */}
      <Typography variant="h5" color="primary" textAlign="center">
        {/* {console.log(props.researchDATA.Title1)} */}
        {props.researchDATA.Title1}
      </Typography>
      {/* <Box sx={{py:5, px:5}}> */}
      <Typography variant="h5" sx={{ textDecoration: "underline" }}>
        {props.researchDATA.info1.Heading5}
      </Typography>
      {/* <Box sx={{ px: 2 , py:2}}> */}

      <ul>
        <li>
          <Typography variant="p" fontSize="1rem" fontWeight="2">
            {props.researchDATA.info1.points.point1}
          </Typography>
        </li>
      </ul>
      <ul>
        <li>
          <Typography variant="p" fontSize="1rem" fontWeight="2">
            {props.researchDATA.info1.points.point1}
          </Typography>
        </li>
      </ul>
      <ul>
        <li>
          <Typography variant="p" fontSize="1rem" fontWeight="2">
            {props.researchDATA.info1.points.point1}
          </Typography>
        </li>
      </ul>
      {/* </Box>
        </Box> */}

      {/* <Box sx={{py:5, px:5}}> */}
      <Typography variant="h5" sx={{ textDecoration: "underline" }}>
        {props.researchDATA.info1.Heading5}
      </Typography>
      {/* <Box sx={{ px: 2 , py:2}}> */}

      <ul>
        <li>
          <Typography variant="p" fontSize="1rem" fontWeight="2">
            {props.researchDATA.info1.points.point1}
          </Typography>
        </li>
      </ul>
      <ul>
        <li>
          <Typography variant="p" fontSize="1rem" fontWeight="2">
            {props.researchDATA.info1.points.point1}
          </Typography>
        </li>
      </ul>
      <ul>
        <li>
          <Typography variant="p" fontSize="1rem" fontWeight="2">
            {props.researchDATA.info1.points.point1}
          </Typography>
        </li>
      </ul>
      {/* </Box>
        </Box> */}

      {/* <Box sx={{py:5, px:5}}> */}
      <Typography variant="h5" sx={{ textDecoration: "underline" }}>
        {props.researchDATA.info1.Heading5}
      </Typography>
      {/* <Box sx={{ px: 2 , py:2}}> */}

      <ul>
        <li>
          <Typography variant="p" fontSize="1rem" fontWeight="2">
            {props.researchDATA.info1.points.point1}
          </Typography>
        </li>
      </ul>
      <ul>
        <li>
          <Typography variant="p" fontSize="1rem" fontWeight="2">
            {props.researchDATA.info1.points.point1}
          </Typography>
        </li>
      </ul>
      <ul>
        <li>
          <Typography variant="p" fontSize="1rem" fontWeight="2">
            {props.researchDATA.info1.points.point1}
          </Typography>
        </li>
      </ul>
      {/* </Box> */}
      {/* </Box> */}

      {/* </Box> */}
    </>
  );
};

export default ResearchAreas;
