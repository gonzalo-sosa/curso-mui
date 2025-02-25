import { Button, ButtonGroup } from "@mui/material";

export default function ButtonGroupExample() {
  return (
    <>
      <Basic />
    </>
  );
}

function Basic() {
  return (
    <>
      {/* variant, orientation, size, color */}

      <ButtonGroup
        color="error"
        variant="outlined"
        aria-label="outlined button group"
      >
        <Button onClick={() => {}}>Botón 1</Button>
        <Button onClick={() => {}}>Botón 2</Button>
        <Button onClick={() => {}}>Botón 3</Button>
      </ButtonGroup>
    </>
  );
}
