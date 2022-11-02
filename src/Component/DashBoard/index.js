import React, { useState } from "react";
import "./DashStylee.css";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function DashBoard({ elementee }) {
  const [sam, setSam] = useState(true);
  let handleSummary = () => {
    setSam(!sam);
  };
  return (
    <>
      {elementee.map((els) => (
        <div className="col-lg-3 col-md-6 col-sm-6 mb-4 vvv">
          <div className="card" style={{ width: "25rem" }}>
            <img
              className="card-img-top img"
              src={els.poster}
              style={{ height: "640px", width: "100%" }}
              alt="Card image cap"
            />
            <div className="card-body">
              <span className="card-title">
                <h4>
                  {els.name}
                  <Button onClick={() => handleSummary()}>
                    <i class="fa-solid fa-angle-down"></i>
                  </Button>
                </h4>
                <span style={{ color: els.rating > 8 ? "green" : "red" }}>
                  ⭐ {els.rating}
                </span>
              </span>
              {sam ? <p className="card-text">{els.summary}</p> : <></>}
              <div className="FooterButton">
                <ButtonGroup
                  variant="outlined"
                  aria-label="outlined primary button group"
                >
                  <Button
                    variant="outlined"
                    startIcon={<ThumbUpOutlinedIcon />}
                  ></Button>
                  <Button
                    variant="outlined"
                    startIcon={<ThumbDownOutlinedIcon />}
                  ></Button>
                </ButtonGroup>
                <ButtonGroup
                  variant="outlined"
                  aria-label="outlined primary button group"
                >
                  <Button variant="outlined" startIcon={<EditIcon />}></Button>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                  ></Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default DashBoard;
