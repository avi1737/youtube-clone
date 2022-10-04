import { ThemeOptions } from "@mui/material";
import { purple } from "@mui/material/colors";

const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#FF0000",
      light: "#FFFFFF",
      dark: "#282828",
    },
    secondary: {
      main: purple[500],
    },
  },
  typography: {
    fontSize: 16,
    fontWeightBold: "500",
  },
};

export default lightTheme;
