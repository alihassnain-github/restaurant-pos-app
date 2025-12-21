import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CreateItem } from "@/components/ui/items/buttons";
import ItemsTable from "@/components/ui/items/table";
import Search from "@/components/search";

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
          Items
        </Typography>
        <CreateItem />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Search placeholder="Search by Name" />
          </Grid>
        </Grid>
      </Box>
      <ItemsTable />
    </>
  );
}
