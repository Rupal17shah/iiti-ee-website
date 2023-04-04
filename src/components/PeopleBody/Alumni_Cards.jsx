import React, { useEffect, useState } from "react";
import { Card, CardMedia } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CardActionArea } from "@mui/material";
import axios from "axios";

export default function Alumni_Cards(props) {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();
  const [details, setDetails] = useState();
  const [address, setAddress] = useState();
  const [link, setLink] = useState();
  const [rollno, setRollno] = useState();
  const [year, setYear] = useState();
  const [date, setDate] = useState();
  const [isError, setIsError] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/events/read")
      .then((response) => setName(response.data))
      .catch((error) => setIsError(error.message));
    if (!isError) {
      setName("Not Available");
    }
  }, []);

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
                {name}
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
