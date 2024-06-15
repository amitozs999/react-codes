import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

export default function MySnackbar() {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={handleClick({ vertical: "top", horizontal: "center" })}
        >
          Top-Center using box
        </Button>
      </Box>
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Button
            onClick={handleClick({ vertical: "top", horizontal: "left" })}
          >
            Top-Left using grid first column 6 used
          </Button>
        </Grid>
        <Grid item xs={6} textAlign="right">
          <Button
            onClick={handleClick({ vertical: "top", horizontal: "right" })}
          >
            Top-Right using grid last column 6 used
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={handleClick({ vertical: "bottom", horizontal: "left" })}
          >
            Bottom-Left using grid first column 6 used
          </Button>
        </Grid>
        <Grid item xs={6} textAlign="right">
          <Button
            onClick={handleClick({ vertical: "bottom", horizontal: "right" })}
          >
            Bottom-Right using grid last column 6 used
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={handleClick({ vertical: "bottom", horizontal: "center" })}
        >
          Bottom-Center
        </Button>
      </Box>
    </>
  );

  return (
    <Box sx={{ width: 500 }}>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }} //values fetched from curr selected state us hisab se show snackbar
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
    </Box>
  );
}
