import React from "react";
import { Typography, Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";
import Btech_Card from "../components/PeopleBody/Btech_Card";
import Staff_Card from "../components/PeopleBody/Staff_Card";
import PHD_Card from "../components/PeopleBody/PHD_Card";
import { useState, useEffect } from "react";
import Alumni_Cards from "../components/PeopleBody/Alumni_Cards";
import CommonCard from "../components/PeopleBody/Common_Cards";
import { useParams } from "react-router-dom";

const year = (props) => {};

export default function BtechPage(props) {
  const params = useParams();
  console.log(params.program);
  console.log(params.year);

  return (
    <div>
      <Container sx={{ py: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
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
        <Typography
          variant="h5"
          color="primary"
          textAlign="center"
          fontWeight={600}
          marginTop={3}
        >
          {params.program}
        </Typography>

        {params.program === "Faculty" ? (
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
                <Staff_Card />
              </Grid>
            </Grid>
          </>
        ) : (
          <></>
        )}
        {params.program === "Staff" ? (
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
                <CommonCard year={''} program={params.program} />
              </Grid>
            </Grid>
          </>
        ) : (
          <></>
        )}

        {params.program === "BTech" ? (
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
                <CommonCard year={params.year} program={params.program} />
              </Grid>
            </Grid>
          </>
        ) : (
          <></>
        )}

        {params.program === "MTech" ? (
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
                <CommonCard
                  name={"Vipul"}
                  photo={"/Images/logo/VLSI.jpg"}
                  rollno={"210002067"}
                  year={"2021"}
                />
              </Grid>
              <Grid item>
                <CommonCard
                  name={"Vipul"}
                  photo={null}
                  rollno={"210002067"}
                  year={"2021"}
                />
              </Grid>
              <Grid item>
                <CommonCard
                  name={"Vipul"}
                  photo={null}
                  rollno={"210002067"}
                  year={"2021"}
                />
              </Grid>
              <Grid item>
                <CommonCard
                  name={"Vipul"}
                  photo={"/Images/logo/VLSI.jpg"}
                  rollno={"210002067"}
                  year={"2021"}
                />
              </Grid>
            </Grid>
          </>
        ) : (
          <></>
        )}

        {params.program === "PhD" ? (
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
                <CommonCard
                  name={"Vipul"}
                  // photo={"/Images/logo/VLSI.jpg"}
                  rollno={"210002067"}
                  year={"2021"}
                />
              </Grid>
            </Grid>
          </>
        ) : (
          <></>
        )}

        {/* /////////////////////Alumni////////////////////// */}

        {params.program === "Alumni" ? (
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
                <CommonCard year={params.year} program={params.program} />
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
