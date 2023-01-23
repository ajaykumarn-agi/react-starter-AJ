import React from "react";
import { RecoilRoot } from "recoil";
import { NavbarRes } from "./header/NavbarRes";
import { Routes, Route } from "react-router-dom";
import { Menu } from "./pages/Menu";
import { THEME } from "./AppTheme";
import { DashBoard } from "./header/DashBoard";
import {ThemeProvider} from '@mui/material'

const App = () => {
  return (
    <RecoilRoot>
      {/* <NavbarRes /> */}
      <ThemeProvider theme={THEME}>
        {/* <DashBoard /> */}
        <Routes>
          <Route path="/" element={<Menu />} />
        </Routes>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
