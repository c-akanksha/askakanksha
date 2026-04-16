import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4F46E5", // indigo
    },
    secondary: {
      main: "#22C55E", // green
    },
    background: {
      default: "#F7F7FB",
    },
  },
  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
  },
});

export default theme;
