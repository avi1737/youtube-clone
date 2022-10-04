import React from "react";

import { Outlet } from "react-router-dom";
import {  Grid } from "@mui/material";

import Header from "../components/shared/Header";
import Sidebar from "../components/shared/Sidebar";
import { makeStyles } from "@mui/styles";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  dashboard : {
    display : "grid",
    gridTemplateRows : "1fr",
    gridTemplateColumns : "230px auto",
    gridGap : "10px",
  },
  dashboardMobile : {
    display : "grid",
    gridTemplateRows : "1fr",
    gridTemplateColumns : "0px auto",
  },
  main : {
    width : "100%",
  },
  mainMobile : {
    width : '100%',
  }
});

function AppLayout() {

  const classes  = useStyles();
  const isSidebarOpen = useSelector((root : RootState) => root.layout.sideBarOpen);

  return (
    <Grid>
      <Grid item sx={{ width: "100%" }}>
        <Header />
      </Grid>
      <div className={isSidebarOpen ? classes.dashboard : classes.dashboardMobile}>

          <div>
          <Sidebar />
          </div>

          <div className={isSidebarOpen ? classes.main : classes.mainMobile}>
              <Outlet />
          </div>

      </div>
    </Grid>
  );
}

export default AppLayout;
