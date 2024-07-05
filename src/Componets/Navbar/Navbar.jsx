// Components/NavBar/NavBar.js

import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../Features/Theme/themeSlice";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const NavBar = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          React To-Do App
        </Typography>
        <IconButton onClick={handleToggleTheme} color="inherit">
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
