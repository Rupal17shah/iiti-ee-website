import React from "react";
import { Card, CardMedia } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ButtonBase } from "@mui/material";
import { CardActionArea } from "@mui/material";

export default function Cards(props) {
  const navigate = useNavigate();
  return (
    <div>
      <br />
      <Grid
        container
        justifyContent="Left"
        direction="row"
        alignItems="top"
        spacing={2}
      >
        <Grid item mt={5}>
          <Card sx={{ width: 350 }}>
            <CardActionArea onClick={() => navigate(props.action)}>
              <CardMedia
                component="img"
                height="140"
                image={props.photo}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  textAlign={"center"}
                >
                  {props.specialisation}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
