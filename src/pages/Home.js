import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import { Grid, Typography, Card, Box } from "@mui/material";
import Calendar from "moedim";

export default function Home() {
  const [value, setValue] = React.useState(new Date());
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
          sx={{ height: "43vh" }}
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
                      <Typography align="left ">
                          Latest News Flash 
                      </Typography>
                  </Grid>
        </Grid>
              
      </div>
    </>
  );
}
