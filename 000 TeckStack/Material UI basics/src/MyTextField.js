import Stack from "@mui/material/Stack";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const MyTextField = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Outlined" variant="outlined" />
        <TextField label="Filled" variant="filled" />
        <TextField label="Standard" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Form Input"
          required
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
          type="password"
          error={!value}
          value={value}
          onChange={handleChange}
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
export default MyTextField;
