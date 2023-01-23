import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { General } from "./General";
import { PublicSource } from "./PublicSource";
import { Tenant } from "./Tenant";
import { CMS } from "./CMS";
import { MailServer } from "./MailServer";

export const Menu = () => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: "100%", typography: "body2", textTransform: "capitalize" }}
    >
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
          <General />
        </TabPanel>
        <TabPanel value="2">
          {" "}
          <Tenant />
        </TabPanel>

        <TabPanel value="3">
          <CMS />
        </TabPanel>
        <TabPanel value="4">
          {" "}
          <PublicSource />
        </TabPanel>
        <TabPanel value="5">
          <MailServer />
        </TabPanel>
      </TabContext>
    </Box>
  );
};
