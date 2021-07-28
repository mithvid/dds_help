import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Routes from "./routes";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Gilroy"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
