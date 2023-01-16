import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../gobalAPI/API";
import CardCreate from "../CardCreate";

function DashBoard() {
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    loadData();
  }, []);
  let loadData = async () => {
    let movies = await axios.get(`${API}/movie`);
    console.log(movies.data);
    setmovie(movies.data);
  };
  let deleteMovie = async (id) => {
    let movies = await axios.delete(`${API}/movie/${id}`);
    loadData();
  };
  return (
    <>
      <Container minwidth="sm">
        <Box sx={{ flexGrow: 1, marginTop: 3 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 12, md: 12 }}
          >
            {movie.map((data) => {
              return (
                <Grid
                  style={{ margin: "0 auto" }}
                  key={data._id}
                  item
                  xs={6}
                  sm={6}
                  md={4}
                >
                  <CardCreate
                    deleteMovie={deleteMovie}
                    data={data}
                    id={data._id}
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
