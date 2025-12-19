import Search from "@/components/search";
import OrdersTable from "@/components/ui/orders/table";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SelectStatus from "@/components/ui/orders/status";
import DateFilter from "@/components/date-filter";

export default function Page() {
  return (
    <>
      <Typography variant="h5" component="h5" sx={{ mb: 2 }}>
        Orders
      </Typography>
      <Box component={Paper} sx={{ p: 2, mb: 2, display: "flex" }}>
        <Search placeholder="Search by Order ID" />
        <SelectStatus />
        <DateFilter futureDate={false} mode="single" placeholder="Select Date" />
      </Box>
      <OrdersTable />
    </>
  );
}
