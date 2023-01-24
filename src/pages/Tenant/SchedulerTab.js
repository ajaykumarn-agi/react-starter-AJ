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

const SchedulerTab = props => {
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
      <Typography variant="h6" gutterBottom sx={{pb: 5}}>
        Configuration
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="outlined-multiline-flexible"
            name="cache.global.relativepath"
            maxRows={10}
            fullWidth
            // value={values['cache.global.relativepath'].value}
            autoComplete="given-name"
            size="large"
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default SchedulerTab;
