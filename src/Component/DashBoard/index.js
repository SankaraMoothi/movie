import React, { useState } from "react";
import "./DashStylee.css";
import Button from "@mui/material/Button";
import LikeCounter from "../LikeCounter";
import EditDelete from "../EditDelete";

function DashBoard({ elementee }) {
  const [sam, setSam] = useState(true);
  let handleSummary = () => {
    setSam(!sam);
  };
  return (
    <>
      {elementee.map((els, index) => (
        <div className="col-lg-3 col-md-6 col-sm-6 mb-4 vvv" key={index}>
          <div className="card" style={{ width: "25rem" }}>
            <image
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
                    <i className="fa-solid fa-angle-down"></i>
                  </Button>
                </h4>
                <span style={{ color: els.rating > 8 ? "green" : "red" }}>
                  ⭐ {els.rating}
                </span>
              </span>
              {sam ? <p className="card-text">{els.summary}</p> : <></>}
              <div className="FooterButton">
                <LikeCounter />
                <EditDelete />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default DashBoard;
