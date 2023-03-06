import React from "react";
import { Typography, Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Divider } from "@mui/material";
export default function Domain() {
  return (
    <div>
      <Container sx={{ py: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
        >
          <Typography variant="h4" color="primary" textAlign="center">
            Research
          </Typography>
          <Typography variant="h5" color="teritiary" textAlign="center">
            Power Electronics
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

        <Typography variant="h6" fontWeight={400} color={"primary.main"}>
          Biomedical Signal Processing
        </Typography>
        <Container>
          <Typography variant="p">description </Typography>
        </Container>
        <br />
        <Divider sx={{ bgcolor: "primary.main" }} />
        <br />
        <Typography variant="h6" fontWeight={400} color={"primary.main"}>
          People
        </Typography>
        <Container>
          <ul>
            <li>people1</li>
          </ul>
        </Container>
      </Container>
    </div>
  );
}
