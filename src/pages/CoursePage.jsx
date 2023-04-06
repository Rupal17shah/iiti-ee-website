import React from "react";
import { Typography, Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Cards from "../components/ResearchBody/Cards";
import { useParams } from "react-router-dom";
export default function CoursePage() {
  const param = useParams();

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
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <Box>
          {param.program === "BTech" ? (
            <>
              <div className="flex w-full items-center flex-col py-16">
                <div className="justify-start -ml-16">
                  <h1 className="text-xl uppercase mb-8">{param.program}</h1>
                  <h1 className="text-xl uppercase mb-8">semester II</h1>
                  <table className="border-2 ml-32">
                    <tr className="border-2 px-2 py-2">
                      <th className="border-2 text-center px-2 py-2 capitalize w-48">
                        Course Code
                      </th>
                      <th className="border-2 text-center w-96">Course Name</th>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 104</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Basic Electrical and Electronics Engineering
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 154</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Basic Electrical and Electronics Engineering Lab
                      </td>
                    </tr>
                  </table>

                  <h1 className="text-xl uppercase my-8">semester III</h1>
                  <table className="border-2 ml-32">
                    <tr className="border-2 px-2 py-2">
                      <th className="border-2 text-center px-2 py-2 capitalize w-48 bg-blue-200">
                        Course Code
                      </th>
                      <th className="border-2 text-center w-96 bg-blue-200">
                        Course Name
                      </th>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 201</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Network Theory
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 203</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Electronic Devices
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 205</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Introduction to Electrical Systems
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 253</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        electronics devices lab
                      </td>
                    </tr>
                  </table>

                  <h1 className="text-xl uppercase my-8">semester IV</h1>
                  <table className="border-2 ml-32">
                    <tr className="border-2 px-2 py-2">
                      <th className="border-2 text-center px-2 py-2 capitalize w-48 bg-blue-200">
                        Course Code
                      </th>
                      <th className="border-2 text-center w-96 bg-blue-200">
                        Course Name
                      </th>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 202</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Signals and systems
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 204</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Analog circuits
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 206</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Electrical machines and power electronics
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 208</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        digital Systems
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 254</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        analog circuits lab
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 256</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Electrical machines lab
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 258</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        digital Systems lab
                      </td>
                    </tr>
                  </table>

                  <h1 className="text-xl uppercase my-8">semester V</h1>
                  <table className="border-2 ml-32">
                    <tr className="border-2 px-2 py-2">
                      <th className="border-2 text-center px-2 py-2 capitalize w-48 bg-blue-200">
                        Course Code
                      </th>
                      <th className="border-2 text-center w-96 bg-blue-200">
                        Course Name
                      </th>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 301N</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Microprocessors and digital systems design
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 303</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Probability and random processes
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 305</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        electromagnetic waves
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 307</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Communication systems
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 309</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Electrical measurements and instrumentation
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 311</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        VLSI systems and technology
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 351N</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Microprocessors and digital systems design lab
                      </td>
                    </tr>
                  </table>

                  <h1 className="text-xl uppercase my-8">semester V</h1>
                  <table className="border-2 ml-32">
                    <tr className="border-2 px-2 py-2">
                      <th className="border-2 text-center px-2 py-2 capitalize w-48 bg-blue-200">
                        Course Code
                      </th>
                      <th className="border-2 text-center w-96 bg-blue-200">
                        Course Name
                      </th>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 301N</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Microprocessors and digital systems design
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 303</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Probability and random processes
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 305</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        electromagnetic waves
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 307</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Communication systems
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 309</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Electrical measurements and instrumentation
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 311</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        VLSI systems and technology
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 351N</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Microprocessors and digital systems design lab
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}

          {param.program === "MTech" ? (
            <>
              <div className="flex w-full items-center flex-col py-16">
                <div className="justify-start -ml-16">
                  <h1 className="text-xl uppercase mb-8">{param.program}</h1>

                  <h1 className="text-xl uppercase mb-8"></h1>
                  <table className="border-2 ml-32">
                    <tr className="border-2 px-2 py-2">
                      <th className="border-2 text-center px-2 py-2 capitalize w-48">
                        Course Code
                      </th>
                      <th className="border-2 text-center w-96">Course Name</th>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 603 4</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Optimization Techniques
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 641</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Advanced Signal Processing
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 643</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Detection and Estimation Theory
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 701</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Time-Frequency Analysis
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 441</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Advanced Signal Processing
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">CS 601</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Soft Computing
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 642</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Wireless Communication
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 644</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Image Processing
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 646</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Information and Coding Theory
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">CS 401</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Soft Computing
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 446</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        Information and Coding Theory
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 698</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        PG seminar course
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 799</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        M. Tech. Research Project (Stage-I)
                      </td>
                    </tr>
                    <tr>
                      <td className="border-2 px-2 py-2">EE 800</td>
                      <td className="border-2 px-2 py-2 capitalize">
                        M. Tech. Research Project (Stage-II)
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </Box>
      </Container>
    </div>
  );
}
