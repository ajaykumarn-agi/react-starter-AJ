import React, { useState, useEffect, useCallback } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { TextField, Button } from "@arisglobal/agcp-ui";
import "./styles/GeneralStyles.css";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import constants from "../utils/constants";

const initialValue = {
  "log.file": {
    id: 0,
    name: "",
    type: 0,
    paramId: "",
    value: "",
    groupType: 0,
  },
  "cms.username": { value: "" },
  "cache.maxelement.inmemory": { value: "" },
  "cms.password": { value: "" },
  "cms.remote.workspace": { value: "" },
  "doc.size": { value: "" },
  "cache.global.relativepath": { value: "" },
  "cache.eternal": { value: "" },
  "cache.type": { value: "" },
  "cache.disk.persistance": { value: "" },
  "cache.overflow.disk": { value: "" },
  "cache.maxelement.indisk": { value: "" },
};

export const CMS = ({ cmsParams }) => {
  const [error, setError] = useState(null);
  const [values, setValues] = useState(cmsParams);

  const [loading, setLoading] = useState(true);
  const [template, setTemplate] = useState({});

  const fetchCmsParams = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(`${constants.API_URL}/rest/getTemplate`, {
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Something went Wrong");
      }
      const getTemplate = await response.json();
      setTemplate(getTemplate);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCmsParams();
  }, [fetchCmsParams]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setError(null)
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: { ...values[name], value: value },
    });
  };

  const saveCmsParams = () => {
    try {
      const response = fetch(`${constants.API_URL}/rest/saveParameters`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      if (error === null) {
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const saveTemplate = () => {
    setError(null);
    try {
      const response = fetch(`${constants.API_URL}/rest/saveTemplate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      if (error === null) {
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    saveCmsParams();
    // saveTemplate();
  };

  const handleTemplateChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setTemplate({
      ...template,
      [name]: { ...template[name], value: value },
    });
  };

  if (loading) {
    return <p> Loading ....</p>;
  }
  if (error) {
    return <p> {error.message}</p>;
  } else {
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
              name="cms.remote.repository"
              value={values["cms.remote.repository"]?.value}
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
              name="cms.username"
              value={values["cms.username"]?.value}
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
              name="cms.password"
              label="Password"
              fullWidth
              value={values["cms.password"]?.value}
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
              name="cms.remote.workspace"
              id="outlined-size-small"
              label="Default Workspace Name"
              fullWidth
              value={values["cms.remote.workspace"]?.value}
              variant="outlined"
              size="small"
              onChange={handleInputChange}
            />
          </Grid>

          {/* To Do */}
          <Grid item xs={12}>
          <h5>Configuration</h5>
            <TextareaAutosize
              maxRows={15}
              aria-label="maximum height"
              name="2"
              value={template["2"].template}
              onChange={handleTemplateChange}
              style={{ width: 800 }}
            />
          </Grid>
        </Grid>
      </Box>
    );
  }
};
