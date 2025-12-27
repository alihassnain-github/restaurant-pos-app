'use client';

import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Autocomplete from '@mui/material/Autocomplete';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const items = [
    { id: 1, name: 'All-Purpose Flour (kg)' },
    { id: 2, name: 'Cooking Oil (liters)' },
    { id: 3, name: 'Chicken Breast (kg)' },
    { id: 4, name: 'Fresh Basil (grams)' },
];

export default function AddStockForm() {
    return (
        <Card component={Paper} variant="outlined" sx={{ mt: 2, p: 1 }}>
            <CardContent>
                <Grid container spacing={3}>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Autocomplete
                            freeSolo
                            options={items.map((item) => item.name)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    size="small"
                                    label="Ingredient"
                                    variant="outlined"
                                    fullWidth
                                />
                            )}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <DatePicker label="Date" slotProps={{
                            textField: {
                                fullWidth: true,
                                size: "small",
                            }
                        }} />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth label="Supplier" variant="outlined" size="small" />
                    </Grid>


                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            fullWidth
                            size="small"
                            label="Quantity"
                            variant="outlined"
                            type="number"
                            slotProps={{
                                htmlInput: {
                                    min: 1,
                                    step: 1,
                                },
                            }}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            fullWidth
                            size="small"
                            label="Cost"
                            variant="outlined"
                            type="number"
                            slotProps={{
                                htmlInput: {
                                    min: 1,
                                    step: 1,
                                },
                            }}
                        />
                    </Grid>
                    
                    <Grid size={{ xs: 12, sm: 6 }}></Grid>

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
                        <Button variant="contained">Add Stock</Button>
                    </Box>
                </Grid>
            </CardContent>
        </Card>
    );
}
