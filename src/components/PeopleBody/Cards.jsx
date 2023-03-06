import React from 'react'
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
          <Card sx={{ maxWidth: 500, bgcolor: "primary.main" }}>
            <ButtonBase
              onClick={() => {
                navigate(string.concat("/",props.people_type));
              }}
            >
              <CardContent>
                <Typography color={"white"}>{props.people_type}</Typography>
              </CardContent>
            </ButtonBase>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
