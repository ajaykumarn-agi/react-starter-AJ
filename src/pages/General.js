import React, { useState, useEffect, useCallback } from "react";
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
import "./styles/GeneralStyles.css";

import { FormControl, Box, Grid,  Typography} from "@mui/material";
const initialValue = {
  "log.file": {
    id: 0,
    name: "",
    type: 0,
    paramId: "",
    value: "",
    groupType: 0,
  },
  "max.log.file.size": { value: "" },
  "cache.maxelement.inmemory": { value: "" },
  "session.expiration.duration": { value: "" },
  "doc.types": { value: "" },
  "doc.size": { value: "" },
  "cache.global.relativepath": { value: "" },
  "cache.eternal": { value: "" },
  "cache.type": { value: "" },
  "cache.disk.persistance": { value: "" },
  "cache.overflow.disk": { value: "" },
  "cache.maxelement.indisk": { value: "" },
};

const options = [
  { value: "ehcache", label: "EH Cache" },
  {
    value: "redis",
    label: "Redis",
  },
];

export const General = ({ generalData }) => {
  const [values, setValues] = useState(initialValue);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState("ehcache");

  const [isValid, setIsValid] = useState(true);
  const check = () =>{
    return values & generalData
  }
  useEffect(() => {
    setValues(generalData);
    check()
  }, [generalData], check);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: { ...values[name], value: value },
    });

    setIsValid(false)
  };

  const changeSelectHandler = (e) => {
    e.preventDefault();
    setSelect(e.target.value);

    setValues({
      ...values,
      ["cache.type"]: { ...values["cache.type"], value: e.target.value },
    });
  };

  // Save
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(values);
    console.log(generalData);
    if (values === generalData) {
      console.log("Equal");
    } else {
      console.log("Not equal");
    }
    // try {
    //   const response = await fetch(
    //     "http://localhost:8080/agBalance-ConfigTool/servlet/rest/saveParameters",
    //     {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(values),
    //     }
    //   );
    //   if (!response.ok) {
    //     throw new Error(response.statusText);
    //   }
    //   if (error === null) {
    //     setOpen(true);
    //   }
    // } catch (err) {
    //   setError(err.message);
    // }
  };

  const handleClose = (event, reason) => {
    if (reason == "clickaway") {
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
          <Button
            variant="contained"
            sx={{ textTransform: "capitalize", mb: 1 }}
            onClick={(e) => onSubmitHandler(e)}
            disabled={isValid}
          >
            Save
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="log.file"
            value={values["log.file"].value}
            label="Log File Path"
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="max.log.file.size"
            value={values["max.log.file.size"].value}
            label="Log File Size"
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="session.expiration.duration"
            label="Expire Session"
            fullWidth
            value={values["session.expiration.duration"].value}
            autoComplete="given-name"
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="doc.types"
            id="outlined-size-small"
            label="Document Types"
            fullWidth
            value={values["doc.types"].value}
            autoComplete="given-name"
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName outlined-size-small"
            name="doc.size"
            label="Document Size(MB)"
            fullWidth
            value={values["doc.size"].value}
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
            required
            id="outlined-size-small"
            name="cache.global.relativepath"
            fullWidth
            value={values["cache.global.relativepath"].value}
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
            required
            id="outlined-size-small"
            name="cache.maxelement.inmemory"
            fullWidth
            value={values["cache.maxelement.inmemory"].value}
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
            required
            id="outlined-size-small"
            name="cache.maxelement.indisk"
            fullWidth
            value={values["cache.maxelement.indisk"].value}
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
            required
            id="outlined-size-small"
            name="cache.disk.persistance"
            value={values["cache.disk.persistance"].value}
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
            required
            id="outlined-size-small"
            name="cache.overflow.disk"
            fullWidth
            value={values["cache.overflow.disk"].value}
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
            required
            id="outlined-size-small"
            name="cache.eternal"
            value={values["cache.eternal"].value}
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
