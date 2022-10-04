import { ThemeOptions } from "@mui/material";
import { green, pink } from "@mui/material/colors";
const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: green[500],
    },
    secondary: {
      main: pink[500],
    },
  },
};

export default darkTheme;
