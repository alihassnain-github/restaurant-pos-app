import { CreateInvoice } from '@/components/ui/invoices/buttons';
import Box from '@mui/material/Box';
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
          Invoices
        </Typography>
        <CreateInvoice />
      </Box>
    </>
  );
}
