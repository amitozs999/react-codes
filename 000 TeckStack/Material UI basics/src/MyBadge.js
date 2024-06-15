import * as React from "react";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

export default function MyBadge() {
  return (
    <Stack spacing={4} direction="row" sx={{ color: "action.active" }}>
      <Badge color="secondary" badgeContent={99}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={100} max={90}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={90} max={999} overlap="circular">
        <MailIcon />
      </Badge>
    </Stack>
  );
}
