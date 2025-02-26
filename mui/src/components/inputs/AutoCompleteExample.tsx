import { Autocomplete, Stack, TextField, useAutocomplete } from "@mui/material";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { useState } from "react";
import top100Films from "../../data/top100Films";

export default function AutoCompleteExample() {
  return (
    <Stack spacing={4}>
      <SimpleAutoComplete />
      <ControlledAutoComplete />
      <CustomHook />
      <QueryClientProvider client={new QueryClient()}>
        <AsynchronousAutoComplete />
      </QueryClientProvider>
    </Stack>
  );
}

function SimpleAutoComplete() {
  return (
    <Autocomplete
      disablePortal
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Opciones" />}
    />
  );
}

const firstMovie = top100Films[0];

function ControlledAutoComplete() {
  const [value, setValue] = useState<string | null>(firstMovie.label);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete
        value={value as typeof firstMovie | null}
        onChange={(
          _event: React.SyntheticEvent,
          newValue: typeof firstMovie | null
        ) => {
          if (newValue) setValue(newValue?.label);
          else setValue(null);
        }}
        inputValue={inputValue}
        onInputChange={(_event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />
    </div>
  );
}

function CustomHook() {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({ id: "use-autocomplete", options: top100Films });

  return (
    <div>
      <div {...getRootProps()}>
        <label style={{ display: "block" }} {...getInputLabelProps()}>
          useAutocomplete
        </label>
        <input {...getInputProps()} />
      </div>
      {groupedOptions.length > 0 ? (
        <ul {...getListboxProps()}>
          {groupedOptions.map((option, index) => {
            const { key, ...optionProps } = getOptionProps({ option, index });
            return (
              <li key={key} {...optionProps}>
                {option.label}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

const getAlbums = async (): Promise<
  {
    userId: number;
    id: number;
    title: string;
  }[]
> =>
  fetch("http://jsonplaceholder.typicode.com/albums").then((res) => res.json());

function AsynchronousAutoComplete() {
  const { data, refetch, isLoading, error } = useQuery({
    queryKey: ["albums"],
    queryFn: getAlbums,
    enabled: false,
  });
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    refetch();
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <Autocomplete
      sx={{ width: 300 }}
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={({ title }) => title}
      options={data || []}
      loading={isLoading}
      renderInput={(params) => <TextField {...params} label="Asynchronous" />}
    />
  );
}
