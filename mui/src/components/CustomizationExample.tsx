// Customization examples with Styled Components

import { InputBase, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled("button")({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  borderRadius: 3,
  border: 0,
  color: "white",
  height: 48,
  padding: "0 30px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  select: "none",
  "&: hover": {
    filter: "brightness(1.2)",
  },
});

const CustomInput = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
  "&:focus": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
  "&:active": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
}));

export default function CustomizationExample() {
  return (
    <Stack spacing={4} direction={"row"}>
      <CustomButton>Custom Button</CustomButton>
      <CustomInput />
    </Stack>
  );
}
