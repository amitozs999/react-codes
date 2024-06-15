import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";

import Button from "@mui/material/Button";

const MyRadio = () => {
  const [value, setValue] = useState("");
  console.log(value);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [value2, setValue2] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("Choose wisely");

  const handleRadioChange2 = (event) => {
    setValue2(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value2 === "best") {
      setHelperText("You got it!");
      setError(false);
    } else if (value2 === "worst") {
      setHelperText("Sorry, wrong answer!");
      setError(true);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };

  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="job-experience-group-label"
          name="job-experience-group"
          value={value}
          onChange={handleChange}
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
      </FormControl>

      <form onSubmit={handleSubmit}>
        <FormControl sx={{ m: 3 }} error={error} variant="standard">
          <FormLabel id="demo-error-radios">Pop quiz: MUI is...</FormLabel>
          <RadioGroup
            aria-labelledby="demo-error-radios"
            name="quiz"
            value={value2}
            onChange={handleRadioChange2}
          >
            <FormControlLabel
              value="best"
              control={<Radio />}
              label="The best!"
            />
            <FormControlLabel
              value="worst"
              control={<Radio />}
              label="The worst."
            />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
          <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
            Check Answer
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};
export default MyRadio;
