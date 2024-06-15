import { Stack, Chip, Avatar } from "@mui/material";
import { useState } from "react";

export const MyChip = () => {
  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);
  const handleDelete = (chipToDelete) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };
  return (
    <>
      <Stack direction="row" spacing={1}>
        <Chip label="Chip" color="primary" size="small" />
        <Chip
          label="Chip Outlined"
          variant="outlined"
          color="secondary"
          avatar={<Avatar>V</Avatar>}
        />
        <Chip label="Click" color="success" onClick={() => alert("Clicked")} />
        <Chip
          label="Delete"
          color="error"
          onClick={() => alert("Clicked")}
          onDelete={() => alert("Delete")} //cross appears with this
        />
      </Stack>

      <Stack direction="row" spacing={1}>
        {chips.map((chip) => (
          <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
        ))}
      </Stack>
    </>
  );
};
