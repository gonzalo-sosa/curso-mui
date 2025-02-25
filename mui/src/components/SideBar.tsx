import { Button, Stack } from "@mui/material";
import { NavLink } from "react-router";

const getAllExamples = () => import.meta.glob("../components/*.tsx");

const simplifyPath = (path: string) =>
  path.replace("./", "").replace(".tsx", "");

const camelToKebab = (str: string) =>
  str
    .replace(/([A-Z])/g, "-$1")
    .replace(/^-/, "")
    .toLowerCase();

export default function SideBar() {
  return (
    <Stack component={"nav"} is="nav" role="navigation">
      {Object.keys(getAllExamples()).map((path) => (
        <Button
          sx={{ justifyContent: "start", textTransform: "unset" }}
          key={path}
          component={NavLink}
          to={camelToKebab(simplifyPath(path))}
        >
          {simplifyPath(path)}
        </Button>
      ))}
    </Stack>
  );
}
