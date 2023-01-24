import React from "react";
import { RecoilRoot } from "recoil";
import { Routes, Route } from "react-router-dom";
import { Menu } from "./pages/Menu";
import { THEME } from "./AppTheme";
import { DashBoard } from "./header/DashBoard";
import { ThemeProvider, Box, Toolbar, Typography } from "@mui/material";

import { AppBar, IconButton, Button } from "@arisglobal/agcp-ui";
import TenantTab from "./pages/Tenant/TenantTab";

const props = {
  label: "AgConfigt",
  showSearchBar: true,
};
const App = () => {
  return (
    <RecoilRoot>
      {/* <DashBoard /> */}
      <ThemeProvider theme={THEME}>
        <Routes>
          <Route path="/" element={<Menu />} />
          
        </Routes>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
