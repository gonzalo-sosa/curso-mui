import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
  backgroundColor: theme.palette.neutral?.darker,
}));

export default function CustomThemeExample() {
  return (
    <>
      <Box
        sx={{
          height: "250px",
          width: {
            xs: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500,
          },
          bgcolor: "secondary.main",
        }}
      ></Box>
      <StyledBox></StyledBox>
    </>
  );
}
