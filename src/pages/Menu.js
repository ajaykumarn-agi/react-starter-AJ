import React, { useState, useEffect, useCallback } from "react";
// import {Tab, TabContext, TabList, TabPanel} from '@arisglobal/agcp-ui'
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { General } from "./general";
import PublicSource from "./publicSource";
import { Tenant } from "./tenant";
import { CMS } from "./cms";
import MailServer from "./mailServer";
import constants from "../utils/constants";
import TenantTab from "./tenants/tenantTab";
import "./styles/generalStyles.css";

export const Menu = () => {
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);

  const [tabValue, setTabValue] = useState("1");
  const [error, setError] = useState(null);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const fetchParameters = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(`api${constants.GET_PARAMS}`, {
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Something went Wrong");
      }
      const generalData = await response.json();
      setValues(generalData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, []);

  //fetch tenantList
  // const fetchTenantList = useCallback(async () => {
  //   setError(null);
  //   setLoading(true);
  //   try {
  //     const response = await fetch(`api/${constants.GET_TENANT}`, {
  //       headers: { "Content-Type": "application/json" },
  //     });
  //     if (!response.ok) {
  //       setError(response.statusText);
  //       throw new Error(response.statusText);
  //     }
  //     const tenantData = await response.json();
  //     setTenants(tenantData);
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error.message);
  //     setLoading(false);
  //   }
  // }, []);

  useEffect(() => {
    fetchParameters();
  }, [fetchParameters]);

  if (loading) {
    return <p> Loading... </p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  } else {
    return (
      <Box
        sx={{
          width: "100%",
          typography: "body2",
          textTransform: "capitalize",
          backgroundColor: "white",
          marginTop: '4rem'
        }}
      >
        <TabContext value={tabValue}>
          <Box
            sx={{
              borderBottom: '1',
              borderColor: "divider",
              textTransform: "lowercase",
            }}
            className="tabs-header"
          >
            <TabList
              onChange={handleChange}
              sx={{
                textTransform: "capitalize",
                backgroundColor: "white",
              }}
              className="tabs-header"
            >
              <Tab
                label="General"
                value="1"
                sx={{ textTransform: "capitalize", overflow: "hidden" }}
              />
              <Tab
                label="Tenant"
                value="2"
                sx={{ textTransform: "capitalize", overflow: "hidden" }}
              />
              <Tab label="CMS" value="3" sx={{ textTransform: "capitalize" }} />
              <Tab
                label="Public Source"
                value="4"
                sx={{ textTransform: "capitalize" }}
              />
              <Tab
                label="Mail Server"
                value="5"
                sx={{ textTransform: "capitalize" }}
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <General generalData={values} />
          </TabPanel>
          <TabPanel value="2">
            {" "}
            <Tenant>
              <TenantTab />
            </Tenant>
          
          </TabPanel>
          <TabPanel value="3">
            <CMS cmsParams={values} />
          </TabPanel>
          <TabPanel value="4">
            {" "}
            <PublicSource props={values} />
          </TabPanel>
          <TabPanel value="5">
            <MailServer mailParams={values} />
          </TabPanel>
        </TabContext>
      </Box>
    );
  }
};
