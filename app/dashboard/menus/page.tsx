import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Search from "@/components/search";
import { CreateMenu } from "@/components/ui/menus/buttons";
import SelectStatus from "@/components/status";

export default function Page() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          mb: 2,
        }}
      >
        <Typography variant="h5" component="h5" sx={{ mb: 2 }}>
          Menus
        </Typography>
        <CreateMenu />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Search placeholder="Search by Name" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <SelectStatus />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
