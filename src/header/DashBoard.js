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
    <AppBar position="fixed" color="primary" sx={{mb: 4}}>
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
          <img src={logo} />
          <img
          src={LifeSphere}
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
