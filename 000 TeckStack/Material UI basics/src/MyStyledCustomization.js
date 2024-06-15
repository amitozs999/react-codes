import * as React from "react";
import Slider from "@mui/material/Slider";
import { alpha, styled } from "@mui/material/styles";

const SuccessSlider = styled(Slider)(({ theme }) => ({
  width: 300,
  color: theme.palette.success.main,
  "& .MuiSlider-thumb": {
    "&:hover, &.Mui-focusVisible": {
      //shadow of slider bhi custom color ki chnage
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
    },
    "&.Mui-active": {
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
    },
  },
}));

export default function MyStyledCustomization() {
  return <SuccessSlider defaultValue={30} />;
}
