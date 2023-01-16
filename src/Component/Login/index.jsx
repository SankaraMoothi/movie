import { Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../gobalAPI/API";
import axios from "axios";
import { useState } from "react";
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const data = {
    name: userName,
    pass: password,
  };
  const onSubmit = async () => {
    // const users = await axios.post(`${API}/user/login`, data);
    // console.log(data);
    // console.log(users);
    // if (users) {
    navigate("/Portal");
    // } else {
    //   navigate("/signUp");
    // }
  };

  return (
    <>
      <div className="container">
        <div className="img">
          <img
            src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
            alt="avatar"
          />
        </div>
        <div className="body">
          <div className="username ">
            <PersonIcon className="svg" />
            <TextField
              id="outlined-basic"
              label="username"
              value={userName}
              variant="outlined"
              onChange={(e) => setUserName(e.target.value)}
              className="input"
            />
          </div>
          <div className="password">
            <LockIcon className="svg" />
            <TextField
              id="outlined-basic"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              type="password"
              className="input"
            />
          </div>
          <Button className="button" onClick={onSubmit} variant="contained">
            Login
          </Button>
          <p>
            If U Don't Have An Account? <Link to={"/SingUp"}>Sing Up</Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
