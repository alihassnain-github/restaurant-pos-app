'use client';

import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Card from '@mui/material/Card';
import Select from '@mui/material/Select';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function AddAdjustmentForm() {
  return (
    <Card component={Paper} variant="outlined" sx={{ mt: 2, p: 1 }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <FormControl size="small" fullWidth>
              <InputLabel>Ingredient</InputLabel>
              <Select label="Ingredient">
                <MenuItem value="g">All-Purpose Flour (kg)</MenuItem>
                <MenuItem value="ml">Cooking Oil (liters)</MenuItem>
                <MenuItem value="none">Chicken Breast (kg)</MenuItem>
                <MenuItem value="none">Fresh Basil (grams)</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <FormControl size="small" fullWidth>
              <InputLabel>Reason</InputLabel>
              <Select label="Reason">
                <MenuItem value="wastage">Wastage</MenuItem>
                <MenuItem value="spoilage">Spoilage</MenuItem>
                <MenuItem value="theft">Theft</MenuItem>
                <MenuItem value="staff-use">Staff Use</MenuItem>
                <MenuItem value="other">Other</MenuItem>
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
            <Button variant="contained">Add Adjustment</Button>
          </Box>
        </Grid>
      </CardContent>
    </Card>
  );
}
