import { Card, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieView() {
  const param = useParams();
  const [Movie, setMovie] = useState([]);
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const movies = await axios.get(
      `https://631d700ecc652771a4859a9c.mockapi.io/movies/${param.id}`
    );
    setMovie(movies.data);
  };
  return (
    <>
      <Card sx={{ maxWidth: 700, padding: 2, margin: "3% auto" }}>
        <Typography textAlign={"center"} variant="h5">
          {Movie.name}
        </Typography>
        <iframe
          width="100%"
          height="500px"
          src={Movie.trailer}
          title={Movie.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </Card>
    </>
  );
}

export default MovieView;
