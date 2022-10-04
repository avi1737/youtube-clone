import { Box } from "@mui/material";
import React from "react";

import styles from "./loader.module.css";


function Loader() {
  return (
    <Box container className={styles.container} lg={12} md={12} sm={12} xs={12}>
      <Box className={styles.loader}></Box>;
    </Box>
  );
}

export default Loader;
