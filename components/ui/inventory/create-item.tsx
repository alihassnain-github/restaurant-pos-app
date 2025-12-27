'use client';

import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function CreateInventoryItemForm() {
    return (
        <Card component={Paper} variant="outlined" sx={{ mt: 2, p: 1 }}>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField fullWidth label="Ingredient Name" variant="outlined" size="small" />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControl fullWidth size="small">
                            <InputLabel>Status</InputLabel>
                            <Select label="Status">
                                <MenuItem value={'active'}>Active</MenuItem>
                                <MenuItem value={'inactive'}>Inactive</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControl size="small" fullWidth>
                            <InputLabel>Unit</InputLabel>
                            <Select label="Unit">
                                <MenuItem value="g">Gram (g)</MenuItem>
                                <MenuItem value="ml">Milliliter (ml)</MenuItem>
                                <MenuItem value="none">None</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                            fullWidth
                            size="small"
                            label="Minimum Stock (optional)"
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

                    <Box
                        component="div"
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            width: '100%',
                            mt: 1,
                        }}
                    >
                        <Button variant="contained">Create Item</Button>
                    </Box>
                </Grid>
            </CardContent>
        </Card>
    );
}
