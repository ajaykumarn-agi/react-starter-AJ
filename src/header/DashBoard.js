import React from "react";
import logo from "../assets/images/Vector.svg";
import LifeSphere from "../assets/images/LifeSphere.svg";
import {
  AppBar,
  Menu,
  MenuItem,
  Button,
  Tooltip,
  IconButton,
  Avatar,
} from "@arisglobal/agcp-ui";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Typography, Toolbar } from "@mui/material";

export const DashBoard = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar variant="regular">
        <IconButton
          aria-label="menu"
          color="inherit"
          edge="start"
          size="large"
          sx={{
            mr: 1,
          }}
        ></IconButton>
        <Box
          sx={{
            ml: 1,
          }}
        >
          <img src="static/media/Vector.542557f441d498a1f63ff0619777c5f6.svg" />
          <img
            src="static/media/LifeSphere.5c8631d1a582633084ed2371a7f174a3.svg"
            style={{
              marginLeft: "10px",
            }}
          />
        </Box>
        <Typography
          component="div"
          sx={{
            flexGrow: 1,
            ml: 2,
          }}
          variant="h6"
        >
          Signal & Risk Management
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
