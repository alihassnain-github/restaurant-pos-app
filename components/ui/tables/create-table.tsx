"use client";

import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const areas = [
  { id: 1, name: "Main Hall", prefix: "M" },
  { id: 2, name: "Outdoor", prefix: "O" },
  { id: 3, name: "VIP Lounge", prefix: "V" },
  { id: 4, name: "Terrace", prefix: "T" },
];

export default function CreateTableForm() {
  return (
    <Card component={Paper} variant="outlined" sx={{ mt: 2, p: 1 }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Autocomplete
              freeSolo
              options={areas.map((area) => area.name)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  label="Area / Site"
                  variant="outlined"
                  fullWidth
                  placeholder="Select Area"
                />
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Table Number"
              variant="outlined"
              size="small"
              defaultValue="1001"
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
              helperText="Auto-generated ID"
            />
          </Grid>

          <Grid size={12}>
            <TextField
              fullWidth
              size="small"
              label="Capacity"
              variant="outlined"
              type="number"
              placeholder="Enter Capacity"
              slotProps={{
                htmlInput: {
                  min: 1,
                  step: 1,
                },
              }}
            />
          </Grid>

          <FormControlLabel
            control={<Switch defaultChecked color="primary" />}
            label="In Service"
            sx={{ userSelect: "none" }}
          />

          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              mt: 1,
            }}
          >
            <Button variant="contained">Create Table</Button>
          </Box>
        </Grid>
      </CardContent>
    </Card>
  );
}
