import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, MenuItem, Stack, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import nationalities from "../data/nationalities.json";

export default function TextFieldExample() {
  return (
    <>
      <ValidationTextFields />
    </>
  );
}

const schema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters long" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" }),
  message: z
    .string({ required_error: "Message is required" })
    .min(10, { message: "Message must be at least 10 characters long" }),
  nationality: z.string({ required_error: "Nationality is required" }),
});

type FormData = z.infer<typeof schema>;

function ValidationTextFields() {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "" },
  });

  return (
    <Stack
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "35ch" } }}
      autoComplete="off"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            error={!!error}
            label={error?.message}
            helperText={"Name"}
            placeholder="John Doe"
            variant="standard"
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            error={!!error}
            label={error?.message}
            helperText={"Email"}
            placeholder="email@example.com"
            variant="standard"
          />
        )}
      />
      <Controller
        name="message"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            error={!!error}
            label={error?.message}
            multiline
            helperText={"Message"}
            placeholder="Write your message here..."
            variant="standard"
          />
        )}
      />
      <Controller
        name="nationality"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            select
            error={!!error}
            label={error?.message}
            helperText={"Select your nationality"}
            variant="standard"
          >
            {nationalities.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
      <Box>
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </Box>
    </Stack>
  );
}
