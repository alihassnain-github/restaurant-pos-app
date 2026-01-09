import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardWrapper from '@/components/ui/inventory/card';
import LowStockItemsTable from '@/components/ui/inventory/low-stock-table';
import RecentActivityTable from '@/components/ui/inventory/recent-activity-table';
import InventoryTable from '@/components/ui/inventory/inventory-table';
import Search from '@/components/search';
import SelectStockStatus from '@/components/ui/inventory/status-select';

export default function Page() {
  return (
    <>
      <Typography variant="h5" component="h5" sx={{ mb: 2 }}>
        Inventory
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
          mb: 2,
        }}
      >
        <CardWrapper />
      </Box>

      <Box sx={{ mb: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Search placeholder="Search by Ingredient" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <SelectStockStatus />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{ mb: 2 }}
      >
        <InventoryTable />
      </Box>
      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: {
            xs: '1fr',
            lg: 'repeat(2, 1fr)',
          },
          mb: 2,
        }}
      >

        <LowStockItemsTable />
        <RecentActivityTable />
      </Box>
    </>
  );
}
