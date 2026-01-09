'use client';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

const reasons = ['Wastage', 'Spoilage', 'Theft', 'Staff Use', 'Other'];

export default function ReasonSelect() {
  const [reason, setReason] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof reason>) => {
    const {
      target: { value },
    } = event;
    setReason(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <FormControl fullWidth size="small">
        <InputLabel>Reason</InputLabel>
        <Select
          multiple
          value={reason}
          onChange={handleChange}
          input={<OutlinedInput label="Reason" />}
        >
          {reasons.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
