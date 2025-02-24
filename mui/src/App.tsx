import { createTheme, CssBaseline, Grid2, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router";
import SideBar from "./components/SideBar";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  // // Para Typography
  //  components: {
  //   MuiTypography: {
  //     defaultProps: {
  //       variantMapping: {
  //         h1: 'h2',
  //         h2: 'h2',
  //         h3: 'h2',
  //         h4: 'h2',
  //         h5: 'h2',
  //         h6: 'h2',
  //         subtitle1: 'h2',
  //         subtitle2: 'h2',
  //         body1: 'span',
  //         body2: 'span',
  //       },
  //     },
  //   },
  // },
});

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline>
        <Grid2 container spacing={2} p={2}>
          <Grid2 size={3}>
            <SideBar />
          </Grid2>
          <Grid2 size={"grow"}>
            <Outlet />
          </Grid2>
        </Grid2>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
