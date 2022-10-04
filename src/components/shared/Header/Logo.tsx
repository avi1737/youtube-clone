import React from "react";

import { useTheme, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

function Logo(props : any) {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box className={classes.logoContainer}>
      <img src="./Youtube_icon-icons.com_66802.png" alt="youtube-icon" />
      <Typography
        sx={{ color: theme.palette.primary.dark, paddingLeft: "10px" }}
      >
        Tube
      </Typography>
    </Box>
  );
}

export default Logo;
