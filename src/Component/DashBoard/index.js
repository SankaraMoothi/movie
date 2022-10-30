import React from "react";
import "./DashStylee.css";

function DashBoard({ elementee }) {
  return (
    <>
      {elementee.map((els) => (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4 vvv">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top img"
              src={els.poster}
              style={{ height: "640px", width: "100%" }}
              alt="Card image cap"
            />
            <div className="card-body">
              <span className="card-title">
                <h4>{els.name}</h4>
              </span>
              <span>Rating: ⭐ {els.rating}</span>
              <p className="card-text">{els.summary}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default DashBoard;
