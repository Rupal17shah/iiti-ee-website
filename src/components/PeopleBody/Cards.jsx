import React from "react";
import { Card } from "@mui/material";
import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ButtonBase } from "@mui/material";

export default function Cards(props) {
  const navigate = useNavigate();
  return (
    <div>
      <br />
      <Grid
        container
        justifyContent="Left"
        direction="row"
        alignItems="center"
        spacing={2}
      >
        <Grid item mt={5}>
          <ButtonBase
            onClick={() => {
              navigate("/people/" + `${props.specialisation}`);
            }}
          >
            <Card sx={{ width: 300, backgroundColor:"primary.main"}}>
              <CardContent>
                <Typography color={"white"}>{props.specialisation}</Typography>
              </CardContent>
            </Card>
          </ButtonBase>
        </Grid>
      </Grid>
    </div>
  );
}
