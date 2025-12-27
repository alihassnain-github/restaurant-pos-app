'use client';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { formatDate } from '@/app/lib/utils';
import { DeleteItem, EditItem } from './buttons';
import { useState } from 'react';
import { StatusChip } from '@/components/status-chip';
import DeleteItemModal from './delete-modal';

type Item = {
    itemId: string;
    name: string;
    unit: string;
    minStock: number;
    status: 'active' | 'inactive';
    createdAt: Date;
};

export const items: Item[] = [
    {
        itemId: 'ING-001',
        name: 'All-Purpose Flour',
        unit: 'kg',
        minStock: 50,
        status: 'active',
        createdAt: new Date('2024-12-01T10:00:00'),
    },
    {
        itemId: 'ING-002',
        name: 'Whole Milk',
        unit: 'Liters',
        minStock: 20,
        status: 'active',
        createdAt: new Date('2024-12-01T10:15:00'),
    },
    {
        itemId: 'ING-003',
        name: 'Tomato Sauce',
        unit: 'kg',
        minStock: 15,
        status: 'active',
        createdAt: new Date('2024-12-02T09:30:00'),
    },
    {
        itemId: 'ING-004',
        name: 'Mozzarella Cheese',
        unit: 'kg',
        minStock: 10,
        status: 'active',
        createdAt: new Date('2024-12-02T11:45:00'),
    },
    {
        itemId: 'ING-005',
        name: 'Chicken Breast',
        unit: 'kg',
        minStock: 30,
        status: 'active',
        createdAt: new Date('2024-12-03T08:20:00'),
    },
    {
        itemId: 'ING-006',
        name: 'Cooking Oil',
        unit: 'Liters',
        minStock: 40,
        status: 'active',
        createdAt: new Date('2024-12-03T14:30:00'),
    },
    {
        itemId: 'ING-007',
        name: 'Fresh Basil',
        unit: 'Grams',
        minStock: 500,
        status: 'active',
        createdAt: new Date('2024-12-04T12:00:00'),
    },
    {
        itemId: 'ING-008',
        name: 'Yellow Onions',
        unit: 'kg',
        minStock: 25,
        status: 'inactive',
        createdAt: new Date('2024-12-04T15:10:00'),
    },
];

export default function ItemsTable() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                            <TableCell>Ingredient Name</TableCell>
                            <TableCell>Unit</TableCell>
                            <TableCell align="right">Min Stock</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Created At</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map(
                            ({
                                itemId,
                                name,
                                unit,
                                minStock,
                                status,
                                createdAt,
                            }) => (
                                <TableRow
                                    hover
                                    key={itemId}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {name}
                                    </TableCell>
                                    <TableCell>{unit}</TableCell>
                                    <TableCell align="right">{minStock}</TableCell>
                                    <TableCell>
                                        <StatusChip status={status} />
                                    </TableCell>
                                    <TableCell>{formatDate(createdAt)}</TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={1}>
                                            <EditItem />
                                            <DeleteItem handleOpen={handleOpen} />
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <DeleteItemModal open={open} handleClose={handleClose} />
        </>
    );
}
