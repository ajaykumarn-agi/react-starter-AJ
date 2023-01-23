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
import { FormControl, Box, Grid, Typography } from "@mui/material";
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
export const PublicSource = ({ params }) => {
  const [values, setValues] = useState(params);

  const handleInputChange = (e) => {
    e.preventDefault();
  };

  const onSubmitHandler = (e) => {
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
      <Grid container spacing={3} sx={{ mb: 2, pb: 2 }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Public Source
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
            value={params["log.file"].value}
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
    </Box>
  );
};
