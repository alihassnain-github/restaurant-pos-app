'use client';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import InvoiceSettings from './invoice-settings';
import CompanySettings from './company-settings';

export default function Settings() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Settings" />
                    <Tab label="Invoice Settings" />
                </Tabs>
            </Box>
            <div role='tabpanel' hidden={value !== 0}>
                <CompanySettings />
            </div>
            <div role='tabpanel' hidden={value !== 1}>
                <InvoiceSettings />
            </div>
        </Box>
    );
}
