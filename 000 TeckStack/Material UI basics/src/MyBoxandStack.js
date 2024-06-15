import { Box, Stack } from "@mui/material";
export const MyBoxandStack = () => {
  return (
    <Stack
      border="1px solid"
      spacing={2}
      direction="row-reverse"
      justifyContent="center"
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        Amitoz
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        alignItems="center"
        justifyContent="center"
        p={2}
      >
        aa
      </Box>
      <Box display="flex" height="100px" width="100px" bgcolor="red" p={2}>
        bb
      </Box>
    </Stack>
  );
};
