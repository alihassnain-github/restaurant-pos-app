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
import { EditInvoice, DeleteInvoice } from './buttons';
import DeleteModal from './delete-modal';
import { StatusChip } from '@/components/status-chip';

type Invoice = {
    id: string;
    invoiceNumber: string;
    supplier: string;
    invoiceDate: Date;
    dueDate: Date;
    totalAmount: number;
    paymentStatus: 'pending' | 'in-progress' | 'paid' | 'unpaid';
    createdAt: Date;
};

export const invoices: Invoice[] = [
    {
        id: '1',
        invoiceNumber: 'INV-001',
        supplier: 'Office Depot',
        invoiceDate: new Date('2024-12-01'),
        dueDate: new Date('2024-12-15'),
        totalAmount: 150.00,
        paymentStatus: 'paid',
        createdAt: new Date('2024-12-01T10:00:00'),
    },
    {
        id: '2',
        invoiceNumber: 'INV-002',
        supplier: 'Electric Co.',
        invoiceDate: new Date('2024-12-01'),
        dueDate: new Date('2024-12-20'),
        totalAmount: 500.00,
        paymentStatus: 'pending',
        createdAt: new Date('2024-12-01T10:05:00'),
    },
    {
        id: '3',
        invoiceNumber: 'INV-003',
        supplier: 'Fresh Foods Ltd',
        invoiceDate: new Date('2024-12-01'),
        dueDate: new Date('2024-12-10'),
        totalAmount: 800.50,
        paymentStatus: 'in-progress',
        createdAt: new Date('2024-12-01T11:00:00'),
    },
    {
        id: '4',
        invoiceNumber: 'INV-004',
        supplier: 'Tech Maintenance',
        invoiceDate: new Date('2024-12-02'),
        dueDate: new Date('2024-12-16'),
        totalAmount: 350.00,
        paymentStatus: 'unpaid',
        createdAt: new Date('2024-12-02T09:30:00'),
    },
    {
        id: '5',
        invoiceNumber: 'INV-005',
        supplier: 'Skillshare Inc.',
        invoiceDate: new Date('2024-12-02'),
        dueDate: new Date('2024-12-30'),
        totalAmount: 1200.00,
        paymentStatus: 'paid',
        createdAt: new Date('2024-12-02T10:15:00'),
    },
];

export default function InvoiceTable() {
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
                            <TableCell>Invoice #</TableCell>
                            <TableCell>Supplier</TableCell>
                            <TableCell>Invoice Date</TableCell>
                            <TableCell>Due Date</TableCell>
                            <TableCell align='right'>Total Amount</TableCell>
                            <TableCell>Payment Status</TableCell>
                            <TableCell>Created At</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {invoices.map(
                            ({ id, invoiceNumber, supplier, invoiceDate, dueDate, totalAmount, paymentStatus, createdAt }) => (
                                <TableRow
                                    hover
                                    key={id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {invoiceNumber}
                                    </TableCell>
                                    <TableCell>{supplier}</TableCell>
                                    <TableCell>{formatDate(invoiceDate)}</TableCell>
                                    <TableCell>{formatDate(dueDate)}</TableCell>
                                    <TableCell align="right">{totalAmount.toLocaleString()}</TableCell>
                                    <TableCell>
                                        <StatusChip status={paymentStatus} />
                                    </TableCell>
                                    <TableCell>{formatDate(createdAt)}</TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={1}>
                                            <EditInvoice />
                                            <DeleteInvoice handleOpen={handleOpen} />
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
