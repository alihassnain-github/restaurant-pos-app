import Search from "@/components/search";
import OrdersTable from "@/components/ui/orders/table";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SelectStatus from "@/components/ui/orders/status";
import DateFilter from "@/components/date-filter";
import Grid from "@mui/material/Grid";

export default function Page() {
  return (
    <>
      <Typography variant="h5" component="h5" sx={{ mb: 2 }}>
        Orders
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Search placeholder="Search by Order ID" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <SelectStatus />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <DateFilter futureDate={false} placeholder="Select Date" />
          </Grid>
        </Grid>
      </Box>
      <OrdersTable />
    </>
  );
}
