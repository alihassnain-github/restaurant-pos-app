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
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Typography } from '@mui/material';

export default function CreateInvoiceForm() {

    return (
        <Card component={Paper} variant="outlined" sx={{ mt: 2, p: 1 }}>
            <CardContent>
                <Grid container spacing={3}>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControl size="small" fullWidth>
                            <InputLabel>Supplier</InputLabel>
                            <Select label="Supplier">
                                <MenuItem value="abc_foods">ABC Foods Inc.</MenuItem>
                                <MenuItem value="fresh_produce">Fresh Produce Co.</MenuItem>
                                <MenuItem value="quality_meats">Quality Meats & Poultry</MenuItem>
                                <MenuItem value="dairy_suppliers">Dairy Suppliers Plus</MenuItem>
                                <MenuItem value="spice_house">Spice House & Seasonings</MenuItem>
                                <MenuItem value="beverages">Global Beverages Ltd.</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth label="Invoice Number" variant="outlined" size="small" />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <DatePicker
                            label="Invoice Date"
                            slotProps={{
                                textField: {
                                    fullWidth: true,
                                    size: 'small',
                                },
                            }}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <DatePicker
                            label="Due Date"
                            slotProps={{
                                textField: {
                                    fullWidth: true,
                                    size: 'small',
                                },
                            }}
                        />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControl size="small" fullWidth>
                            <InputLabel>Payment Method</InputLabel>
                            <Select label="Payment Method">
                                <MenuItem value="cash">Cash</MenuItem>
                                <MenuItem value="credit_card">Credit Card</MenuItem>
                                <MenuItem value="debit_card">Debit Card</MenuItem>
                                <MenuItem value="bank_transfer">Bank Transfer</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControl size="small" fullWidth>
                            <InputLabel>Payment Status</InputLabel>
                            <Select label="Payment Status">
                                <MenuItem value="pending">Pending</MenuItem>
                                <MenuItem value="in_progress">In Progress</MenuItem>
                                <MenuItem value="paid">Paid</MenuItem>
                                <MenuItem value="unpaid">Unpaid</MenuItem>
                            </Select>
                        </FormControl>
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

                </Grid>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '140px 160px',
                        justifyContent: 'end',
                        alignItems: 'center',
                        gap: 1,
                        mt: 1,
                    }}
                >
                    <Typography variant="h6" align="right">
                        Sub Total:
                    </Typography>
                    <Typography sx={{ fontSize: 18 }}>
                        $0.00
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '140px 160px',
                        justifyContent: 'end',
                        alignItems: 'center',
                        gap: 1,
                        mt: 1,
                    }}
                >
                    <Typography variant="h6" align="right">
                        Total Amount:
                    </Typography>
                    <TextField
                        type="number"
                        size="small"
                        fullWidth
                    />
                </Box>

                <Box
                    component="div"
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        width: '100%',
                        mt: 4,
                    }}
                >
                    <Button variant="contained">Create Invoice</Button>
                </Box>
            </CardContent>
        </Card>
    );
}
