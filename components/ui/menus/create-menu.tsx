'use client';

import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import OutlinedInput from '@mui/material/OutlinedInput';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Chip from '@mui/material/Chip';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import { useState } from 'react';
import ProductModal from './product-modal';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function CreateMenuForm() {
  const [availability, SetAvailability] = useState<number[]>([]);

  const addAvailability = () => {
    SetAvailability((prev) => [...prev, Date.now()]);
  };

  const removeAvailability = (id: number) => {
    SetAvailability((prev) =>
      prev.filter((availabilityId) => availabilityId !== id)
    );
  };

  return (
    <Card component={Paper} variant="outlined" sx={{ mt: 2, p: 1 }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField fullWidth label="Name" variant="outlined" size="small" />
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
              multiline
              rows={4}
              label="Description"
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
            <ProductModal />
          </Box>

          <Box
            component="div"
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%',
              mt: 1,
            }}
          >
            <Button
              onClick={addAvailability}
              variant="outlined"
              size="small"
              color="info"
              startIcon={<MoreTimeIcon />}
            >
              Add Availability
            </Button>
          </Box>

          {availability.length > 0 && (
            <TableContainer component={Paper}>
              <Table aria-label="availability table">
                <TableHead sx={{ backgroundColor: 'action.selected' }}>
                  <TableRow>
                    <TableCell>Days</TableCell>
                    <TableCell>Start Time</TableCell>
                    <TableCell>End Time</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {availability.map((id) => (
                    <TableRow
                      key={id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <FormControl
                          size="small"
                          sx={{ width: '100%', minWidth: 200 }}
                        >
                          <InputLabel>Days</InputLabel>
                          <Select
                            defaultValue={[]}
                            multiple
                            input={<OutlinedInput label="Days" />}
                            renderValue={(selected) => (
                              <Box
                                sx={{
                                  display: 'flex',
                                  flexWrap: 'wrap',
                                  gap: 0.5,
                                }}
                              >
                                {selected.map((value) => (
                                  <Chip
                                    key={value}
                                    label={value}
                                    size="small"
                                  />
                                ))}
                              </Box>
                            )}
                          >
                            {days.map((day) => (
                              <MenuItem key={day} value={day}>
                                {day}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell>
                        <TimePicker
                          label="Start Time"
                          slotProps={{
                            textField: {
                              size: 'small',
                              fullWidth: true,
                            },
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <TimePicker
                          label="End Time"
                          slotProps={{
                            textField: {
                              size: 'small',
                              fullWidth: true,
                            },
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => removeAvailability(id)}
                          aria-label="delete"
                          color="error"
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          <Box
            component="div"
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%',
              mt: 1,
            }}
          >
            <Button variant="contained">Create Menu</Button>
          </Box>
        </Grid>
      </CardContent>
    </Card>
  );
}
