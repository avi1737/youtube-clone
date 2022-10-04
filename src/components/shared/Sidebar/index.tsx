import React from "react";

import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Link } from "react-router-dom";

import { Channels, Menu, SettingsMenu } from "../../../types/SideMenu";
import { makeStyles, styled } from "@mui/styles";

const useStyles = makeStyles({
  menuContainer: {
    width: "240px",
    background: "#fff",
    top: 0,
    position: "fixed",
    bottom: 0,
    marginTop: "70px",
    overflow: "auto",
    boxShadow: "0 0 2px rgba(0,0,0,0.70)",
    CSSTransition: "left .7s ease",
  },
  menuContainerMobile: {
    width: "0px",
    background: "#fff",
    top: 0,
    position: "fixed",
    bottom: 0,
    marginTop: "70px",
    overflow: "hidden",
  },
});

const Profile = styled("img")({
  width: "30px",
  height: "30px",
  borderRadius: "50%",
});

const drawer = (
  <div>
    <List>
      {Menu.map((text, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton component={Link} to={text.navigationLink}>
            {<text.icon />}
            <ListItemText primary={text.title} sx={{ paddingLeft: "20px" }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {SettingsMenu.map((text, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton>
            {<text.icon />}
            <ListItemText primary={text.title} sx={{ paddingLeft: "20px" }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {Channels.map((text, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton component={Link} to={text.channelUrl}>
            <Profile src={text.url} />
            <ListItemText primary={text.title} sx={{ paddingLeft: "20px" }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </div>
);

// const container = window !== undefined ? () => window.document.body : undefined;

function Sidebar() {
  const isSideMenuOpen = useSelector(
    (state: RootState) => state.layout.sideBarOpen
  );

  const classes = useStyles();
  return (
    <>
      <Box
        component="nav"
        aria-label="mailbox folders"
        className={
          isSideMenuOpen ? classes.menuContainer : classes.menuContainerMobile
        }
      >
        {drawer}
      </Box>
    </>
  );
}

export default Sidebar;
