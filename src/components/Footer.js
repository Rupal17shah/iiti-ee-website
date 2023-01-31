import React from 'react'
import { Grid, Typography, Card, Box, Button } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleIcon from "@mui/icons-material/People";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ExtensionIcon from "@mui/icons-material/Extension";
import { margin } from '@mui/system';
export default function Footer() {
  return (
    <div
      className="footer"
      style={{ backgroundColor: "rgb(4,47,82,90)", height: "70vh" }}
    >
      <div className="container" style={{ color: "white" }}>
        Achievements
        <Grid
          container
          justifyContent="between"
          direction="row"
          alignItems="center"
          sx={{ height: 1 }}
        >
          <Grid item xs={2} sx={{ marginTop: "50px" }}>
            <ArticleIcon />
          </Grid>
          <Grid item xs={2} sx={{ marginTop: "50px" }}>
            <PeopleIcon />
          </Grid>
          <Grid item xs={2} sx={{ marginTop: "50px" }}>
            <ContentCopyIcon />
          </Grid>
          <Grid item xs={2} sx={{ marginTop: "50px" }}>
            <ArticleIcon />
          </Grid>
          <Grid item xs={2} sx={{ marginTop: "50px" }}>
            <EmojiEventsIcon />
          </Grid>
          <Grid item xs={2} sx={{ marginTop: "50px" }}>
            <ExtensionIcon />
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="between"
          direction="row"
          alignItems="center"
          sx={{ height: 1 }}
        >
          <Grid item xs={2}>
            56 <br /> Active Programs
          </Grid>
          <Grid item xs={2}>
            56 <br /> students learning
          </Grid>
          <Grid item xs={2}>
            56 <br /> publications
          </Grid>
          <Grid item xs={2}>
            56 <br /> awards
          </Grid>
          <Grid item xs={2}>
            56 <br /> patents
          </Grid>
          <Grid item xs={2}>
            56 <br /> projects
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="between"
          direction="row"
          alignItems="top"
          sx={{ margin: 9 }}
        >
          <Grid item xs={2} sx={{ textAlign: "left" }}>
            <br />
            <h6>About Us</h6>
            Department
            <br />
            Administration
            <br />
            Contact Us
            <br />
            Gallery
          </Grid>
          <Grid item xs={2} sx={{ textAlign: "left" }}>
            <br />
            <h6>People</h6>
            Faculty
            <br />
            Staff
            <br />
            Contact Us
            <br />
            phD students
            <br />
            MTech students
            <br />
            BTech students
            <br />
            Alumni
          </Grid>
          <Grid item xs={2} sx={{ textAlign: "left" }}>
            <br />
            <h6> Research </h6>
            Research Areas
            <br />
            Administration
            <br />
            Contact Us
            <br />
            Gallery
          </Grid>
          <Grid item xs={2} sx={{ textAlign: "left" }}>
            <br />
            <h6>About Us</h6>
            Department
            <br />
            Administration
            <br />
            Contact Us
            <br />
            Gallery
          </Grid>
          <Grid item xs={2} sx={{ textAlign: "left" }}>
            <br />
            <h6>About Us</h6>
            Department
            <br />
            Administration
            <br />
            Contact Us
            <br />
            Gallery
          </Grid>
          <Grid item xs={2} sx={{ textAlign: "left" }}>
            <br />
            <h6>About Us</h6>
            Department
            <br />
            Administration
            <br />
            Contact Us
            <br />
            Gallery
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
