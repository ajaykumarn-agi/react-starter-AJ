import React , {useState} from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DefaultTab from "./DefaultTab";
import DBDetailsTab from "./DBDetailsTab";
import IdpTab from "./IdpTab";
import SchedulerTab from "./SchedulerTab";
import LicenseTab from "./LicenseTab";
import { useLocation } from "react-router-dom";

const TenantTab = () => {
  const [value, setValue] = React.useState("1");
  

  const location = useLocation();
  const values = location.states?.tenants;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onSubmitHandler =(e)=>{
    e.preventDefault()
    console.log(values)
  }



  return (
    <Box
      sx={{
        width: "100%",
        typography: "body2",
        textTransform: "capitalize",
        my: 8,
      }}
    >
    <button onClick={onSubmitHandler} >Submit</button>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 0,
            borderColor: "divider",
            textTransform: "lowercase",
          }}
        >
          <TabList onChange={handleChange} sx={{ textTransform: "capitalize" }}>
            <Tab
              label="Default"
              value="1"
              sx={{ textTransform: "capitalize" }}
            />
            <Tab
              label="DB Deatails"
              value="2"
              sx={{ textTransform: "capitalize" }}
            />
            <Tab
              label="License"
              value="3"
              sx={{ textTransform: "capitalize" }}
            />
            <Tab
              label="Scheduler"
              value="4"
              sx={{ textTransform: "capitalize" }}
            />
            <Tab label="Idp" value="5" sx={{ textTransform: "capitalize" }} />
          </TabList>
        </Box>
        <TabPanel value="1">
          <DefaultTab />
        </TabPanel>
        <TabPanel value="2">
          <DBDetailsTab props={values} />
        </TabPanel>

        <TabPanel value="3">
          <LicenseTab />
        </TabPanel>
        <TabPanel value="4">
          <SchedulerTab />
        </TabPanel>
        <TabPanel value="5">
          <IdpTab />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default TenantTab;
