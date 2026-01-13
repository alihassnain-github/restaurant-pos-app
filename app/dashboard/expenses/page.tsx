import DateFilter from '@/components/date-filter';
import Search from '@/components/search';
import ExpenseChart from '@/components/ui/dashboard/expense-chart';
import ExpenseOvertimeChart from '@/components/ui/dashboard/expenses-overtime';
import { AddExpense } from '@/components/ui/expenses/button';
import ExpenseTable from '@/components/ui/expenses/table';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Page() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start',
          mb: 2,
        }}
      >
        <Typography variant="h5" component="h5" sx={{ mb: 2 }}>
          Expenses
        </Typography>
        <AddExpense />
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
        <ExpenseChart />
        <ExpenseOvertimeChart />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Search placeholder="Search by Title" />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <DateFilter futureDate={false} placeholder="Select Date" />
          </Grid>
        </Grid>
      </Box>
      <ExpenseTable />
    </>
  );
}
