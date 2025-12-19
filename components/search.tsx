"use client";
import TextField from "@mui/material/TextField";

export default function Search({ placeholder }: { placeholder: string }) {
  return (
    <TextField variant="outlined" label="Search" placeholder={placeholder} />
  );
}
