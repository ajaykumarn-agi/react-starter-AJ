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

const options = [
  {value: '1', label: 'Active'},
  {
    value: '0',
    label: 'Deactive',
  },
];

const DefaultTab = props => {
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
      <Grid container spacing={3} sx={{mb: 2, pb: 2}}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Default
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
            name="tenantId"
            // value={values['log.file'].value}
            label="Tenant ID"
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="name"
            // value={values['max.log.file.size'].value}
            label="Tenant Name"
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12} sm={6} sx={{mb: 0}}>
          {/* <Typography>Status</Typography> */}
          <FormControl sx={{minWidth: 160}} size="small">
            <Select
              name="tenantStatus"
              value={select}
              inputProps={{'aria-label': 'Without label'}}
              onChange={changeSelectHandler}
            >
              {options.map (option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="senderName"
            id="outlined-size-small"
            label="Sender Name"
            fullWidth
            // value={values['doc.types'].value}
            autoComplete="given-name"
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName outlined-size-small"
            label="Description"
            name="description"
            fullWidth
            // value={values['doc.size'].value}
            autoComplete="given-name"
            variant="outlined"
            rows={6}
            size="medium"
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
export default DefaultTab;
