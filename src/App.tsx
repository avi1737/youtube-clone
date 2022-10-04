// default

import React, { useEffect } from "react";

// external
import { createTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";

// internal
import light from "./themes/light";
import dark from "./themes/dark";
import { RootState } from "./redux/store";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Channel from "./pages/Channel";
import Watch from "./pages/Watch";

function App() {
  const dispatch = useDispatch();

  const mode = useSelector((state: RootState) => state.layout.mode);
  const theme = React.useMemo(
    () => createTheme(mode === "light" ? light : dark),
    [mode]
  );

  useEffect(() => {}, [dispatch]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="channel/:id" element={<Channel/>} />
            <Route path="watch/:id" element={<Watch/>} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
