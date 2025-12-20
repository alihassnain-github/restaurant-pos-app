"use client";

import { DayPicker, DateRange } from "react-day-picker";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import "react-day-picker/style.css";
import { useEffect, useRef, useState } from "react";

interface DateFilterProps {
  placeholder: string;
  futureDate: boolean;
}

export default function DateFilter({
  placeholder,
  futureDate = true,
}: DateFilterProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();

  const disabled = !futureDate ? { after: new Date() } : undefined;

  const value = selectedRange?.from
    ? selectedRange.to
      ? selectedRange.from.toDateString() === selectedRange.to.toDateString()
        ? selectedRange.from.toDateString()
        : `${selectedRange.from.toDateString()} - ${selectedRange.to.toDateString()}`
      : selectedRange.from.toDateString()
    : "";

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Box component="div" ref={containerRef} sx={{ position: "relative" }}>
      <TextField
        fullWidth
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
        size="small"
        variant="outlined"
        label="Date"
        value={value}
        placeholder={placeholder}
        onFocus={() => setOpen(true)}
      />
      {open && (
        <Card
          variant="elevation"
          sx={{
            position: "absolute",
            bgcolor: "background.paper",
            zIndex: 3,
            boxShadow: 6,
            p: 2,
          }}
        >
          <DayPicker
            mode="range"
            disabled={disabled}
            selected={selectedRange}
            onSelect={setSelectedRange}
          />
        </Card>
      )}
    </Box>
  );
}
