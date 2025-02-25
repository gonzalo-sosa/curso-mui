import { Typography } from "@mui/material";

export default function TypographyExample() {
  return (
    <>
      <Typography variant="h1">h1</Typography>
      <Typography variant="h2">h2</Typography>
      <Typography variant="h3">h3</Typography>
      <Typography variant="h4">h4</Typography>
      <Typography variant="h5">h5</Typography>
      <Typography variant="h6">h6</Typography>
      <Typography variant="h6" component={"h2"}>
        h2
      </Typography>
      <Typography variant="h6" gutterBottom>
        Margin
      </Typography>
      <Typography variant="subtitle1">Subtitle1</Typography>
      <Typography variant="subtitle2">Subtitle2</Typography>
      <Typography variant="body1">Body1</Typography>
      <Typography variant="body2">Body2</Typography>
    </>
  );
}
