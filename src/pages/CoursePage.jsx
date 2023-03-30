import React from "react";
import { Typography, Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Cards from "../components/ResearchBody/Cards";

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
  
        </Grid>
      </Container>
    </div>
  );
}
