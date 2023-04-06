import React from 'react'
import { Typography, Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useEffect,useState } from 'react';
export default function PaperPage() {
  const [data,setData] = useState();
  useEffect(()=>{

  },[])
    const params = useParams();
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
              Papers
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
          <br />
          <Typography variant="h5" color="teritiary" textAlign="center">
              {params.year}
            </Typography>
<br/>
<br/>
            <table>
              <tr>
              <th style={{width:"50vw", textAlign:"center"}}>
                Person
                </th>
                <th style={{width:"50vw", textAlign:"center"}}>
                Papers
                </th>
                </tr>
                {data?.map((item,key)=>
                (
                  <>
<tr>
  <td style={{width:"50vw"}}>
  {item.person}
    </td>
    <td style={{width:"50vw"}}>
  {item.paper}
    </td>
  </tr>
                  </>
                ))}
              </table>
        </Container>
      </>
    </div>
  )
}
