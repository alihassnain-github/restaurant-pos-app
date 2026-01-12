'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ImageUpload from '@/components/image-upload';
import { MuiTelInput } from 'mui-tel-input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function CompanySettings() {

    const [value, setValue] = useState('');

    return (
        <Card component={Paper} variant="outlined" sx={{ mt: 2 }}>
            <CardContent>
                <Grid container spacing={3}>
                    <ImageUpload />
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth label="Shop Name" variant="outlined" size="small" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControl size="small" fullWidth>
                            <InputLabel>Currency</InputLabel>
                            <Select label="Currency">
                                <MenuItem value="PKR">Pakistani Rupee (PKR)</MenuItem>
                                <MenuItem value="INR">Indian Rupee (INR)</MenuItem>
                                <MenuItem value="CAD">Canadian Dollar (CAD)</MenuItem>
                                <MenuItem value="USD">United States Dollar (USD)</MenuItem>
                                <MenuItem value="EUR">Euro (EUR)</MenuItem>
                                <MenuItem value="JPY">Japanese Yen (JPY)</MenuItem>
                                <MenuItem value="GBP">British Pound Sterling (GBP)</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth label="Email" variant="outlined" type='email' size="small" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <MuiTelInput value={value} onChange={(e) => setValue(e)} fullWidth label="Phone Number" variant="outlined" size="small" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            label="Shop Address"
                            placeholder="Enter your shop address"
                            multiline
                            rows={3}
                            fullWidth
                        />
                    </Grid>
                    <Box
                        component="div"
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            width: '100%',
                            mt: 1,
                        }}
                    >
                        <Button variant="contained">Save Changes</Button>
                    </Box>
                </Grid>
            </CardContent>
        </Card>
    )
}