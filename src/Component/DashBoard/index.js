import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardCreate from "../CardCreate";

function DashBoard() {
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    loadData();
  }, []);
  let loadData = async () => {
    let movies = await axios.get(
      "https://631d700ecc652771a4859a9c.mockapi.io/movies"
    );
    setmovie(movies.data);
  };
  let deleteMovie = async (id) => {
    let movies = await axios.delete(
      `https://631d700ecc652771a4859a9c.mockapi.io/movies/${id}`
    );
    loadData();
  };
  return (
    <>
      <Container minwidth="sm">
        <Box sx={{ flexGrow: 1, margin: 2 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 12, md: 12 }}
          >
            {movie.map((data) => {
              return (
                <Grid
                  style={{ margin: "0 auto" }}
                  key={data.id}
                  item
                  xs={6}
                  sm={6}
                  md={4}
                >
                  <CardCreate
                    deleteMovie={deleteMovie}
                    data={data}
                    id={data.id}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default DashBoard;
