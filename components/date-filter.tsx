"use client";

import { DayPicker } from "react-day-picker";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import "react-day-picker/style.css";
import { useState } from "react";

interface DateFilterProps {
  placeholder: string,
  mode: "single" | "range";
  futureDate: boolean;
}

export default function DateFilter({
  placeholder,
  mode,
  futureDate = true,
}: DateFilterProps) {

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const disabled = !futureDate ? { after: new Date() } : undefined;
  const value = selectedDate ? selectedDate.toDateString() : "";

  const handleDayPickerSelect = (date: Date | undefined) => {
    if (!date) {
      setSelectedDate(undefined);
    } else {
      setSelectedDate(date);
    }
  };

  return (
    <Box component="div" sx={{ position: "relative" }}>
      <TextField variant="outlined" label="Date" value={value} placeholder={placeholder} />
      <Card variant="elevation" sx={{ position: "absolute", bgcolor: "secondary", zIndex: 3, p: 2 }}>
        {mode === "single" ? (
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={handleDayPickerSelect}
            disabled={disabled}
          />
        ) : null}
        {mode === "range" ? (
          <DayPicker
            mode="range"
            disabled={disabled}
          />
        ) : null}
      </Card>
    </Box>
  );
}
