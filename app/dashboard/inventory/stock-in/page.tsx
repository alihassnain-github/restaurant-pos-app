import Breadcrumbs from '@/components/breadcrumbs';
import Search from '@/components/search';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { AddStock } from '@/components/ui/inventory/buttons';
import StockTable from '@/components/ui/inventory/stock-table';

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
                <Breadcrumbs
                    breadcrumbs={[
                        { label: 'Inventory', href: '/dashboard/inventory', active: false },
                        {
                            label: 'Stock In',
                            href: '/dashboard/inventory/stock-in',
                            active: true,
                        },
                    ]}
                />
                <AddStock />
            </Box>
            <Box sx={{ mb: 2 }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Search placeholder="Search by Name" />
                    </Grid>
                </Grid>
            </Box>
            <StockTable />
        </>
    );
}
