import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AlarmIcon from "@mui/icons-material/Alarm";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

export default function ButtonExample() {
  return (
    <>
      <Variants />
      <Colors />
      <WithIcons />
      <IconButtons />
    </>
  );
}

function Variants() {
  return (
    <Stack spacing={2} direction={"row"} justifyContent={"center"}>
      <Box>
        <Button variant="text">Text</Button>
      </Box>
      <Box>
        <Button variant="contained">Contained</Button>
      </Box>
      <Box>
        <Button variant="outlined">Outlined</Button>
      </Box>
    </Stack>
  );
}

function Colors() {
  return (
    <Stack mt={4} spacing={2} direction={"row"} justifyContent={"center"}>
      <Box>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
      </Box>
      <Box>
        <Button variant="contained" color="error">
          Error
        </Button>
      </Box>
      <Box>
        <Button variant="contained" color="info">
          Info
        </Button>
      </Box>
      <Box>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Box>
      <Box>
        <Button variant="contained" color="warning">
          Warning
        </Button>
      </Box>
    </Stack>
  );
}

function WithIcons() {
  return (
    <Stack mt={4} direction="row" spacing={2} justifyContent={"center"}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  );
}

function IconButtons() {
  return (
    <Stack mt={4} direction="row" spacing={2} justifyContent={"center"}>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </Stack>
  );
}
