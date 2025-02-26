import {
  colors,
  createTheme,
  CssBaseline,
  Grid2,
  ThemeProvider,
} from "@mui/material";
import { Outlet } from "react-router";
import SideBar from "./SideBar";

const NeutralTheme = {
  neutral: {
    main: colors.grey[500],
    darker: colors.grey[700],
  },
};

const lightTheme = createTheme({
  palette: {
    mode: "light",
    ...NeutralTheme,
  },
  // // Para Typography
  // components: {
  //   MuiTypography: {
  //     defaultProps: {
  //       variantMapping: {
  //         h2: "h2",
  //         h3: "h2",
  //         h4: "h2",
  //         h5: "h2",
  //         h6: "h2",
  //         subtitle1: "h3",
  //         subtitle2: "h3",
  //         body1: "span",
  //         body2: "span",
  //       },
  //     },
  //   },
  // },
});

export type CustomTheme = typeof lightTheme;

const getAllExamples = () => import.meta.glob("./components/**/*.tsx");

const simplifyPath = (path: string) =>
  path
    .replace(/^\.\.?\//, "") // Elimina ../ y ./
    .replace(/\.tsx$/, ""); // Elimina extensión .tsx

const examples = Object.keys(getAllExamples()).map(simplifyPath);

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline>
        <Grid2 container p={2} sx={{ justifyContent: "end" }}>
          <Grid2 size={4}>
            <SideBar items={examples} />
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
