import React, { useState } from "react";
import { Button,Alert, Snackbar } from "@mui/material";

export const Tenant = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    event.preventDefault()
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      Tenant
    </div>
  );
};
