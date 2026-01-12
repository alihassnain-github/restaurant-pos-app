'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function InvoiceSettings() {
    return (
        <Card component={Paper} variant="outlined" sx={{ mt: 2 }}>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth label="Inv Prefix" variant="outlined" size="small" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth label="Business Tax ID (NTN)" variant="outlined" size="small" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth label="Tax Type / Name" variant="outlined" placeholder='e.g., VAT, GST' size="small" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth label="Tax Rate (%)" variant="outlined" type='number' size="small" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            label="Thank You Message"
                            placeholder="Thank you for shopping! Please come again."
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