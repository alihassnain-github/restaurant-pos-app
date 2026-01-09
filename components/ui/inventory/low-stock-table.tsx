import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import NextLink from 'next/link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { StatusChip } from '@/components/status-chip';

type Item = {
    id: string;
    ingredient: string;
    currentStock: number;
    minStock: number;
    unit: string;
    status: 'low' | 'critical';
};

export const items: Item[] = [
    {
        id: 'ING-001',
        ingredient: 'All-Purpose Flour',
        currentStock: 12,
        minStock: 50,
        unit: 'kg',
        status: 'critical',
    },
    {
        id: 'ING-002',
        ingredient: 'Whole Milk',
        currentStock: 18,
        minStock: 20,
        unit: 'Liters',
        status: 'low',
    },
    {
        id: 'ING-003',
        ingredient: 'Tomato Sauce',
        currentStock: 5,
        minStock: 15,
        unit: 'kg',
        status: 'critical',
    },
    {
        id: 'ING-004',
        ingredient: 'Mozzarella Cheese',
        currentStock: 8,
        minStock: 10,
        unit: 'kg',
        status: 'low',
    },
    {
        id: 'ING-005',
        ingredient: 'Chicken Breast',
        currentStock: 22,
        minStock: 30,
        unit: 'kg',
        status: 'low',
    },
    {
        id: 'ING-006',
        ingredient: 'Cooking Oil',
        currentStock: 10,
        minStock: 40,
        unit: 'Liters',
        status: 'critical',
    },
    {
        id: 'ING-007',
        ingredient: 'Fresh Basil',
        currentStock: 150,
        minStock: 500,
        unit: 'Grams',
        status: 'critical',
    },
    {
        id: 'ING-008',
        ingredient: 'Yellow Onions',
        currentStock: 20,
        minStock: 25,
        unit: 'kg',
        status: 'low',
    },
];

export default function LowStockItemsTable() {

    return (
        <Card variant="outlined" sx={{ p: 1 }}>
            <CardHeader
                title={
                    <Typography variant="h6" component="h6">
                        Low Stock Items
                    </Typography>
                }
                action={
                    <NextLink href="/dashboard/inventory/items">
                        <Button size="small">View All</Button>
                    </NextLink>
                }
            />
            <CardContent sx={{ pt: 0 }}>
                <TableContainer component={Paper}>
                    <Table
                        stickyHeader
                        aria-label="orders table"
                        sx={{ textWrap: 'nowrap' }}
                    >
                        <TableHead sx={{ backgroundColor: 'action.selected' }}>
                            <TableRow>
                                <TableCell>Ingredient Name</TableCell>
                                <TableCell align="right">Current Stock</TableCell>
                                <TableCell align="right">Min Stock</TableCell>
                                <TableCell>Unit</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map(
                                ({ id, ingredient, currentStock, minStock, unit, status }) => (
                                    <TableRow
                                        hover
                                        key={id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {ingredient}
                                        </TableCell>
                                        <TableCell align="right">{currentStock}</TableCell>
                                        <TableCell align="right">{minStock}</TableCell>
                                        <TableCell>{unit}</TableCell>
                                        <TableCell>
                                            <StatusChip status={status} />
                                        </TableCell>
                                    </TableRow>
                                )
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
}
