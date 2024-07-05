import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../../Features/Todo/TodoSlice";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";

const TodoEditPopup = ({ task, setIsEditing }) => {
  const [newTitle, setNewTitle] = useState(task.title);
  const dispatch = useDispatch();

  const handleSave = () => {
    if (newTitle.trim() !== "") {
      dispatch(editTask({ id: task.id, title: newTitle }));
      setIsEditing(false);
    }
  };

  return (
    <Dialog open onClose={() => setIsEditing(false)}>
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <TextField
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          fullWidth
          margin="dense"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsEditing(false)} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TodoEditPopup;
