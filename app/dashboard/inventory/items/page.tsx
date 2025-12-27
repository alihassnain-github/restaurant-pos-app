import Breadcrumbs from '@/components/breadcrumbs';
import Search from '@/components/search';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SelectStatus from '@/components/status';
import { CreateItem } from '@/components/ui/inventory/buttons';
import ItemsTable from '@/components/ui/inventory/items-table';

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
                            label: 'Items',
                            href: '/dashboard/inventory/items',
                            active: true,
                        },
                    ]}
                />
                <CreateItem />
            </Box>
            <Box sx={{ mb: 2 }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Search placeholder="Search by Name" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <SelectStatus />
                    </Grid>
                </Grid>
            </Box>
            <ItemsTable />
        </>
    );
}
