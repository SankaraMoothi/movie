import React from "react";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function EditDelete() {
  return (
    <>
      <ButtonGroup
        variant="outlined"
        aria-label="outlined primary button group"
      >
        <Button variant="outlined" startIcon={<EditIcon />}></Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}></Button>
      </ButtonGroup>
    </>
  );
}

export default EditDelete;
