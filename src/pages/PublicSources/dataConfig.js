import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const DataConfig = (props) => {
  const handleChange = (event) => {
    props.parentMethod(event);
  };

  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 3, width: "55ch" } }}
      noValidate
      autoComplete="off"
    >
      <CardContent>
        <Typography variant="h5">Source Data Configuration</Typography>
        <div>
          <TextField
            color="primary"
            fullWidth
            label="AERS Data Directory"
            onChange={handleChange}
            name="aers.data.directory"
            value={props.publicDbData["aers.data.directory"].value}
            required
            rows={1}
            size="small"
            type="text"
            variant="outlined"
          />
          <TextField
            color="primary"
            fullWidth
            label="VAERS Data Directory"
            name="vaers.data.directory"
            value={props.publicDbData["vaers.data.directory"].value}
            onChange={handleChange}
            required
            rows={1}
            size="small"
            type="text"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            color="primary"
            fullWidth
            label="Vigibase Data Directory"
            name="vigibase.data.directory"
            value={props.publicDbData["vigibase.data.directory"].value}
            onChange={handleChange}
            required
            rows={1}
            size="small"
            type="text"
            variant="outlined"
          />
        </div>
      </CardContent>
      <CardContent>
        <Typography variant="h5">PMDA Details</Typography>
        <div>
          <TextField
            color="primary"
            fullWidth
            label="PMDA Database Username"
            onChange={handleChange}
            name="pmda.username"
            value={props.publicDbData["pmda.username"].value}
            required
            rows={1}
            size="small"
            type="text"
            variant="outlined"
          />
          <TextField
            color="primary"
            fullWidth
            label="PMDA Database Password"
            onChange={handleChange}
            name="pmda.password"
            value={props.publicDbData["pmda.password"].value}
            required
            rows={1}
            size="small"
            type="password"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            color="primary"
            fullWidth
            label="PMDA Data Directory"
            onChange={handleChange}
            name="pmda.data.directory"
            value={props.publicDbData["pmda.data.directory"].value}
            required
            rows={1}
            size="small"
            type="text"
            variant="outlined"
          />
        </div>
      </CardContent>
    </Box>
  );
};

export default DataConfig;
