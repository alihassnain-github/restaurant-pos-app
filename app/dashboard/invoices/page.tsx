import DateFilter from '@/components/date-filter';
import Search from '@/components/search';
import { CreateInvoice } from '@/components/ui/invoices/buttons';
import PaymentStatus from '@/components/ui/invoices/payment-status';
import InvoiceTable from '@/components/ui/invoices/table';
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
        <Typography variant="h5" component="h5">
          Invoices
        </Typography>
        <CreateInvoice />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Search placeholder="Search by Invoice Id Or Supplier" />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <PaymentStatus />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <DateFilter futureDate={false} placeholder="Select Date" />
          </Grid>
        </Grid>
      </Box>
      <InvoiceTable />
    </>
  );
}
