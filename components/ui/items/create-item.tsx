"use client";

import Table from "@mui/material/Table";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import TableBody from "@mui/material/TableBody";
import DeleteIcon from "@mui/icons-material/Delete";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ImageUpload from "@/components/image-upload";
import { useState } from "react";

const categories = [
  { id: 1, name: "Appetizers" },
  { id: 2, name: "Main Course" },
  { id: 3, name: "Desserts" },
  { id: 4, name: "Beverages" },
];

export default function CreateItemForm() {
  const [variants, setVariants] = useState<number[]>([]);
  const [unit, setUnit] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setUnit(event.target.value as string);
  };

  const addVariant = () => {
    setVariants((prev) => [...prev, Date.now()]);
  };

  const removeVariant = (id: number) => {
    setVariants((prev) => prev.filter((variantId) => variantId !== id));
  };

  return (
    <Card component={Paper} variant="outlined" sx={{ mt: 2, p: 1 }}>
      <CardContent>
        <Grid container spacing={3}>
          <ImageUpload />

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField fullWidth label="Name" variant="outlined" size="small" />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Autocomplete
              freeSolo
              options={categories.map((category) => category.name)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  label="Category"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
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
              size="small"
              label="Price"
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
            <FormControl size="small" fullWidth>
              <InputLabel>Unit</InputLabel>
              <Select label="Unit" value={unit} onChange={handleChange}>
                <MenuItem value="g">Gram (g)</MenuItem>
                <MenuItem value="ml">Milliliter (ml)</MenuItem>
                <MenuItem value="none">None</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              mt: 1,
            }}
          >
            <Button
              variant="outlined"
              onClick={addVariant}
              size="small"
              color="info"
              startIcon={<AddIcon />}
            >
              Add Variant
            </Button>
          </Box>

          {variants.length > 0 && (
            <TableContainer component={Paper}>
              <Table aria-label="variant table">
                <TableHead sx={{ backgroundColor: "action.selected" }}>
                  <TableRow>
                    <TableCell>
                      {unit === "none" ? "Variant" : "Quantity"}
                    </TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {variants.map((id) => (
                    <TableRow
                      key={id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <TextField
                          fullWidth
                          label="Name"
                          variant="outlined"
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          fullWidth
                          size="small"
                          label="Price"
                          variant="outlined"
                          type="number"
                          slotProps={{
                            htmlInput: {
                              min: 1,
                              step: 1,
                            },
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Switch defaultChecked />
                      </TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => removeVariant(id)}
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
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
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
