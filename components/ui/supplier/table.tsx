'use client';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { EditSupplier, DeleteSupplier } from './buttons';
import { useState } from 'react';
import DeleteModal from './delete-modal';
import { formatDate } from '@/app/lib/utils';

type Supplier = {
    id: string;
    name: string;
    contactPerson: string;
    email: string;
    phoneNumber: string;
    createdAt: Date;
};

export const suppliers: Supplier[] = [
    {
        id: '1',
        name: 'Fresh Farms Produce',
        contactPerson: 'John Martinez',
        email: 'john@freshfarms.com',
        phoneNumber: '+1-555-0101',
        createdAt: new Date('2023-05-15'),
    },
    {
        id: '2',
        name: 'Prime Meats Co.',
        contactPerson: 'Sarah Johnson',
        email: 'sarah@primemeats.com',
        phoneNumber: '+1-555-0102',
        createdAt: new Date('2023-06-20'),
    },
    {
        id: '3',
        name: 'Ocean Fresh Seafood',
        contactPerson: 'Mike Chen',
        email: 'mike@oceanfresh.com',
        phoneNumber: '+1-555-0103',
        createdAt: new Date('2023-07-10'),
    },
    {
        id: '4',
        name: 'Artisan Bakery Supply',
        contactPerson: 'Elena Rodriguez',
        email: 'elena@artisanbakery.com',
        phoneNumber: '+1-555-0104',
        createdAt: new Date('2023-08-05'),
    },
    {
        id: '5',
        name: 'Global Spice Imports',
        contactPerson: 'Raj Patel',
        email: 'raj@globalspice.com',
        phoneNumber: '+1-555-0105',
        createdAt: new Date('2023-09-12'),
    },
    {
        id: '6',
        name: 'Dairy Direct',
        contactPerson: 'Lisa Thompson',
        email: 'lisa@dairydirect.com',
        phoneNumber: '+1-555-0106',
        createdAt: new Date('2023-10-01'),
    },
    {
        id: '7',
        name: 'Organic Vegetables LLC',
        contactPerson: 'David Smith',
        email: 'david@organicveg.com',
        phoneNumber: '+1-555-0107',
        createdAt: new Date('2023-11-08'),
    },
    {
        id: '8',
        name: 'Premium Beverages',
        contactPerson: 'Angela White',
        email: 'angela@premiumbev.com',
        phoneNumber: '+1-555-0108',
        createdAt: new Date('2024-01-15'),
    },
];

export default function SupplierTable() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <TableContainer component={Paper}>
                <Table
                    stickyHeader
                    sx={{ textWrap: 'nowrap' }}
                >
                    <TableHead sx={{ backgroundColor: 'action.selected' }}>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Contact Person</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Created At</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {suppliers.map(
                            ({ id, name, contactPerson, email, phoneNumber, createdAt }) => (
                                <TableRow
                                    hover
                                    key={id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {name}
                                    </TableCell>
                                    <TableCell>{contactPerson}</TableCell>
                                    <TableCell>{email}</TableCell>
                                    <TableCell>{phoneNumber}</TableCell>
                                    <TableCell>{formatDate(createdAt)}</TableCell>
                                    <TableCell>
                                        <EditSupplier />
                                        <DeleteSupplier handleOpen={handleOpen} />
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
