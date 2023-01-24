import React, { useState, useEffect, useCallback } from "react";
import SendIcon from "@mui/icons-material/Send";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  Alert,
  Container,
  Paper,
  FormControlLabel,
  Checkbox,
  Snackbar,
} from "@arisglobal/agcp-ui";
import "../styles/GeneralStyles.css";
import { FormControl, Box, Grid, Typography } from "@mui/material";
const IdpTab = (props) => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState("0");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
  };

  const changeSelectHandler = (e) => {
    e.preventDefault();
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className="general-container"
      sx={{ flexGrow: 1 }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography>SSO URL</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="cache.global.relativepath"
            fullWidth
            // value={values['cache.global.relativepath'].value}
            autoComplete="given-name"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>Idp Entity Id</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="cache.maxelement.inmemory"
            fullWidth
            // value={values['cache.maxelement.inmemory'].value}
            autoComplete="given-name"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <Button variant="contained" endIcon={<SendIcon />} component="label">
            IdP File <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
export default IdpTab;
