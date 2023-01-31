import React from "react";
import Event from "../components/Event";
import { Button, Grid, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { borderColor } from "@mui/system";
export default function Home() {
  const [news, setNews] = useState(1);
  const newsHandler = () => {
    setNews(1);
  };
  const announcementHandler = () => {
    setNews(0);
  };
  return (
    <div className="buttons">
      <Grid
        container
        justifyContent="Left"
        direction="row"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Button
            disableRipple
            variant={news === 1 ? "contained" : "outlined"}
            sx={{ borderRadius: 0 }}
            color="primary"
            className="news"
            onClick={newsHandler}
          >
            News
          </Button>
        </Grid>
        <Grid item>
          <Button
            disableElevation
            disableRipple
            variant={news === 0 ? "contained" : "outlined"}
            sx={{
              borderRadius: 0,
            }}
            color="primary"
            onClick={announcementHandler}
          >
            Announcement
          </Button>
        </Grid>
      </Grid>
      <Divider sx={{ bgcolor: "primary.main", borderBottomWidth: 1, opacity: 1 }} />
      {/* <hr style={{ color: "#9D0455", borderColor:"#9D0455"}}></hr> */}
      <Grid>
        {news === 1 ? (
          <>
            <Typography>news content</Typography>
          </>
        ) : (
          <>
            <Typography>Announcement content</Typography>
          </>
        )}
      </Grid>

      <Grid container>
        <Grid item>
          <Event />
        </Grid>
      </Grid>
    </div>
  );
}
