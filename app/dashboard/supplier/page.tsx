import Search from '@/components/search';
import { AddSupplier } from '@/components/ui/supplier/buttons';
import SupplierTable from '@/components/ui/supplier/table';
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
                    Suppliers
                </Typography>
                <AddSupplier />
            </Box>
            <Box sx={{ mb: 2 }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Search placeholder="Search supplier..." />
                    </Grid>
                </Grid>
            </Box>
            <SupplierTable />
        </>
    );
}
