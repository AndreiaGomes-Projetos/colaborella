import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import purple from "@material-ui/core/colors/purple";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
      contrastText: "#FFF",
    },
    secondary: {
      main: "#FFF",
    },
    error: {
      light: red[300],
      main: red[500],
      dark: red[700],
      contrastText: "#FFF",
    },
      textPrimary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
      contrastText: "#FFF",
    }
  },
});

export default theme