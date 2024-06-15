import { Box, Grid, Paper } from "@mui/material";

export const MyGrid = () => {
  return (
    <Paper sx={{ padding: "32px", margin: "25px" }} elevation={2}>
      <Grid rowSpacing={2} columnSpacing={1} container my={4}>
        <Grid item xs={6} sm={12}>
          <Box p={2} bgcolor="primary.light">
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6} sm={12}>
          <Box p={2} bgcolor="primary.light">
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6} sm={12}>
          <Box p={2} bgcolor="primary.light">
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6} sm={12}>
          <Box p={2} bgcolor="primary.light">
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
