import React from "react";
import { RecoilRoot } from "recoil";
import { Routes, Route } from "react-router-dom";
import { Menu } from "./pages/Menu";
import { THEME } from "./AppTheme";
import { DashBoard } from "./header/DashBoard";
import { ThemeProvider, Box } from "@mui/material";
import { AppBar } from "@arisglobal/agcp-ui";

const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={THEME}>
        <AppBar label="AgConfig" showSearchBar="true" sx={{ mb: 1 }}   >
          <Box >
            <h2>App Config</h2>
          </Box>
        </AppBar>
          <Routes>
            <Route path="/" element={<Menu />} />
          </Routes>
       
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
