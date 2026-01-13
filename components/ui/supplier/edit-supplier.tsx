'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { MuiTelInput } from 'mui-tel-input';
import { useState } from 'react';

export default function EditSupplierForm() {
    const [value, setValue] = useState('');

    return (
        <Card component={Paper} variant="outlined" sx={{ mt: 2, p: 1 }}>
            <CardContent>
                <Grid container spacing={3}>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth label="Supplier Name" variant="outlined" size="small" />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth label="Contact Person" variant="outlined" size="small" />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth label="Email" variant="outlined" type='email' size="small" />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <MuiTelInput value={value} onChange={(e) => setValue(e)} fullWidth label="Phone Number" variant="outlined" size="small" />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label="Address"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label="Notes"
                            variant="outlined"
                            size="small"
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
                        <Button variant="contained">Edit Supplier</Button>
                    </Box>
                </Grid>
            </CardContent>
        </Card>
    );
}
