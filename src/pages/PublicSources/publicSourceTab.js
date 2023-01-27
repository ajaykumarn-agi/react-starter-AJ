import React, {useState, useEffect, useCallback} from 'react';
import {Grid, Typography, Box} from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MongoConfig from './mongoConfig';
import DataConfig from './dataConfig';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './PublicSource.css';
import {Snackbar, Alert} from '@arisglobal/agcp-ui';
import '../styles/GeneralStyles.css';

const initialValue = {
  'mongo.host': {value: ''},
  'mongo.secondary.host': {value: ''},
  'mongo.port': {value: ''},
  'mongo.username': {value: ''},
  'mongo.password': {value: ''},
  'mongo.batch.size': {value: ''},
  'mongo.dbname.1002': {value: ''},
  'prodrole.suspect': {value: ''},
  'exclude.dup.cases': {value: ''},
  'include.suspect.cases': {value: ''},
  'mongo.dbname.1023': {value: ''},
  'mongo.dbname.1003': {value: ''},
  'mongo.dbname.1143': {value: ''},
  'vigibase.prodrole.suspect': {value: ''},
  'exclude.vigibase.dup.cases': {value: ''},
  'include.vigibase.suspect.cases': {value: ''},
  'mongo.dbname.1077': {value: ''},
  'aers.data.directory': {value: ''},
  'vaers.data.directory': {value: ''},
  'vigibase.data.directory': {value: ''},
  'pmda.username': {value: ''},
  'pmda.password': {value: ''},
  'pmda.data.directory': {value: ''},
};

const PublicSource = props => {
  const [value, setValue] = React.useState ('1');

  const handleChange = (event, newValue) => {
    setValue (newValue);
  };
  const [error, setError] = useState (null);
  const [open, setOpen] = useState (false);

  const [values, setValues] = useState (initialValue);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen (false);
  };

  // fetch Data
  const fetchGeneralData = useCallback (async () => {
    setError (null);
    try {
      const response = await fetch ('/api/rest/getParameters');
      if (!response.ok) {
        throw new Error ('Something went Wrong');
      }
      const generalData = await response.json ();
      setValues (generalData);
    } catch (error) {
      setError (error.message);
    }
  }, []);

  useEffect (
    () => {
      fetchGeneralData ();
    },
    [fetchGeneralData]
  );

  const handleInputChange = e => {
    e.preventDefault ();
    console.log (e.target.type);
    console.log (e.target.name);
    console.log (e.target.value);
    console.log (e.target.checked);

    if (e.target.type === 'checkbox') {
      const {name, checked} = e.target;
      setValues ({
        ...values,
        [name]: {...values[name], value: checked},
      });
    } else {
      const {name, value} = e.target;
      setValues ({
        ...values,
        [name]: {...values[name], value: value},
      });
      console.log (values);
    }
  };

  const onSubmitHandler = async e => {
    e.preventDefault ();
    // console.log(values);
    try {
      const response = await fetch ('/api/rest/saveParameters', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify (values),
      });
      if (!response.ok) {
        throw new Error (response.statusText);
      }
      if (error === null) {
        setOpen (true);
      }
    } catch (err) {
      setError (err.message);
    }
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className="general-container"
      sx={{flexGrow: 1}}
    >
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" gutterBottom>
          Public Source
        </Typography>
      </Grid>
      <div id="button">
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={onSubmitHandler}>Save</Button>
          <Button>cancel</Button>
        </ButtonGroup>
      </div>

      <TabContext value={value}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="public source tab">
            <Tab label="Mongo Config" value="1" />
            <Tab label="Data Config" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <MongoConfig publicDbData={values} parentMethod={handleInputChange} />
        </TabPanel>
        <TabPanel value="2">
          <DataConfig publicDbData={values} parentMethod={handleInputChange} />
        </TabPanel>

      </TabContext>

      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={2000}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        severity="success"
      >
        <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
          Updated Successfully
        </Alert>
      </Snackbar>

    </Box>
  );
};
export default PublicSource;
