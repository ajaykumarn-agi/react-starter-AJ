import * as React from "react";
import { Box, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const DataConfig = (props) => {
  const handleChange = (event) => {
    props.parentMethod(event);
  };

  return (
    <Box component="form" noValidate autoComplete="off" sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} sx={{ mb: 2, pb: 2 }}>
        <Grid item xs={12}>
          <Typography variant="h6">Source Data Configuration</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            color="primary"
            fullWidth
            label="AERS Data Directory"
            onChange={handleChange}
            name="aers.data.directory"
            value={props.publicDbData["aers.data.directory"]?.value}
            required
            size="small"
            type="text"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            color="primary"
            fullWidth
            label="VAERS Data Directory"
            name="vaers.data.directory"
            value={props.publicDbData["vaers.data.directory"]?.value}
            onChange={handleChange}
            required
            size="small"
            type="text"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            color="primary"
            fullWidth
            label="Vigibase Data Directory"
            name="vigibase.data.directory"
            value={props.publicDbData["vigibase.data.directory"]?.value}
            onChange={handleChange}
            required
            size="small"
            type="text"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ mb: 2, pb: 2 }}>
        <Grid item xs={12}>
          <Typography variant="h6">PMDA Details</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            color="primary"
            fullWidth
            label="PMDA Database Username"
            onChange={handleChange}
            name="pmda.username"
            value={props.publicDbData["pmda.username"]?.value}
            required
            size="small"
            type="text"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            color="primary"
            fullWidth
            label="PMDA Database Password"
            onChange={handleChange}
            name="pmda.password"
            value={props.publicDbData["pmda.password"]?.value}
            required
            size="small"
            type="password"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            color="primary"
            fullWidth
            label="PMDA Data Directory"
            onChange={handleChange}
            name="pmda.data.directory"
            value={props.publicDbData["pmda.data.directory"]?.value}
            required
            size="small"
            type="text"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DataConfig;
