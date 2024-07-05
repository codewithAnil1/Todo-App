import React from "react";
import { useSelector } from "react-redux";
import { List, ListItem, Paper } from "@mui/material";
import Todo from "../Todo/Todo";
import "./TodoList.css";

const TodoList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <Paper elevation={3} className="todo-list-container">
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id} className="todo-list-item">
            <Todo task={task} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
