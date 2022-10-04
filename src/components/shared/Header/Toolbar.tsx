import React from "react";

import { Box } from "@mui/material";
import {  styled } from "@mui/styles";

const Profile = styled("img")({
  width : "40px",
  height : "40px",
  borderRadius : "50%"
});





function Toolbar() {

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "right",
        justifySelf : "end"
      }}
    >
      <Profile src="https://www.w3schools.com/howto/img_avatar.png">
      </Profile>
    </Box>
  );
}

export default Toolbar;
