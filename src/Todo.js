import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import "./Todo.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function Todo(props) {
  const [done, setDone] = useState(false);
  // const [value, setValue] = useState("");

  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCallback = () => {
    props.parentCallback(props.item, false);
    setOpen(false);
  };

  const handleCallbackEdit = () => {
    props.parentCallback(props.item, true);
  };

  return (
    <div className="todo" onClick={handleCallbackEdit}>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 300 }}>
          <h2 id="child-modal-title">Are you sure Delete {props.item}?</h2>

          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleCallback}>Delete</Button>
        </Box>
      </Modal>
      <p
        onClick={() => setDone(!done)}
        className={done ? "content-todo todo-done" : "content-todo"}
      >
        {props.item}
      </p>
      <button className="btn-delete" onClick={() => setOpen(true)}>
        <CloseIcon />
      </button>
    </div>
  );
}

export default Todo;
