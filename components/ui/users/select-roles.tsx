'use client';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

const roles = ['super_admin', 'admin', 'manager', 'cashier', 'waiter', 'kitchen'];

export default function SelectRoles() {
    const [role, setRole] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof role>) => {
        const {
            target: { value },
        } = event;
        setRole(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value
        );
    };

    return (
        <div>
            <FormControl fullWidth size="small">
                <InputLabel>Select Roles</InputLabel>
                <Select
                    multiple
                    value={role}
                    onChange={handleChange}
                    input={<OutlinedInput label="Select Roles" />}
                >
                    {roles.map((name) => (
                        <MenuItem key={name} value={name}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
