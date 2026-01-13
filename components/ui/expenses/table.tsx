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
import { useState } from 'react';
import { EditExpense, DeleteExpense } from './button';
import DeleteModal from './delete-modal';
import { StatusChip } from '@/components/status-chip';

type Expense = {
    id: string;
    title: string;
    category: string;
    amount: number;
    paymentMethod: "cash" | "card" | "wallet";
    date: Date;
};

export const expenses: Expense[] = [
    {
        id: '1',
        title: 'Office Supplies',
        category: 'Supplies',
        amount: 150.00,
        paymentMethod: 'card',
        date: new Date('2024-12-01T10:00:00'),
    },
    {
        id: '2',
        title: 'Utilities - Electricity',
        category: 'Utilities',
        amount: 500.00,
        paymentMethod: 'card',
        date: new Date('2024-12-01T10:05:00'),
    },
    {
        id: '3',
        title: 'Food Ingredients',
        category: 'Supplies',
        amount: 800.50,
        paymentMethod: 'cash',
        date: new Date('2024-12-01T11:00:00'),
    },
    {
        id: '4',
        title: 'Equipment Maintenance',
        category: 'Maintenance',
        amount: 350.00,
        paymentMethod: 'card',
        date: new Date('2024-12-02T09:30:00'),
    },
    {
        id: '5',
        title: 'Staff Training',
        category: 'Training',
        amount: 1200.00,
        paymentMethod: 'card',
        date: new Date('2024-12-02T10:15:00'),
    },
    {
        id: '6',
        title: 'Marketing Campaign',
        category: 'Marketing',
        amount: 2500.00,
        paymentMethod: 'card',
        date: new Date('2024-12-03T12:00:00'),
    },
    {
        id: '7',
        title: 'Rent Payment',
        category: 'Rent',
        amount: 3000.00,
        paymentMethod: 'card',
        date: new Date('2024-12-03T13:30:00'),
    },
    {
        id: '8',
        title: 'Cleaning Supplies',
        category: 'Supplies',
        amount: 250.75,
        paymentMethod: 'cash',
        date: new Date('2024-12-04T15:00:00'),
    },
    {
        id: '9',
        title: 'Internet Service',
        category: 'Utilities',
        amount: 80.00,
        paymentMethod: 'card',
        date: new Date('2024-12-04T16:20:00'),
    },
    {
        id: '10',
        title: 'Equipment Purchase',
        category: 'Equipment',
        amount: 5000.00,
        paymentMethod: 'card',
        date: new Date('2024-12-05T18:00:00'),
    },
];

export default function ExpenseTable() {
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
                            <TableCell>Title</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell>Payment Method</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {expenses.map(
                            ({ id, title, category, amount, paymentMethod, date }) => (
                                <TableRow
                                    hover
                                    key={id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {title}
                                    </TableCell>
                                    <TableCell>{category}</TableCell>
                                    <TableCell align="right">{amount.toLocaleString()}</TableCell>
                                    <TableCell>
                                        <StatusChip status={paymentMethod} />
                                    </TableCell>
                                    <TableCell>{formatDate(date)}</TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={1}>
                                            <EditExpense />
                                            <DeleteExpense handleOpen={handleOpen} />
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <DeleteModal open={open} handleClose={handleClose} />
        </>
    );
}
