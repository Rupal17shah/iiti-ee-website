import { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Cards from "../components/ResearchBody/Cards";
import { useParams } from "react-router-dom";
export default function ProjectPage() {
  const [data, setData] = useState();
  const [isError, setIsError] = useState();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/research/project/read`)
      .then((response) => setData(response.data))
      .catch((error) => setIsError(error.message));
    if (!isError) {
      setIsError("Not Available");
    }
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
      >
        <Typography variant="h4" color="primary" textAlign="center">
          Projects
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
          <br />
        </motion.div>
      </Box>
      <Box>
        <table>
          <tr>
            <th>Title</th>
            <th align="right">Worker</th>
            <th align="right">Funding</th>
            <th align="right">duration</th>
            <th align="right">project_type</th>
          </tr>

          {data?.map((item, key) => (
            <>
              <tr>
                <td>{item.title}</td>
                <td align="center">{item.worker}</td>
                <td align="center">{item.funding}</td>
                <td align="center">{item.duration}</td>
                <td align="center">{item.project_type}</td>
              </tr>
            </>
          ))}
        </table>
      </Box>
      <br/>
    </>
  );
}
