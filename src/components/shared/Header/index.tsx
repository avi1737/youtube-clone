import React from "react";

import { AppBar, Grid, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";

import SearchInput from "./SearchInput";
import { useDispatch } from "react-redux";
import { toggleSidebarMenu } from "../../../redux/layoutSlice";

const useStyles = makeStyles({
  header: {
    textAlign: "center",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "70px",
    border: "none",
    padding: "0px 10px",
  },
  headerLogo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "20px",
  },
});

function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(toggleSidebarMenu());
  };

  return (
    <AppBar position="fixed" elevation={1}>
      <Grid
        container
        sx={{ backgroundColor: theme.palette.primary.light }}
        className={classes.header}
      >
        <Grid item md={1} lg={1} sm={1} xs={1} className={classes.headerLogo}>
          <MenuIcon
            sx={{ color: theme.palette.primary.dark, cursor: "pointer" }}
            onClick={handleSidebar}
          />
        </Grid>
        <Grid item md={5} lg={5} sm={10} xs={10}>
          <SearchInput />
        </Grid>
        {/* <Grid item md={1} lg={1}>
          <Toolbar />
        </Grid> */}
      </Grid>
    </AppBar>
  );
}

export default Header;
