import React, { useState, useEffect, useCallback } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  Alert,
  Snackbar,
  LoadingButton,
} from "@arisglobal/agcp-ui";
import constants from "../utils/constants";
import { FormControl, Box, Grid, Typography } from "@mui/material";

const options = [
  { value: "ehcache", label: "EH Cache" },
  {
    value: "redis",
    label: "Redis",
  },
];

export const General = ({ generalData, setToggle }) => {
  const [values, setValues] = useState(generalData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [isValid, setIsValid] = useState(true);

  let currentSelect = generalData["cache.type"].value;
  const [select, setSelect] = useState(currentSelect);

  const check = () => {
    return values & generalData;
  };

  useEffect(() => {
    setValues(values);
    check();
  }, [values]);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: { ...values[name], value: value },
    });
    setIsValid(false);
  };

  const changeSelectHandler = (e) => {
    e.preventDefault();
    setSelect(e.target.value);
    setValues({
      ...values,
      ["cache.type"]: { ...values["cache.type"], value: e.target.value },
    });
    setIsValid(false);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`api/${constants.SAVE_PARAMS}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      if (error === null) {
        setOpen(true);
        setIsLoading(false);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleClose = (event, reason) => {
    if (reason == "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Box  className="general-container" sx={{ flexGrow: 1, overflow: "hidden" }}>
      <Grid container spacing={3} sx={{ mb: 2, pb: 2 }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">
            General
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
          <LoadingButton
            loading={isLoading}
            variant="contained"
            sx={{ textTransform: "capitalize", mb: 1 }}
            onClick={(e) => onSubmitHandler(e)}
            disabled={isValid}
          >
            Save
          </LoadingButton>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            name="log.file"
            value={values["log.file"].value || ""}
            label="Log File Path"
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="max.log.file.size"
            value={values["max.log.file.size"].value || ""}
            label="Log File Size"
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="session.expiration.duration"
            label="Expire Session"
            fullWidth
            value={values["session.expiration.duration"].value || ""}
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="web.help.base.url"
            value={values["web.help.base.url"].value || ""}
            label="Web Help Base URL"
            fullWidth
            variant="outlined"
            size="small"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-size-small"
            name="doc.size"
            label="Document Size(MB)"
            fullWidth
            value={values["doc.size"].value || ""}
            autoComplete="given-name"
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="doc.types"
            id="outlined-size-small"
            label="Document Types"
            fullWidth
            value={values["doc.types"].value || ""}
            autoComplete="given-name"
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom sx={{ pb: 2 }}>
        Cache Management
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} sx={{ mb: 0 }}>
          <Typography>Cache Type</Typography>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mb: 0 }}>
          <FormControl sx={{ minWidth: 160 }} size="small">
            <Select
              name="cache.type"
              value={select}
              inputProps={{ "aria-label": "Without label" }}
              onChange={changeSelectHandler}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography>File Path</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-size-small"
            name="cache.global.relativepath"
            fullWidth
            value={values["cache.global.relativepath"].value || ""}
            autoComplete="given-name"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>Max Element in Memory</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-size-small"
            name="cache.maxelement.inmemory"
            fullWidth
            value={values["cache.maxelement.inmemory"].value || ""}
            autoComplete="given-name"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>Max Element on Disk</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-size-small"
            name="cache.maxelement.indisk"
            fullWidth
            value={values["cache.maxelement.indisk"].value || ""}
            autoComplete="given-name"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>Disk Persistence</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-size-small"
            name="cache.disk.persistance"
            value={values["cache.disk.persistance"].value || ""}
            fullWidth
            autoComplete="given-name"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>Overflow to Disk</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-size-small"
            name="cache.overflow.disk"
            fullWidth
            value={values["cache.overflow.disk"].value || ""}
            autoComplete="given-name"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography>Eternal</Typography>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mb: 1 }}>
          <TextField
            id="outlined-size-small"
            name="cache.eternal"
            value={values["cache.eternal"].value || ""}
            fullWidth
            autoComplete="given-name"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      {/* <Container container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <FormControl sx={{ width: "60ch" }} className="form-controller">
            <TextField
              label="Log File path"
              id="outlined-size-small"
              defaultValue="c:/tmp/"
              size="small"
            />
          </FormControl>
        </Grid>
        <Grid xs={6}>
          <FormControl sx={{ width: "60ch" }}>
            <TextField
              label="Log File path"
              id="outlined-size-small"
              defaultValue="c:/tmp/"
              size="small"
            />
          </FormControl>
        </Grid>
      </Container> */}
      {/* <FormControl sx={{ width: "45ch" }}>
        <OutlinedInput placeholder="Please enter text" size="small" />
      </FormControl> */}

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
