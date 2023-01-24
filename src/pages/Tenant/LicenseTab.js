import React, {useState, useEffect, useCallback} from 'react';
import SendIcon from '@mui/icons-material/Send';
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
} from '@arisglobal/agcp-ui';
import '../styles/GeneralStyles.css';
import {FormControl, Box, Grid, Typography} from '@mui/material';
const LicenseTab = props => {
  const [open, setOpen] = useState (false);
  const [select, setSelect] = useState ('0');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen (false);
  };

  const handleInputChange = e => {
    e.preventDefault ();
  };

  const changeSelectHandler = e => {
    e.preventDefault ();
  };
  const onSubmitHandler = async e => {
    e.preventDefault ();
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className="general-container"
      sx={{flexGrow: 1}}
    >

      <Typography variant="h6" gutterBottom sx={{pb: 2}}>
        License Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography>Effective Date</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="outlined-size-small"
            name="cache.global.relativepath"
            fullWidth
            // value={values['cache.global.relativepath'].value}
            autoComplete="given-name"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>Expiry Date</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="outlined-size-small"
            name="cache.maxelement.inmemory"
            fullWidth
            // value={values['cache.maxelement.inmemory'].value}
            autoComplete="given-name"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>Max. Active Users</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="outlined-size-small"
            name="cache.maxelement.indisk"
            fullWidth
            // value={values['cache.maxelement.indisk'].value}
            autoComplete="given-name"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>

      </Grid>

      <Typography variant="h6" gutterBottom sx={{pb: 2}}>
        Data Source Access
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          {/* <TextField
            required
            id="outlined-size-small"
            name="cache.global.relativepath"
            fullWidth
            // value={values['cache.global.relativepath'].value}
            autoComplete="given-name"
            size="small"
            onChange={handleInputChange}
          /> */}
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom sx={{pb: 2}}>
        License
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <Button variant="contained" endIcon={<SendIcon />} component="label">
            File Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>

        </Grid>
      </Grid>

    </Box>
  );
};
export default LicenseTab;
