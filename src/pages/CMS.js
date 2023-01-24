import React, { useState, useEffect, useCallback } from "react";
import {
  Grid,
  Typography,
  Box
} from "@mui/material";
import {
  TextField,
  Button
} from "@arisglobal/agcp-ui";
import "./styles/GeneralStyles.css";

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

export const CMS = () => {
  const [error, setError] = useState(null);

  const [values, setValues] = useState(initialValue);

  // fetch Data
  const fetchGeneralData = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(
        "http://localhost:8080/agBalance-ConfigTool/servlet/rest/general"
      );
      if (!response.ok) {
        throw new Error("Something went Wrong");
      }
      const generalData = await response.json();
      setValues(generalData);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchGeneralData();
  }, [fetchGeneralData]);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: { ...values[name], value: value },
    });
  };


  const changeSelectHandler = (e) =>{
    e.preventDefault();
    
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    try {
      const response = fetch(
        "http://localhost:8080/agBalance-ConfigTool/servlet/rest/saveParameters",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      if (error === null) {
        
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
      <Grid container spacing={3} sx={{ mb: 2, pb: 2 }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            CMS
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
            name="log.file"
            value={values["log.file"].value}
            label="Repositary URL"
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
            label="User Name"
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
            label="Password"
            fullWidth
            value={values["session.expiration.duration"].value}
            autoComplete="given-name"
            variant="outlined"
            size="small"
            type="password"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="doc.types"
            id="outlined-size-small"
            label="Default Workspace Name"
            fullWidth
            value={values["doc.types"].value}
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName outlined-size-small"
            name="doc.size"
            label="Configuration"
            fullWidth
            value={values["doc.size"].value}
            autoComplete="given-name"
            variant="outlined"
            size="small"
            onChange={handleInputChange}
            multiline="true"
          />
        </Grid>
      </Grid>

    </Box>
  );
};
