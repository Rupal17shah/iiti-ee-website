import React from "react";
import { Typography, Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
export default function StatsPage() {
  const param = useParams();
  console.log(param);
  return (
    <div>
      <>
        <Container sx={{ py: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
          >
            <Typography variant="h4" color="primary" textAlign="center">
              Statistics
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
          <Box>
            {param.params === "Faculty" ? (
              <>
                <img src="/Images/faculty_number.jpg" />
              </>
            ) : (
              <></>
            )}
            {param.params === "Students" ? (
              <>
                <img src="/Images/degree_awarded.jpg" />
              </>
            ) : (
              <></>
            )}
            {param.params === "Publications" ? (
              <>
                <center>
                  <img src="/Images/journals.jpg" />
                </center>
              </>
            ) : (
              <></>
            )}
            {param.params === "Placements" ? (
              <Box
                sx={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <img width="50%" src="/Images/ug_placements.jpg" />
                <img width="50%" src="/Images/pg_placements.jpg" />
              </Box>
            ) : (
              <></>
            )}
            {param.params === "Patents" ? (
              <>
                <img src="/Images/patent_data.jpg" />
              </>
            ) : (
              <></>
            )}
            {param.params === "Projects" ? (
              <>
                <center>
                  <img src="/Images/projects_number.jpg" />
                </center>
              </>
            ) : (
              <></>
            )}
            {param.params === "Grants" ? (
              <>
                <img src="/Images/project_grant.jpg" />
              </>
            ) : (
              <></>
            )}
          </Box>
        </Container>
      </>
    </div>
  );
}