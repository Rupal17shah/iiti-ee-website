import React from 'react';
import { Typography, Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import axios from 'axios';
import { useState, useEffect } from 'react';
import BTech from "../components/Programs/BTech.jpg"
import MTech from "../components/Programs/MTech.jpg"


export default function MTech_Courses() {
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
            viewport={{ once: true }}
          >
            <Typography variant="h4" color="primary" textAlign="center">
              Programs
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
              viewport={{ once: true }}
            >
              <Box sx={{ borderTop: "7px solid #9d0455", px: 5 }}>
                <hr />
              </Box>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
            >
              <Box sx={{ borderTop: "7px solid black", px: 4 }}>
                <hr />
              </Box>
            </motion.div>
          </Box>

        </Container>
      </div>
      <div className='flex w-full items-center lg:items-start lg:justify-around flex-col lg:flex-row py-16'>

        <a href='/about'>
          <div className='w-96 h-96 border-2 shadow-md flex flex-col'>
            <div className='w-full h-3/4 border-b-2 shadow-md'><img src={BTech} className="object-cover h-full mb-0"></img></div>
            <div className='w-full h-1/4 text-2xl capitalize text-center items-center pt-3 px-4'>Courses offered for B.Tech by Electrical Engineering</div>
          </div>
        </a>
        <a href="/about">
          <div className='w-96 h-96 border-2 shadow-md flex flex-col mt-8 lg:mt-0'>
            <div className='w-full h-3/4 border-b-2 shadow-md'><img src={MTech} className="object-cover h-full mb-0"></img></div>
            <div className='w-full h-1/4 text-2xl capitalize text-center items-center pt-3 px-4'>Courses offered for M.Tech by Electrical Engineering</div>
          </div>
        </a>


      </div>
    </div>
  );
}
