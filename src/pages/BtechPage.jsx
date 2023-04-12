import React from "react";
import { Typography, Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";
import Btech_Card from "../components/PeopleBody/Btech_Card";
import Staff_Card from "../components/PeopleBody/Staff_Card";
import PHD_Card from "../components/PeopleBody/PHD_Card";
import { useState, useEffect } from "react";
import Alumni_Cards from "../components/PeopleBody/Alumni_Cards";
export default function BtechPage(props) {
  return (
    <div>
      <Container sx={{ py: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 35 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" color="primary" textAlign="center">
            People
          </Typography>
          <Typography variant="h5" color="teritiary" textAlign="center">
            Department of Electrical Engineering
          </Typography>
        </motion.div>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 35 }}
            viewport={{ once: true }}
          >
            <Box sx={{ borderTop: "7px solid #105297", px: 5 }}>
              <hr />
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 35 }}
            viewport={{ once: true }}
          >
            <Box sx={{ borderTop: "7px solid black", px: 4 }}>
              <hr />
            </Box>
          </motion.div>
        </Box>
        <Typography
          variant="h5"
          color="primary"
          textAlign="center"
          fontWeight={600}
          marginTop={3}
        >
          {props.heading}
        </Typography>

        {props.heading === "Btech" ? (
          <>
            <Grid
              container
              justifyContent={"space-around"}
              alignItems={"center"}
              direction={"row"}
              spacing={6}
              sx={{ pt: 4 }}
            >
              <Grid item>
                <Btech_Card
                  specialisation={"MTech"}
                  name={"Vijay"}
                  photo={"Images/logo/VLSI.jpg"}
                  topic={
                    "Speech signal analysis on non-stationary signals models"
                  }
                  email={"vijay_as@iiti.ac.in"}
                />
              </Grid>
              <Grid item>
                <Btech_Card
                  specialisation={"MTech"}
                  name={"Vijay"}
                  photo={"Images/logo/VLSI.jpg"}
                  topic={
                    "Speech signal analysis on non-stationary signals models"
                  }
                  email={"vijay_as@iiti.ac.in"}
                />
              </Grid>
              <Grid item>
                <Btech_Card
                  specialisation={"MTech"}
                  name={"Vijay"}
                  photo={"Images/logo/VLSI.jpg"}
                  topic={
                    "Speech signal analysis on non-stationary signals models"
                  }
                  email={"vijay_as@iiti.ac.in"}
                />
              </Grid>
            </Grid>
          </>
        ) : (
          <></>
        )}

        {props.heading === "Mtech" ? (
          <>
            <Grid
              container
              justifyContent={"space-around"}
              alignItems={"center"}
              direction={"column"}
              spacing={1}
              sx={{ pt: 4 }}
            >
              <Grid item>Mtech students of year 2021</Grid>
              <Grid item>Mtech students of year 2022</Grid>
              <Grid item>Mtech students of year 2023</Grid>
            </Grid>
          </>
        ) : (
          <></>
        )}

        {props.heading === "Faculty" ? (
          <>
            <Grid
              container
              justifyContent={"space-around"}
              alignItems={"center"}
              direction={"column"}
              spacing={6}
              sx={{ pt: 4 }}
            >
              <Grid item>
                <Staff_Card
                  specialisation={"MTech"}
                  name={"Vijay"}
                  photo={"/Images/logo/VLSI.jpg"}
                  research1={"Microgrids and Distributed generation"}
                  research2={"Microgrids and Distributed generation"}
                  research3={"Microgrids and Distributed generation"}
                  research4={"Microgrids and Distributed generation"}
                  email={"vijay_as@iiti.ac.in"}
                  ph={"1234-1234-123"}
                  address={"POD silicon"}
                />
              </Grid>
            </Grid>
          </>
        ) : (
          <></>
        )}

        {props.heading === "PhD" ? (
          <>
            <Grid
              container
              justifyContent={"space-around"}
              alignItems={"center"}
              direction={"column"}
              spacing={6}
              sx={{ pt: 4 }}
            >
              <Grid item>
                <PHD_Card
                  specialisation={"MTech"}
                  name={"Vijay"}
                  photo={"Images/logo/VLSI.jpg"}
                  topic={
                    "Speech signal analysis on non-stationary signals models"
                  }
                  email={"vijay_as@iiti.ac.in"}
                />
              </Grid>
            </Grid>
          </>
        ) : (
          <></>
        )}

        {/* {props.heading === "Alumni" ? (
          <>
            <Grid
              container
              justifyContent={"space-around"}
              alignItems={"center"}
              direction={"column"}
              spacing={2}
              sx={{ pt: 4 }}
            >
              <Grid item>alumni of year 2021</Grid>
              <Grid item>alumni of year 2022</Grid>
              <Grid item>alumni of year 2023</Grid>
            </Grid>
          </>
        ) : (
          <></>
        )} */}

        {props.heading === "Staff" ? (
          <>
            <Grid
              container
              justifyContent={"space-around"}
              alignItems={"center"}
              direction={"column"}
              spacing={6}
              sx={{ pt: 4 }}
            >
              <Grid item>
                <Btech_Card
                  specialisation={"MTech"}
                  name={"Vijay"}
                  photo={"Images/logo/VLSI.jpg"}
                  topic={
                    "Speech signal analysis on non-stationary signals models"
                  }
                  email={"vijay_as@iiti.ac.in"}
                />
              </Grid>
            </Grid>
          </>
        ) : (
          <></>
        )}

        {/* /////////////////////Alumni////////////////////// */}

        {props.heading === "Alumni" ? (
          <>
            <Grid
              container
              justifyContent={"space-around"}
              alignItems={"center"}
              direction={"row"}
              spacing={6}
              sx={{ pt: 4 }}
            >
              <Grid item>
                <Alumni_Cards
                  specialisation={"MTech"}
                  name={"Vijayyyyyyyyyyyyy"}
                  photo={"Images/logo/VLSI.jpg"}
                  topic={
                    "Speech signal analysis on non-stationary signals models"
                  }
                  email={"vijay_as@iiti.ac.in"}
                />
              </Grid>
              <Grid item>
                <Alumni_Cards
                  specialisation={"MTech"}
                  name={"Vijayyyyyyyyyyyyy"}
                  photo={"Images/logo/VLSI.jpg"}
                  topic={
                    "Speech signal analysis on non-stationary signals models"
                  }
                  email={"vijay_as@iiti.ac.in"}
                />
              </Grid>
              <Grid item>
                <Alumni_Cards
                  specialisation={"MTech"}
                  name={"Vijayyyyyyyyyyyyy"}
                  photo={"Images/logo/VLSI.jpg"}
                  topic={
                    "Speech signal analysis on non-stationary signals models"
                  }
                  email={"vijay_as@iiti.ac.in"}
                />
              </Grid>
              <Grid item>
                <Alumni_Cards
                  specialisation={"MTech"}
                  name={"Vijayyyyyyyyyyyyy"}
                  photo={"Images/logo/VLSI.jpg"}
                  topic={
                    "Speech signal analysis on non-stationary signals models"
                  }
                  email={"vijay_as@iiti.ac.in"}
                />
              </Grid>
              <Grid item>
                <Alumni_Cards
                  specialisation={"MTech"}
                  name={"Vijayyyyyyyyyyyyy"}
                  photo={"Images/logo/VLSI.jpg"}
                  topic={
                    "Speech signal analysis on non-stationary signals models"
                  }
                  email={"vijay_as@iiti.ac.in"}
                />
              </Grid>
              <Grid item>
                <Alumni_Cards
                  specialisation={"MTech"}
                  name={"Vijayyyyyyyyyyyyy"}
                  photo={"Images/logo/VLSI.jpg"}
                  topic={
                    "Speech signal analysis on non-stationary signals models"
                  }
                  email={"vijay_as@iiti.ac.in"}
                />
              </Grid>
              <Grid item>
                <Alumni_Cards
                  specialisation={"MTech"}
                  name={"Vijayyyyyyyyyyyyy"}
                  photo={"Images/logo/VLSI.jpg"}
                  topic={
                    "Speech signal analysis on non-stationary signals models"
                  }
                  email={"vijay_as@iiti.ac.in"}
                />
              </Grid>
            </Grid>
          </>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
}
