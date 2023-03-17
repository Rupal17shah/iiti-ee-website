import React from "react";
import { Typography, Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Cards from "../components/ResearchBody/Cards";
import Staff_Card from "../components/ResearchBody/Staff_Card";
import PHD_Card from "../components/ResearchBody/PHD_Card";
import Btech_Card from "../components/ResearchBody/Btech_Card";

export default function CoursePage() {
  return (
    <div>
      <Container sx={{ py: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
        >
          <Typography variant="h4" color="primary" textAlign="center">
            Courses
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

        <Grid
          container
          justifyContent="space-around"
          direction="row"
          alignItems="top"
          spacing={2}
        >
          <Grid item>
            <Cards
              specialisation={"BTech"}
              action={"/btech"}
              photo={"Images/logo/signal.jpg"}
            />
          </Grid>
          <Grid item>
            <Cards
              specialisation={"MTech"}
              action={"/mtech"}
              photo={"Images/logo/VLSI.jpg"}
            />
          </Grid>
          <Grid
          container
          justifyContent={"space-around"}
          alignItems={"center"}
          direction={"column"}
          spacing={6}
          sx={{ pt: 4 }}>

            <Grid item>
              <Staff_Card
                specialisation={"MTech"}
                name={"Vijay"}
                action={"/mtech"}
                photo={"Images/logo/VLSI.jpg"}
                research1={"Microgrids and Distributed generation"}
                research2={"Microgrids and Distributed generation"}
                research3={"Microgrids and Distributed generation"}
                research4={"Microgrids and Distributed generation"}
                email={"vijay_as@iiti.ac.in"}
                ph={"1234-1234-123"}
                address={"POD silicon"}
              />
            </Grid>
            <Grid item>
              <PHD_Card
                specialisation={"MTech"}
                name={"Vijay"}
                action={"/mtech"}
                photo={"Images/logo/VLSI.jpg"}
                topic={"Speech signal analysis on non-stationary signals models"}
                email={"vijay_as@iiti.ac.in"}
              />
            </Grid>
            <Grid item>
              <Btech_Card
                specialisation={"MTech"}
                name={"Vijay"}
                action={"/mtech"}
                photo={"Images/logo/VLSI.jpg"}
                topic={"Speech signal analysis on non-stationary signals models"}
                email={"vijay_as@iiti.ac.in"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
