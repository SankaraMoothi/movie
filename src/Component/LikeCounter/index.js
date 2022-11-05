import React, { useState } from "react";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";

function LikeCounter() {
  const [countlike, setlikeCount] = useState(0);
  const [countDisLike, setcountDisLike] = useState(0);
  return (
    <>
      <ButtonGroup
        variant="outlined"
        aria-label="outlined primary button group"
      >
        <Button
          variant="outlined"
          onClick={() => setlikeCount(countlike + 1)}
          startIcon={<ThumbUpOutlinedIcon />}
        >
          <sup style={{ fontSize: "14px" }}>{countlike}</sup>
        </Button>
        <Button
          variant="outlined"
          onClick={() => setcountDisLike(countDisLike + 1)}
          startIcon={<ThumbDownOutlinedIcon />}
        >
          <sup style={{ fontSize: "14px" }}>{countDisLike}</sup>
        </Button>
      </ButtonGroup>
    </>
  );
}

export default LikeCounter;
