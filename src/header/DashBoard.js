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
  MenuIcon,
} from "@arisglobal/agcp-ui";
import { Box, Typography, Toolbar } from "@mui/material";

export const DashBoard = () => {
  return (
    <AppBar color="primary" position="static">
      <Toolbar variant="regular">
        <IconButton
          aria-label="menu"
          color="inherit"
          edge="start"
          size="large"
          sx={{
            mr: 1,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            ml: 1,
          }}
        >
          <img src={logo} alt="logo" />
          <img
            src={LifeSphere}
            style={{
              marginLeft: "10px",
            }}
            alt ="lifeSphere Logo"
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
          App Name
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
