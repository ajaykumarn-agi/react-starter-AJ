import React, {useState, useEffect, useCallback} from 'react';
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

const DBDetailsTab = props => {
  const [open, setOpen] = useState (false);
  const [select, setSelect] = useState ('0');

  const handleClose = (event, reason) => {
    if (reason == 'clickaway') {
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
      <Grid container spacing={3} sx={{mb: 2, pb: 2}}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            LSSRM DB
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        />

        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="msHost"
            // value={values['Host'].value}
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
            name="msPort"
            // value={values['max.Host.size'].value}
            label="Port"
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="msUserName"
            id="outlined-size-small"
            label="User Name"
            fullWidth
            // value={values['UserName'].value}
            autoComplete="given-name"
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="msPassword"
            id="outlined-size-small"
            label="Password"
            type="password"
            fullWidth
            // value={values['UserName'].value}
            autoComplete="given-name"
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName outlined-size-small"
            name="msSchemaName"
            label="Schema Name"
            fullWidth
            // value={values['SchemaName'].value}
            autoComplete="given-name"
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{mb: 2, pb: 2}}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Company Safety DB
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        />

        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="csHost"
            // value={values['Host'].value}
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
            name="csPort"
            // value={values['max.Host.size'].value}
            label="Port"
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="csUserName"
            id="outlined-size-small"
            label="User Name"
            fullWidth
            // value={values['UserName'].value}
            autoComplete="given-name"
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="csPassword"
            id="outlined-size-small"
            label="Password"
            fullWidth
            // value={values['UserName'].value}
            autoComplete="given-name"
            variant="outlined"
            size="small"
            type="password"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName outlined-size-small"
            name="csSchemaName"
            label="Schema Name"
            fullWidth
            // value={values['SchemaName'].value}
            autoComplete="given-name"
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{mb: 2, pb: 2}}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            ML DB
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        />

        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="mlHost"
            // value={values['Host'].value}
            label="HOST"
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="mlPort"
            // value={values['max.Host.size'].value}
            label="Port"
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="mlUserName"
            id="outlined-size-small"
            label="User Name"
            fullWidth
            // value={values['UserName'].value}
            autoComplete="given-name"
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="mlPassword"
            id="outlined-size-small"
            label="Password"
            fullWidth
            // value={values['UserName'].value}
            autoComplete="given-name"
            variant="outlined"
            size="small"
            type="password"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName outlined-size-small"
            name="mlSchemaName"
            label="Schema Name"
            fullWidth
            // value={values['SchemaName'].value}
            autoComplete="given-name"
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{mb: 2, pb: 2}}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Study DB
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        />

        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="Host"
            // value={values['Host'].value}
            label="studyHost"
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="studyPort"
            // value={values['max.Host.size'].value}
            label="port"
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="studyUserName"
            id="outlined-size-small"
            label="User Name"
            fullWidth
            // value={values['UserName'].value}
            autoComplete="given-name"
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="studyPassword"
            id="outlined-size-small"
            label="Password"
            type="password"
            fullWidth
            // value={values['UserName'].value}
            autoComplete="given-name"
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName outlined-size-small"
            name="studySchemaName"
            label="Schema Name"
            fullWidth
            // value={values['SchemaName'].value}
            autoComplete="given-name"
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>

      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={2000}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
        severity="success"
      >
        <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
          Updated Successfully
        </Alert>
      </Snackbar>
    </Box>
  );
};
export default DBDetailsTab;
