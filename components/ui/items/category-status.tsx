'use client';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

const categories = ['Appetizers', 'Main Course', 'Desserts', 'Beverages'];

export default function CategorySelect() {
  const [category, setCategory] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof category>) => {
    const {
      target: { value },
    } = event;
    setCategory(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <FormControl fullWidth size="small">
        <InputLabel>Category</InputLabel>
        <Select
          multiple
          value={category}
          onChange={handleChange}
          input={<OutlinedInput label="Category" />}
        >
          {categories.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
