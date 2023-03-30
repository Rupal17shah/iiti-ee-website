import React from 'react';
import { Typography, Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import axios from 'axios';
import { useState, useEffect} from 'react';
import Cards from '../components/PeopleBody/Cards';

export default function PeoplePage() {
  const [people, setPeople] = useState([]);
  const [isError, setIsError] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/people/read")
      .then((response) => setPeople(response.data))
      .catch((error) => setIsError(error.message));
    if (!isError) {
      setPeople("Not Available");
    }
  }, []);
  console.log(people);
  return (
    <div>
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
          <Grid
            container
            justifyContent="space-around"
            direction="row"
            alignItems="top"
            spacing={2}
          >
            <Grid item>
              <Cards
                specialisation={"Staff"}
                action={"/people/staff"}
                        />
            </Grid>
            <Grid item>
              <Cards
                specialisation={"BTech"}
                action={"/people/btech"}
                // photo={"Images/logo/VLSI.jpg"}
              />
            </Grid>
            <Grid item>
              <Cards
                specialisation={"Faculty"}
                action={"/people/faculty"}
                // photo={"Images/logo/VLSI.jpg"}
              />
            </Grid>
            <Grid item>
              <Cards
                specialisation={"Phd"}
                action={"/people/phd"}
                // photo={"Images/logo/VLSI.jpg"}
              />
            </Grid>
            <Grid item>
              <Cards
                specialisation={"MTech"}
                action={"/people/mtech"}
                // photo={"Images/logo/VLSI.jpg"}
              />
            </Grid>
            <Grid item>
              <Cards
                specialisation={"Alumni"}
                action={"/people/alumni"}
                // photo={"Images/logo/VLSI.jpg"}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
