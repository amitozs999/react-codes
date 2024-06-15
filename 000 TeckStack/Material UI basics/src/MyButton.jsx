import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import ButtonGroup from "@mui/material/ButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const MyButton = () => {
  const [formats, setFormats] = useState([]);

  const handleFormatChange = (_event, updatedFormats) => {
    setFormats(updatedFormats);
  };

  return (
    <>
      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <Button variant="text" href="https://google.com">
            Text
          </Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
        </Stack>
        <Stack display="block" spacing={2} direction="row">
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            startIcon={<SendIcon />}
            disableRipple
            onClick={() => alert("Clicked")}
          >
            Send
          </Button>
          <Button variant="contained" endIcon={<SendIcon />} disableElevation>
            Send
          </Button>
        </Stack>

        <Stack direction="row">
          <ButtonGroup
            variant="text"
            orientation="vertical"
            size="small"
            color="secondary"
            aria-label="alignment button group"
          >
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>

        <Stack direction="row">
          <ToggleButtonGroup
            //exclusive
            value={formats}
            onChange={handleFormatChange}
            aria-label="text formatting"
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underlined" aria-label="underline">
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </>
  );
};

export default MyButton;
