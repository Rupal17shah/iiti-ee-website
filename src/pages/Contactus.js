import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import { Grid, Typography, Card, Box, Button } from "@mui/material";

export default function Contactus() {
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
          CONTACT US 
        </Typography>
      </div>
      <div className="para mx-5" style={{ textAlign: "left" }}>
        <p className="first">
        Department of Electrical Engineering <br></br>
        Scandium Building<br></br>
        Indian Institute of Technology Indore<br></br>
        Khandwa Road, Simrol<br></br>
        Indore, Madhya Pradesh, India 453552<br></br>
        Email: hodee@iiti.ac.in<br></br>
        </p>
      
     
        <h6>
          Dr. Vivek Kanhangad <br />
          Head of Department
        </h6>
      
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
