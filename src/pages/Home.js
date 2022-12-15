import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import { Grid, Typography, Card, Box, Button } from "@mui/material";
import Calendar from "moedim";
import about from "../images/about.jpg";
import Carousel from "react-bootstrap/Carousel";
import bg from '../images/bg.png';
import Footer from "../components/Footer";
    
export default function Home() {
    const [value, setValue] = React.useState(new Date());
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <>
      <div className="home">
        <Navbar />
        <Grid
          container
          justifyContent="left"
          direction="row"
          alignItems="center"
          sx={{ height: 1 }}
        >
          <Grid item>
            <Card
              sx={{
                backgroundColor: "rgb(4,47,82,0.9)",
                marginTop: 10,
                marginLeft: 8,
              }}
            >
              <Typography
                align="left"
                sx={{
                  color: "white",
                  padding: 1,
                  fontFamily: "calibri",
                  fontWeight: "600",
                }}
              >
                WELCOME TO THE DEPARTMENT OF
                <br />
                ELECTRICAL ENGINEERING
              </Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-around"
          direction="row"
          alignItems="center"
          sx={{ height: 50, backgroundColor: "rgb(4,47,82)" }}
        >
          <Grid item xs={4} sx={{ borderRight: "1px solid white" }}>
            <Typography
              align="center"
              sx={{
                color: "white",
                padding: 1,
                fontFamily: "calibri",
                fontWeight: "600",
              }}
            >
              Events
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ borderRight: "1px solid white" }}>
            <Typography
              align="center"
              sx={{
                color: "white",
                padding: 1,
                fontFamily: "calibri",
                fontWeight: "600",
              }}
            >
              Notification
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              align="center"
              sx={{
                color: "white",
                padding: 1,
                fontFamily: "calibri",
                fontWeight: "600",
              }}
            >
              News
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="center"
          direction="row"
          alignItems="center"
          sx={{ height: "37vh" }}
        >
          <Grid
            item
            xs={4}
            sx={{ borderRight: "1px solid black", height: 0.9 }}
          >
            <Grid
              container
              justifyContent="center"
              direction="row"
              alignItems="center"
            >
              <Grid item>
                <Calendar
                  value={value}
                  sx={{ margin: "auto" }}
                  onChange={(d) => setValue(d)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ borderRight: "1px solid black", height: 0.9 }}
          >
            <Grid
              container
              justifyContent="center"
              direction="row"
              alignItems="center"
            >
              <Grid item>
                <Typography align="left">
                  Notif 1
                  <br />
                  Notif 2
                  <br />
                  Notif 2
                  <br />
                  Notif 2
                  <br />
                  Notif 2
                  <br />
                  Notif 2
                  <br />
                  Notif 2<br />
                  Notif 2
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} sx={{ height: 0.9 }}>
            <Grid
              container
              justifyContent="center"
              direction="row"
              alignItems="center"
            >
              <Grid item>
                <Typography align="left">
                  News 1
                  <br />
                  News 2
                  <br />
                  News 2
                  <br />
                  News 2
                  <br />
                  News 2
                  <br />
                  News 2
                  <br />
                  News 2<br />
                  News 2
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="left"
          direction="row"
          alignItems="center"
          sx={{ height: 50, backgroundColor: "rgb(4,47,82)" }}
        >
          <Grid item>
            <Typography align="left " sx={{ color: "white", marginX: 5 }}>
              Latest News Flash
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-around"
          direction="row"
          sx={{ backgroundColor: "#C3DCF0" }}
        >
          <Typography
            variant="h5"
            sx={{ fontFamily: "calibri", fontWeight: "600", my: 10 }}
          >
            MORE ABOUT ELECTRICAL DEPARTMENT
          </Typography>
          <Grid
            container
            justifyContent="space-around"
            direction="row"
            sx={{ height: "45vh" }}
          >
            <Grid item xs={6}>
              <img src={about} style={{ width: "25vw" }} />
            </Grid>
            <Grid item xs={6}>
              <Typography align="left" sx={{ mx: 15, my: 4 }}>
                Welcome to the website of the Department of Electrical
                Engineering, IIT Indore. The department offers B.Tech, M.S
                (Research), M.Tech and Ph.D. programs in Electrical Engineering.
                The department currently has 15 faculty members with expertise
                in diverse areas including Power Systems and Power Electronics,
                Integration of Renewable Energy Sources, Smart Grid,
                Nanotechnology and Nanoelectronics, Communications and
                Networking, Signal Processing, Bio-photonics.
              </Typography>
              <Button variant="outlined" sx={{ color: "#1E327B" }}>
                Learn More
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="left"
            direction="row"
            alignItems="center"
            sx={{ height: 50, backgroundColor: "rgb(4,47,82)" }}
          ></Grid>

          <Grid
            container
            justifyContent="left"
            direction="row"
            sx={{ height: "60vh", backgroundColor: "#fff" }}
          >
            <div className="container">
              <div className="row">
                <Box>
                  <Typography
                    variant="h4"
                    align="left"
                    sx={{ mt: 15, fontWeight: 600 }}
                  >
                    GLIMPSES...
                  </Typography>
                </Box>
                <div className="conatainer">
                  <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={bg}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    {/* <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={about}
                        alt="Second slide"
                      />
                    </Carousel.Item> */}
                    {/* <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={image4}
                        alt="fourth slide"
                      />
                    </Carousel.Item> */}
                  </Carousel>
                </div>
              </div>
            </div>
                  </Grid>
                
        </Grid>
        <footer>
          <Footer/>
        </footer>
      </div>
    </>
  );
}
