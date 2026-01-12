'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { MuiTelInput } from 'mui-tel-input'
import ImageUpload from '@/components/image-upload';
import { useState } from 'react';
import { generatePassword } from '@/app/lib/utils';

export default function CreateUserForm() {

    const [value, setValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Card component={Paper} variant="outlined" sx={{ mt: 2, p: 1 }}>
            <CardContent>
                <Grid container spacing={3}>

                    <ImageUpload />

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth label="First Name" variant="outlined" size="small" />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth label="Last Name" variant="outlined" size="small" />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth label="Email" variant="outlined" type='email' size="small" />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <MuiTelInput value={value} onChange={(e) => setValue(e)} fullWidth label="Phone Number" variant="outlined" size="small" />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControl size="small" fullWidth>
                            <InputLabel>Role</InputLabel>
                            <Select label="Role">
                                <MenuItem value="super_admin">Super Admin</MenuItem>
                                <MenuItem value="admin">Admin</MenuItem>
                                <MenuItem value="manager">Manager</MenuItem>
                                <MenuItem value="cashier">Cashier</MenuItem>
                                <MenuItem value="waiter">Waiter</MenuItem>
                                <MenuItem value="kitchen">Kitchen Staff</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControl size="small" fullWidth>
                            <InputLabel>Status</InputLabel>
                            <Select label="Status">
                                <MenuItem value="active">Active</MenuItem>
                                <MenuItem value="inactive">Inactive</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            fullWidth
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            size="small"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                                            onClick={() => setShowPassword((s) => !s)}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff fontSize='small' /> : <Visibility fontSize='small' />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Button variant="text" onClick={() => generatePassword(12)}>Generate</Button>
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
                        <Button variant="contained">Create User</Button>
                    </Box>
                </Grid>
            </CardContent>
        </Card>
    );
}
