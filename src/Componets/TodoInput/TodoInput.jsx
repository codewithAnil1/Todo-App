import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Box, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { addTask } from "../../Features/Todo/TodoSlice";

const TodoInput = () => {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() === "") {
      setError("Task cannot be empty.");
    } else if (task.length > 35) {
      setError("The task is too big to add into the to-do list.");
    } else {
      dispatch(addTask({ id: uuidv4(), title: task, completed: false }));
      setTask("");
      setError("");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      className="todo-input"
    >
      <TextField
        label="Add a new task"
        variant="outlined"
        fullWidth
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleAddTask()}
        margin="normal"
        error={!!error}
        helperText={error}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddTask}
        style={{ marginTop: "10px", width: "100%" }}
      >
        Add Task
      </Button>
      {error && (
        <Typography color="error" style={{ marginTop: "10px" }}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default TodoInput;
