import React from "react";
import { Card, CardMedia } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CardActionArea } from "@mui/material";

export default function Btech_Card(props) {
  const navigate = useNavigate();
  return (
    <div>
      <Grid
        container
        justifyContent="Left"
        direction="row"
        alignItems="center"
        spacing={2}
      >
        <Grid item mt={5}>
          <Card sx={{ width: 150 }}>
            <CardMedia
              sx={{ height: 150 }}
              image="Images/Vijay.png"
              title="HOD"
            />
            <CardContent>
              <Typography gutterBottom component="div" fontSize={12}>
                Dr. Vivek Kanhangad
              </Typography>
              <Typography variant="body2" color="text.secondary" fontSize={12}>
                Associate Professor
                <br />
                kvivek[at]iiti.ac.in
                <br />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
