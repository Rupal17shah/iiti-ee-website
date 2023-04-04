import React, { useEffect, useState } from "react";
import { Card, CardMedia } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CardActionArea } from "@mui/material";
import axios from "axios";

export default function Common_Cards(props) {
  const navigate = useNavigate();

  const [data, setData] = useState();
  const [isError, setIsError] = useState([]);
  const [image, setImage] = useState();
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
  }, []);
  console.log(data);
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
              <Card sx={{ width: 150 }}>
                {item.image ? (
                  <CardMedia
                    sx={{ height: 150 }}
                    image={require(`D:/projects/EE Website/ee-website-backend/ee/${item.image}`)}
                    // image="D:/projects/EE Website/ee-website-backend/ee/media/nathan-anderson-L95xDkSSuWw-unsplash.jpg"
                    title="Staff"
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
                    {item.roll_no} <br />
                    {item.year} <br />
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
