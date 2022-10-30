import React, { useState } from "react";
import "./InputMove.css";

function MoveInput(props) {
  const [name, setname] = useState("");
  const [summary, setsummary] = useState("");
  const [rating, setrating] = useState(0);
  const [poster, setposter] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddMovie({ name, summary, rating, poster });
  };

  return (
    <div className="container InputMove">
      <h1>Add Move Detail</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="Movie_Name">Move Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="Movie_Name"
            minLength={4}
            placeholder="Enter Movie Name"
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="Movie_Detail">Move Detail</label>
          <textarea
            className="form-control"
            minLength={10}
            onChange={(e) => {
              setsummary(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="Movie_Rating">Move Rating</label>
          <input
            type="number"
            className="form-control"
            id="Movie_Rating"
            placeholder="Enter Movie Rating"
            onChange={(e) => {
              setrating(e.target.value);
            }}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="Movie_Poster">Move poster</label>
          <input
            type="text"
            className="form-control"
            id="Movie_Poster"
            minLength={5}
            placeholder="Enter Movie_Poster Url"
            onChange={(e) => {
              setposter(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="reset" className="btn btn-danger ms-4">
          Reset
        </button>
      </form>
    </div>
  );
}

export default MoveInput;
