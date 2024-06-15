import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const MyToolTip = () => {
  return (
    <Tooltip
      title="Delete"
      placement="right"
      arrow
      enterDelay={200}
      leaveDelay={200}
    >
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};
