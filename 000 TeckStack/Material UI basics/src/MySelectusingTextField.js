import Stack from "@mui/material/Stack";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
const MySelectusingTextField = () => {
  const [countries, setCountries] = useState([]);
  console.log(countries);

  const handleChange = (event) => {
    const value = event.target.value;
    setCountries(value);
  };
  return (
    <Stack spacing={4} width="250px">
      <TextField
        label="Select country"
        select
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please select your country"
        value={countries}
        onChange={handleChange}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Stack>
  );
};
export default MySelectusingTextField;
