import React, { useState, useEffect, useCallback } from "react";
// import {Tab, TabContext, TabList, TabPanel} from '@arisglobal/agcp-ui'
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { General } from "./General";
import PublicSource from "./PublicSource";
import { Tenant } from "./Tenant";
import { CMS } from "./CMS";
import MailServer from "./MailServer";
import constants from "../utils/constants";
import TenantTab from "./Tenant/TenantTab";
import "./styles/GeneralStyles.css";

let initialValue = {
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
  "web.help.base.url": { value: "" },
};

export const Menu = () => {
  const [values, setValues] = useState(initialValue);
  const [toggle, setToggle] = useState(false);
  const [tenants, setTenants] = useState({});
  const [tabValue, setTabValue] = useState("1");
  const [error, setError] = useState(null);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const fetchParameters = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(`${constants.API_URL}/rest/getParameters`, {
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Something went Wrong");
      }
      const generalData = await response.json();
      setValues(generalData);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  // fetched tenant details
  const fetchTenantList = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(`${constants.API_URL}/rest/all`, {
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Something went Wrong");
      }
      const tenantData = await response.json();
      setTenants(tenantData)
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchParameters();
    fetchTenantList()
  }, [fetchParameters, fetchTenantList]);

  return (
    <Box
      sx={{ width: "100%", typography: "body2", textTransform: "capitalize" }}
    >
      <TabContext value={tabValue}>
        <Box
          sx={{
            borderBottom: 0,
            borderColor: "divider",
            textTransform: "lowercase",
          }}
        >
          <TabList onChange={handleChange} sx={{ textTransform: "capitalize" }}>
            <Tab
              label="General"
              value="1"
              sx={{ textTransform: "capitalize" }}
            />
            <Tab
              label="Tenant"
              value="2"
              sx={{ textTransform: "capitalize" }}
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
          <Tenant tenants={tenants} setToggle={setToggle}>
            <TenantTab tenants={tenants} />
          </Tenant>
          {/* <TenantTab /> */}
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
};
