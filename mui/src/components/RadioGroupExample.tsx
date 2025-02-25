import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  "job-experience": z
    .string({
      required_error: "Job experience is required",
      invalid_type_error: "Job experience is required",
    })
    .nonempty({ message: "Job experience is required" }),
});

type FormData = z.infer<typeof schema>;

export default function RadioGroupExample() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { "job-experience": "" },
  });

  return (
    <Stack
      component={"form"}
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <FormControl error={!!errors["job-experience"]}>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <Controller
          name="job-experience"
          control={control}
          render={({ field }) => (
            <RadioGroup
              row
              aria-labelledby="job-experience-group-label"
              {...field}
            >
              <FormControlLabel
                labelPlacement="start"
                value="0-2"
                control={<Radio size="small" color="secondary" />}
                label="0-2 years"
              />
              <FormControlLabel
                labelPlacement="start"
                value="3-5"
                control={<Radio size="small" color="secondary" />}
                label="3-5 years"
              />
              <FormControlLabel
                labelPlacement="start"
                value="6-10"
                control={<Radio size="small" color="secondary" />}
                label="6-10 years"
              />
            </RadioGroup>
          )}
        />
        {errors["job-experience"] && (
          <FormHelperText>{errors["job-experience"].message}</FormHelperText>
        )}
        <Button sx={{ width: "min-content" }} type="submit">
          Submit
        </Button>
      </FormControl>
    </Stack>
  );
}
