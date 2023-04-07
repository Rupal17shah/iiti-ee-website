import React, { useEffect, useState } from "react";
import { Card, CardMedia } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CardActionArea } from "@mui/material";
import axios from "axios";

export default function Common_Cards(props) {
  const [data, setData] = useState();
  const [isError, setIsError] = useState([]);
  console.log(props);
  useEffect(() => {
    axios
      .get(
        `http://127.0.0.1:8000/api/people/${props.program}/read/${props.year}`
      )
      .then((response) => setData(response.data))
      .catch((error) => setIsError(error.message));
    if (!isError) {
      setData("Not Available");
    }
  }, [props.year]);
  return (
    <div>
      <Grid
        container
        justifyContent="Left"
        direction="row"
        alignItems="center"
        spacing={2}
      >
        {data?.map((item, i) => (
          <>
            {console.log(item.image)}
            <Grid item mt={5}>
              <Card sx={{ width: 150}}>
                {item.image ? (
                  <CardMedia
                    sx={{ height: 150 }}
                    image={`http://localhost:8000${item.image}`}
                    title="Faculty"
                    loading="lazy"
                  />
                ) : (
                  <></>
                )}
                {/* <CardMedia sx={{ height: 150 }} image={props.photo} title="Staff" /> */}
                <CardContent>
                  <Typography gutterBottom component="div" fontSize={12}>
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontSize={12}
                  >
                    <p>{item.roll_no}</p>
                    <p> {item.year}</p>
                    <p> {item.program}</p>
                    <p> {item.date}</p>
                    <p>{item.title}</p>

                    <p> {item.email}</p>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </>
        ))}
      </Grid>
    </div>
  );
}
