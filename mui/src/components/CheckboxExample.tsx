import { zodResolver } from "@hookform/resolvers/zod";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

export default function CheckboxExample() {
  return (
    <Box>
      <Simple />
      <HookForm />
    </Box>
  );
}

function Simple() {
  const [acceptTnC, setAcceptTnC] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked);
  };

  return (
    <>
      <Box>
        <FormControlLabel
          control={
            <Checkbox
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
              checked={acceptTnC}
              onChange={handleChange}
            />
          }
          label="Bookmark this"
        />
      </Box>
      <Box>
        <FormControlLabel
          control={
            <Checkbox
              checked={acceptTnC}
              onChange={handleChange}
              size="medium"
              color="secondary"
            />
          }
          label="Accept terms and conditions"
        />
      </Box>
    </>
  );
}

const schema = z.object({
  skills: z
    .array(
      z.string({
        required_error: "At least one skill is required",
        invalid_type_error: "At least one skill is required",
      })
    )
    .nonempty({ message: "At least one skill is required" }),
});

type FormData = z.infer<typeof schema>;

function HookForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { skills: [] },
  });

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { skills } = getValues();

    const index = skills.indexOf(event.target.value);

    if (index === -1) {
      setValue("skills", [...skills, event.target.value]);
    } else {
      setValue(
        "skills",
        skills.filter((skill) => skill !== event.target.value) as [
          string,
          ...string[]
        ]
      );
    }
  };

  return (
    <Box
      mt={4}
      component="form"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <FormControl error={!!errors.skills}>
        <FormLabel>Skills</FormLabel>
        <Controller
          control={control}
          name="skills"
          render={({ field }) => (
            <FormGroup {...field} onChange={handleSkillChange}>
              <FormControlLabel
                control={<Checkbox value="html" />}
                label="HTML"
              />
              <FormControlLabel
                control={<Checkbox value="css" />}
                label="CSS"
              />
              <FormControlLabel
                control={<Checkbox value="javascript" />}
                label="JavaScript"
              />
            </FormGroup>
          )}
        />
        {errors.skills && (
          <FormHelperText>{errors.skills.message}</FormHelperText>
        )}
        <Button type="submit">Submit</Button>
      </FormControl>
    </Box>
  );
}
