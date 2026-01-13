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
import Autocomplete from '@mui/material/Autocomplete';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const categories = ['Utilities', 'Rent', 'Supplies', 'Travel', 'Meals', 'Miscellaneous'];

export default function EditExpenseForm() {

    return (
        <Card component={Paper} variant="outlined" sx={{ mt: 2, p: 1 }}>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth label="Title" variant="outlined" size="small" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Autocomplete
                            freeSolo
                            options={categories}
                            renderInput={(params) => <TextField {...params} fullWidth label="Category" variant="outlined" size="small" />}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth label="Amount" variant="outlined" size="small" type='number' />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControl size="small" fullWidth>
                            <InputLabel>Payment Method</InputLabel>
                            <Select label="Payment Method">
                                <MenuItem value="cash">Cash</MenuItem>
                                <MenuItem value="credit_card">Card</MenuItem>
                                <MenuItem value="bank_transfer">Bank Transfer</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <DatePicker
                            label="Date"
                            slotProps={{
                                textField: {
                                    fullWidth: true,
                                    size: 'small',
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
                        <Button variant="contained">Edit Expense</Button>
                    </Box>
                </Grid>
            </CardContent>
        </Card>
    );
}
