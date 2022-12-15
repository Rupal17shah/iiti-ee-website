import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import { Grid, Typography, Card, Box, Button } from "@mui/material";

export default function AboutDepartment() {
  return (
    <div style={{ backgroundColor: "#C3DCF0" }}>
      <div className="n" style={{ height: "15vh" }}>
        <Navbar />
      </div>
      <div className="heading">
        <Typography
          variant="h5"
          sx={{ fontFamily: "calibri", fontWeight: "600", my: 5 }}
        >
          DEPARTMENT OF ELECTRICAL ENGINEERING
        </Typography>
      </div>
      <div className="para mx-5" style={{ textAlign: "left" }}>
        <p className="first">
          Welcome to the Department of Electrical Engineering - the largest
          department at IIT Indore, comprising internationally renowned faculty
          and state-of- the-art research labs to carry out the research
          endeavors.
        </p>
        <p className="second">
          The Department is home to multiple academic courses of undergraduates
          and graduate ranks, internships for meritorious students and research
          resources reckoned of international caliber in the field of Electrical
          and Electronics Engineering. The diverse areas of research expertise
          of our faculty members include Power Systems and Power Electronics,
          Integration of Renewable Energy Sources, Smart Grid, Nanotechnology
          and Nanoelectronics, Communications and Networking, Signal Processing,
          Optoelectronics and Biophotonics.
        </p>
        <p className="third">
          The department offers three academic degrees: 1) B.Tech., 2) MS (by
          Research) in Electrical Engineering 3) M.Tech. and 4) Ph.D. in
          Electrical Engineering with a concentration in Electrical,
          Electronics, Signal Processing and Communication Technology. The
          department also offers 5-year dual B.Tech/M.Tech. degree and a dual
          M.Tech./Ph.D. degree. We are focused on preparing students to address
          the contemporary and future challenges of the ever-evolving fields
          involving Electrical Engineering. We strongly endorse research
          collaboration, ties with industries and a supportive culture.
        </p>
        <p className="fourth">
          In tune with the inter-disciplinary research philosophy of IIT Indore,
          we have interlaced Electrical Engineering with other departments of
          IIT Indore into a cohesive unit. This combination enhances
          interdisciplinary collaboration among students and faculty, creating
          cutting-edge research opportunities. The ultimate motto is to conduct
          research and contribute to the development of innovative
          solutions/technologies for the benefit of the society, and economy as
          a whole.
        </p>
        <p className="fifth">
          We welcome you to explore the great opportunities offered in our
          department for students and potential industrial research affiliates
          akin. Also we invite you to learn more about research areas of
          expertise of our leading-edge faculty and research centers/labs by
          visiting the links available in the web page or contacting any of our
          faculty.
        </p>

        <h6>
          Dr. Vivek Kanhangad <br />
          Head of Department
        </h6>
        <p className="last">
          Contact:
          <br /> Head, Electrical Engineering
          <br /> Scandium Building, Academic POD <br />
          Indian Institute of Technology Indore <br />
          Khandwa Road, Simrol <br />
          Indore, Madhya Pradesh, India 453552
          <br /> Email: hodee@iiti.ac.in
        </p>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
