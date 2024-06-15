import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function MyDateandTimePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker defaultValue={dayjs("2022-04-17")} />
      <MobileDatePicker defaultValue={dayjs("2022-04-17")} />
      <StaticDatePicker defaultValue={dayjs("2022-04-17")} />

      <TimePicker label="tamepicker" defaultValue={dayjs("2022-04-17T15:30")} />
      <DateTimePicker
        label="datepicker"
        defaultValue={dayjs("2022-04-17T15:30")}
      />
    </LocalizationProvider>
  );
}
