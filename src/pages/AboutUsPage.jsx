import React from 'react'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { motion } from "framer-motion";


const AboutUsPage = () => {
  return (
    <>
      <Box className="cornerspacing" sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 50 }}
          >
            <Typography variant="h3" color="primary" textAlign="center">
              Welcome to the
            </Typography>
          </motion.div>
          <Typography variant="h5" color="teritiary" textAlign="center">
            Department of Electrical Engineering
          </Typography>
          <hr />
          <hr />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 50 }}
          >
            <Typography variant="p">
              Welcome to the Department of Electrical Engineering - the largest
              department at IIT Indore, comprising internationally renowned
              faculty and state-of- the-art research labs to carry out the
              research endeavors. The Department is home to multiple academic
              courses of undergraduates and graduate ranks, internships for
              meritorious students and research resources reckoned of
              international caliber in the field of Electrical and Electronics
              Engineering. The diverse areas of research expertise of our
              faculty members include Power Systems and Power Electronics,
              Integration of Renewable Energy Sources, Smart Grid,
              Nanotechnology and Nanoelectronics, Communications and Networking,
              Signal Processing, Optoelectronics and Biophotonics. The
              department offers three academic degrees: 1) B.Tech., 2) MS (by
              Research) in Electrical Engineering 3) M.Tech. and 4) Ph.D. in
              Electrical Engineering with a concentration in Electrical,
              Electronics, Signal Processing and Communication Technology. The
              department also offers 5-year dual B.Tech/M.Tech. degree and a
              dual M.Tech./Ph.D. degree. We are focused on preparing students to
              address the contemporary and future challenges of the
              ever-evolving fields involving Electrical Engineering. We strongly
              endorse research collaboration, ties with industries and a
              supportive culture. In tune with the inter-disciplinary research
              philosophy of IIT Indore, we have interlaced Electrical
              Engineering with other departments of IIT Indore into a cohesive
              unit. This combination enhances interdisciplinary collaboration
              among students and faculty, creating cutting-edge research
              opportunities. The ultimate motto is to conduct research and
              contribute to the development of innovative solutions/technologies
              for the benefit of the society, and economy as a whole. We welcome
              you to explore the great opportunities offered in our department
              for students and potential industrial research affiliates akin.
              Also we invite you to learn more about research areas of expertise
              of our leading-edge faculty and research centers/labs by visiting
              the links available in the web page or contacting any of our
              faculty.
            </Typography>
          </motion.div>
        </Container>
      </Box>
    </>
  );
}

export default AboutUsPage