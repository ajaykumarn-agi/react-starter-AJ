import React, { useState, useEffect, useCallback } from "react";
import { Grid, Typography, Box } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import MongoConfig from "./PublicSources/mongoConfig";
import DataConfig from "./PublicSources/dataConfig";
import {
  Button,
  ButtonGroup,
  Snackbar,
  MenuIconsComponent,
  Alert,
  Tabs,
  Tab,
} from "@arisglobal/agcp-ui";
import constants from "../utils/constants";

const PublicSource = ({ props }) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(props);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    if (e.target.type === "checkbox") {
      e.target.value = e.target.checked;
      const { name, checked } = e.target;
      setValues({
        ...values,
        [name]: { ...values[name], value: checked },
      });
    } else {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: { ...values[name], value: value },
      });
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${constants.API_URL}/rest/saveParameters`, {
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

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className="general-container"
      sx={{ flexGrow: 1 }}
    >
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" gutterBottom>
          Public Source
        </Typography>
      </Grid>
      <div id="button">
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          sx={{}}
        >
          <Button onClick={onSubmitHandler}>Save</Button>

          <Button variant="outlined">Close</Button>
        </ButtonGroup>
      </div>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="public source tab">
            <Tab label="Mongo Config" value="1" />
            <Tab label="Data Config" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <MongoConfig publicDbData={values} parentMethod={handleInputChange} />
        </TabPanel>
        <TabPanel value="2">
          <DataConfig publicDbData={values} parentMethod={handleInputChange} />
        </TabPanel>
      </TabContext>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={2000}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        severity="success"
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Updated Successfully
        </Alert>
      </Snackbar>
    </Box>
  );
};
export default PublicSource;
