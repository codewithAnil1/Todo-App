// App.js

import React from "react";
import { Provider, useSelector } from "react-redux";
import {
  Container,
  Typography,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import NavBar from "./Componets/Navbar/Navbar";
import TodoInput from "./Componets/TodoInput/TodoInput";
import TodoList from "./Componets/ListSection/ListSection";
import "./App.css";

const App = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="sm" style={{ marginTop: "20px" }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          TODO LIST
        </Typography>
        <TodoInput />
        <TodoList />
      </Container>
    </ThemeProvider>
  );
};

export default App;
