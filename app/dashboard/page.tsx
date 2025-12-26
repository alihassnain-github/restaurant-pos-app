import CardWrapper from '@/components/ui/dashboard/card';
import ExpenseChart from '@/components/ui/dashboard/expense-chart';
import OrdersChart from '@/components/ui/dashboard/orders-chart';
import RecentOrders from '@/components/ui/dashboard/recent-orders';
import RevenueChart from '@/components/ui/dashboard/revenue-chart';
import TopSellingItems from '@/components/ui/dashboard/top-selling-items';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Page() {
  return (
    <>
      <Typography variant="h5" component="h5" sx={{ mb: 2 }}>
        Dashboard
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
      <RevenueChart />
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
        <OrdersChart />
        <ExpenseChart />
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
        <RecentOrders />
        <TopSellingItems />
      </Box>
    </>
  );
}
