import { Button, Card, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function LoginForm() {
  const navigate = useNavigate();
  return (
    <>
      <Card
        className="card"
        sx={{
          maxWidth: 500,
          padding: 2,
        }}
      >
        <Typography variant="h1" mb={4} textAlign="center">
          Login
        </Typography>
        <TextField
          sx={{ m: "auto", mb: 4 }}
          label="User_Name"
          fullWidth
          variant="outlined"
        />

        <TextField
          sx={{ m: "auto", mt: 2, mb: 4 }}
          label="PassWord"
          fullWidth
          variant="outlined"
        />
        <Button
          sx={{ mt: 4 }}
          variant="contained"
          fullWidth
          onClick={() => navigate("/Portal")}
        >
          Submit
        </Button>
      </Card>
    </>
  );
}

export default LoginForm;
