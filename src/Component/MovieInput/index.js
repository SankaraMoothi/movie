import { Card, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

function MovieInput() {
  const navigate = useNavigate();
  const formikValidation = yup.object({
    name: yup.string().required("Movie Name Must Filled"),
    rating: yup.string().min(1, "Rating Must Be Minimum Greater then 0"),
    poster: yup.string().required("Poster Must be Given"),
    summary: yup
      .string()
      .min(7, "Summary Must be Greater the 7")
      .required("pleace fill the Summary"),
    trailer: yup.string().required("please Give the trailer"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      rating: "",
      poster: "",
      summary: "",
      trailer: "",
    },
    validationSchema: formikValidation,
    onSubmit: async (values) => {
      let movie = await axios.post(
        "https://631d700ecc652771a4859a9c.mockapi.io/movies",
        values
      );
      navigate("/Portal");
    },
  });
  return (
    <>
      <Card sx={{ maxWidth: 600, padding: 2, margin: "2% auto" }}>
        <Typography variant="h5" textAlign={"center"} marginBottom={4}>
          Movie_Input
        </Typography>
        <form>
          <TextField
            id="standard-basic"
            label="Movie_Name"
            name="name"
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            sx={{ marginBottom: "30px" }}
            fullWidth
            error={formik.touched.name && formik.errors.name}
            helperText={
              formik.touched.name && formik.errors.name
                ? formik.errors.name
                : null
            }
          />
          <TextField
            id="standard-basic"
            label="Rating"
            name="rating"
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.rating}
            onBlur={formik.handleBlur}
            sx={{ marginBottom: "30px" }}
            fullWidth
            error={formik.touched.rating && formik.errors.rating}
            helperText={
              formik.touched.rating && formik.errors.rating
                ? formik.errors.rating
                : null
            }
          />
          <TextField
            id="standard-basic"
            label="Poster"
            name="poster"
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.poster}
            onBlur={formik.handleBlur}
            sx={{ marginBottom: "30px" }}
            fullWidth
            error={formik.touched.poster && formik.errors.poster}
            helperText={
              formik.touched.poster && formik.errors.poster
                ? formik.errors.poster
                : null
            }
          />
          <TextField
            id="standard-basic"
            label="Summary"
            name="summary"
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.summary}
            onBlur={formik.handleBlur}
            sx={{ marginBottom: "30px" }}
            fullWidth
            error={formik.touched.summary && formik.errors.summary}
            helperText={
              formik.touched.summary && formik.errors.summary
                ? formik.errors.summary
                : null
            }
          />
          <TextField
            id="standard-basic"
            label="Trailer"
            name="trailer"
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.trailer}
            onBlur={formik.handleBlur}
            sx={{ marginBottom: "30px" }}
            fullWidth
            error={formik.touched.trailer && formik.errors.trailer}
            helperText={
              formik.touched.trailer && formik.errors.trailer
                ? formik.errors.trailer
                : null
            }
          />

          <Button
            variant="contained"
            sx={{ marginBottom: "20px" }}
            disabled={!formik.isValid}
            onClick={formik.handleSubmit}
            fullWidth
          >
            Submit
          </Button>
          <Button variant="contained" fullWidth>
            Back
          </Button>
        </form>
      </Card>
    </>
  );
}

export default MovieInput;
