import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
export const MyAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error" onClose={() => alert("Close alert")}>
        <AlertTitle>Error</AlertTitle>This is an error alert
      </Alert>

      <Alert
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        <AlertTitle>Success</AlertTitle>This is a success alert
      </Alert>
      <Alert
        variant="outlined"
        severity="error"
        onClose={() => {
          alert("dd");
        }}
      >
        This is an outlined error alert
      </Alert>
    </Stack>
  );
};
