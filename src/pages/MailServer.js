import React, { useState, useEffect, useCallback } from "react";
import {
  TextField,
  Button,
  Alert,
  Checkbox,
  Snackbar,
} from "@arisglobal/agcp-ui";

import constants from "../utils/constants";

import {
  Box,
  Grid,
  Typography,
  FormControlLabel,
  FormGroup,
} from "@mui/material";

const MailServer = ({ mailParams }) => {
  const initialValue = {
    "notify.user.id": { value: "" },
    "notify.from.pwd": { value: "" },
    "notify.from.id": { value: "" },
    "mail.smtp.socketFactory.port": { value: "" },
    "sender.host": { value: "" },
    "sender.port": { value: "" },
    "mail.smtp.auth": { value: "" },
    "mail.smtp.starttls.enable": { value: "" },
  };

  const [error, setError] = useState(null);
  const [values, setValues] = useState(mailParams);
  const [open, setOpen] = useState(false);

  // const fetchGeneralData = useCallback(async () => {
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       "http://localhost:8080/agBalance-ConfigTool/servlet/rest/tabdetails"
  //     );
  //     if (!response.ok) {
  //       throw new Error("Something went Wrong");
  //     }
  //     const generalData = await response.json();
  //     setValues(generalData);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // }, []?);

  // useEffect(() => {
  //   fetchGeneralData();
  // }, [fetchGeneralData]?);

  const handleInputChange = (e) => {
    e.preventDefault();
    if (e.target.type === "checkbox") {
      e.target.value = e.target.checked;
      const { name, checked } = e.target;
      setValues({ ...values, [name]: { ...values[name], value: checked } });
    } else {
      const { name, value } = e.target;
      setValues({ ...values, [name]: { ...values[name], value: value } });
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${constants.API_URL}/saveParameters`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      if (error === null) {
        setOpen(true);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className="general-container"
      sx={{ flexGrow: 1 }}
    >
      <Grid container spacing={3} sx={{ mb: 2, pb: 2 }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Mail Server
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Button
            variant="contained"
            sx={{ textTransform: "capitalize", mb: 1 }}
            onClick={(e) => onSubmitHandler(e)}
          >
            Save
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="notify.user.id"
            value={values["notify.user.id"]?.value}
            label="User Id"
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            type="Password"
            name="notify.from.pwd"
            value={values["notify.from.pwd"]?.value}
            label="Password"
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="notify.from.id"
            value={values["notify.from.id"]?.value}
            label="Email Address"
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="mail.smtp.socketFactory.port"
            value={values["mail.smtp.socketFactory.port"]?.value}
            label="Socket Factory Port"
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="sender.host"
            value={values["sender.host"]?.value}
            label="Host"
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="sender.port"
            value={values["sender.port"]?.value}
            label="Port"
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>


        {/* TO do  */}
        <Grid item xs={12} sm={6}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={values["mail.smtp.auth"]?.value === "true"}
                  name="mail.smtp.auth"
                  onClick={handleInputChange}
                  size="medium"
                  value={values["mail.smtp.auth"]?.value}
                />
              }
              label="Authentication Required"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={values["mail.smtp.starttls.enable"]?.value === "true"}
                  name="mail.smtp.starttls.enable"
                  onClick={handleInputChange}
                  size="medium"
                  value={values["mail.smtp.starttls.enable"]?.value}
                />
              }
              label="Use TLS"
            />
          </FormGroup>
        </Grid>
      </Grid>

      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={2000}
        anchorOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
        severity="success"
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Updated Successfully
        </Alert>
      </Snackbar>
    </Box>
  );
};
export default MailServer;
