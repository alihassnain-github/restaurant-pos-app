'use client';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { formatDate } from '@/app/lib/utils';

type Item = {
    itemId: string;
    name: string;
    supplier: string;
    quantity: number;
    cost: number;
    date: Date;
    notes: string;
};

export const items: Item[] = [
    {
        itemId: 'STK-001',
        name: 'All-Purpose Flour',
        supplier: 'Global Mills Inc.',
        quantity: 50,
        cost: 1200,
        date: new Date('2024-12-01T10:00:00'),
        notes: 'Bulk purchase for bakery'
    },
    {
        itemId: 'STK-002',
        name: 'Whole Milk',
        supplier: 'Dairy Fresh Co.',
        quantity: 24,
        cost: 480,
        date: new Date('2024-12-01T10:15:00'),
        notes: 'Short shelf life - use first'
    },
    {
        itemId: 'STK-003',
        name: 'Tomato Sauce',
        supplier: 'Italian Imports',
        quantity: 15,
        cost: 900,
        date: new Date('2024-12-02T09:30:00'),
        notes: 'Premium organic sauce'
    },
    {
        itemId: 'STK-004',
        name: 'Mozzarella Cheese',
        supplier: 'Artisan Dairy',
        quantity: 10,
        cost: 2500,
        date: new Date('2024-12-02T11:45:00'),
        notes: 'Keep refrigerated at 4°C'
    },
    {
        itemId: 'STK-005',
        name: 'Chicken Breast',
        supplier: 'Poultry Farm Ltd.',
        quantity: 30,
        cost: 5400,
        date: new Date('2024-12-03T08:20:00'),
        notes: 'Fresh delivery, vacuum packed'
    },
    {
        itemId: 'STK-006',
        name: 'Cooking Oil',
        supplier: 'Eco Oils',
        quantity: 40,
        cost: 3200,
        date: new Date('2024-12-03T14:30:00'),
        notes: 'High smoke point oil'
    },
    {
        itemId: 'STK-007',
        name: 'Fresh Basil',
        supplier: 'Green Leaf Herbs',
        quantity: 2,
        cost: 150,
        date: new Date('2024-12-04T12:00:00'),
        notes: 'Fragile - handle with care'
    },
    {
        itemId: 'STK-008',
        name: 'Yellow Onions',
        supplier: 'Veggie Hub',
        quantity: 25,
        cost: 350,
        date: new Date('2024-12-04T15:10:00'),
        notes: 'Store in a cool, dry place'
    }
];

export default function StockTable() {

    return (
        <>
            <TableContainer component={Paper}>
                <Table
                    stickyHeader
                    aria-label="orders table"
                    sx={{ textWrap: 'nowrap' }}
                >
                    <TableHead sx={{ backgroundColor: 'action.selected' }}>
                        <TableRow>
                            <TableCell>Ingredient</TableCell>
                            <TableCell>Supplier</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Cost</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Notes</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map(
                            ({
                                itemId,
                                name,
                                supplier,
                                quantity,
                                cost,
                                date,
                                notes,
                            }) => (
                                <TableRow
                                    hover
                                    key={itemId}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {name}
                                    </TableCell>
                                    <TableCell>{supplier}</TableCell>
                                    <TableCell align="right">{quantity}</TableCell>
                                    <TableCell align="right">{cost}</TableCell>
                                    <TableCell>{formatDate(date)}</TableCell>
                                    <TableCell>{notes}</TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
