import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleComplete } from "../../Features/Todo/TodoSlice";
import { Checkbox, IconButton, ListItemText, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TodoEditPopup from "../TodoEditPopup/TodoEditPopup";
import "./Todo.css";

const Todo = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggleComplete = () => {
    dispatch(toggleComplete(task.id));
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      className="task-item"
      style={{
        backgroundColor: task.completed ? "#90EE90" : "inherit",

        margin: "10px 0",
        borderRadius: "5px",
      }}
    >
      <Box display="flex" alignItems="center" flexGrow={1}>
        <Checkbox checked={task.completed} onChange={handleToggleComplete} />
        <ListItemText
          primary={task.title}
          style={{
            textDecoration: task.completed ? "line-through" : "none",
          }}
        />
      </Box>
      <Box display="flex" alignItems="center">
        <IconButton onClick={() => setIsEditing(true)}>
          <EditIcon color="primary" />
        </IconButton>
        <IconButton
          onClick={handleDelete}
          className="delete-button"
          style={{ color: "red" }}
        >
          <DeleteIcon />
        </IconButton>
        {isEditing && <TodoEditPopup task={task} setIsEditing={setIsEditing} />}
      </Box>
    </Box>
  );
};

export default Todo;
