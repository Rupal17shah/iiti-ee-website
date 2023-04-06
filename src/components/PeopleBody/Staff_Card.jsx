import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Staff_card.css";
import axios from "axios";
import { Grid } from "@mui/material";

export default function Staff_Cards() {
  const [data, setData] = useState();
  const [isError, setIsError] = useState();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/people/Faculty/read`)
      .then((response) => setData(response.data))
      .catch((error) => setIsError(error.message));
    if (isError) {
      setData("Not Available");
    }
  }, []);
  console.log(data);
  return (
    <>
      <Grid
        container
        justifyContent="Left"
        direction="row"
        alignItems="center"
        spacing={2}
      >
        {data?.map((item, i) => (
          <>
            <Grid item>
              <a href={item.link}>
                <div className="rounded-2xl border-2 flex flex-col lg:flex-row lg:justify-around justify-start items-center lg:items-start py-8">
                  <div>
                    <img
                      className="w-48 h-48 lg:ml-8 object-cover"
                      src="D:\projects\EE Website\ee-website-backend\ee\media\DOSA.JPG"
                    ></img>
                  </div>
                  <div className="flex flex-col px-4 lg:px-0 lg:mx-4">
                    <h5 className="text-2xl font-bold text-[#9D0455] capitalize text-center lg:text-left">
                      <a href={`mailto:${item.email}`}>{item.name}</a>
                    </h5>
                    <h5 className="text-md mt-2 capitalize text-center lg:text-left">
                      {item.title}
                    </h5>
                    <h5 className="text-lg font-bold mt-6 text-center lg:text-left">
                      Research Interest
                    </h5>
                    <h5 className="text-xl lg:ml-4 text-sm text-center lg:text-left">
                      {item.details}
                    </h5>
                  </div>
                  <div className="flex flex-col text-sm mt-3 lg:mt-0 lg:mr-4">
                    <h5 className="text-gray-400">Address: {item.address}</h5>
                  </div>
                </div>
              </a>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
}
