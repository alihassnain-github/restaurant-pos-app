"use client";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function SelectStatus() {
  return (
    <FormControl fullWidth size="small">
      <InputLabel>Status</InputLabel>
      <Select label="Status">
        <MenuItem value={"all"}>All</MenuItem>
        <MenuItem value={"active"}>Active</MenuItem>
        <MenuItem value={"inactive"}>Inactive</MenuItem>
      </Select>
    </FormControl>
  );
}
