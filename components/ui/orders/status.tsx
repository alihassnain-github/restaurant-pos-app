"use client";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

const orderStatus = ["pending", "preparing", "ready", "paid", "cancelled"];

export default function SelectStatus() {
  const [status, setStatus] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof status>) => {
    const {
      target: { value },
    } = event;
    setStatus(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl fullWidth size="small">
        <InputLabel>Order Status</InputLabel>
        <Select
          multiple
          value={status}
          onChange={handleChange}
          input={<OutlinedInput label="Order Status" />}
        >
          {orderStatus.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
