import React from "react";
import { Typography, Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Divider } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Signal() {
  const [research, setResearch] = React.useState([]);
  const [isError, setIsError] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://127.0.0.1:8000/api/research/Communication, Signal and Image Processing"
      )
      .then((response) => setResearch(response.data))
      .catch((error) => setIsError(error.message));
    if (!isError) {
      setResearch("Not Available");
    }
  }, []);
  console.log(research.people);
  const a = research.people;
  const b = research.research;
  return (
    <div>
      <div>
        <Container sx={{ py: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 35 }}
            viewport={{ once: true }}
          >
            <Typography variant="h4" color="primary" textAlign="center">
              Research
            </Typography>
            <Typography variant="h5" color="teritiary" textAlign="center">
              Communications and Signal Processing
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
          <br />
          <img src="/Images/signal_log.JPG" alt="" />
          <br />

          {b?.map((item2, i) => (
            <>
              <Typography variant="h6" fontWeight={400} color={"primary.main"}>
                {item2.name}
              </Typography>
              <Container>
                <Typography variant="p">{item2.description} </Typography>
              </Container>
            </>
          ))}

          <br />
          <Divider sx={{ bgcolor: "primary.main" }} />
          <br />
          <Typography variant="h6" fontWeight={400} color={"primary.main"}>
            People
          </Typography>
          <Container>
            {a?.map((item, i) => (
              <Typography fontSize={14}>{item}</Typography>
            ))}
          </Container>
        </Container>
      </div>
    </div>
  );
}
