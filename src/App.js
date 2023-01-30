import React from "react";
import { RecoilRoot } from "recoil";
import { Routes, Route } from "react-router-dom";
import { Menu } from "./pages/menu";
import { THEME } from "./AppTheme";
import { DashBoard } from "./header/DashBoard";
import { ThemeProvider, Box, Toolbar, Typography } from "@mui/material";
import TenantTab from "./pages/tenants/tenantTab";

const props = {
  label: "AgConfig",
  showSearchBar: true,
};
const App = () => {
  return (
    <RecoilRoot>
      <DashBoard />
      <ThemeProvider theme={THEME}>
        <Routes>
          <Route path="/" element={<Menu />}/>          
        </Routes>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
