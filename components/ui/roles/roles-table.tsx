'use client';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StatusChip } from '@/components/status-chip';
import { DeleteRole, EditRole } from './buttons';
import { useState } from 'react';
import DeleteModal from './delete-modal';

type Roles = {
    id: string;
    role: string;
    description: string;
    usersCount: number;
    status: "active" | "inactive";
};

export const roles: Roles[] = [
    {
        id: '1',
        role: 'General Manager',
        description: 'Oversees daily operations, financial performance, and high-level staffing.',
        usersCount: 2,
        status: 'active',
    },
    {
        id: '2',
        role: 'Executive Chef',
        description: 'In charge of menu creation, kitchen management, and food quality standards.',
        usersCount: 1,
        status: 'active',
    },
    {
        id: '3',
        role: 'Sous Chef',
        description: 'Assistant to the Executive Chef; manages line cooks and food preparation.',
        usersCount: 3,
        status: 'active',
    },
    {
        id: '4',
        role: 'Server',
        description: 'Handles guest orders, table service, and ensures an excellent dining experience.',
        usersCount: 12,
        status: 'active',
    },
    {
        id: '5',
        role: 'Bartender',
        description: 'Prepares alcoholic and non-alcoholic beverages and manages bar-side seating.',
        usersCount: 4,
        status: 'active',
    },
    {
        id: '6',
        role: 'Host/Hostess',
        description: 'Greets guests, manages the floor plan, and coordinates reservations.',
        usersCount: 3,
        status: 'active',
    },
    {
        id: '7',
        role: 'Pastry Chef',
        description: 'Specializes in desserts, breads, and baked goods. Currently on seasonal leave.',
        usersCount: 0,
        status: 'inactive',
    },
    {
        id: '8',
        role: 'Sommelier',
        description: 'Wine expert responsible for the wine list and assisting guests with pairings.',
        usersCount: 1,
        status: 'active',
    },
];

export default function RolesTable() {
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
                            <TableCell>Role Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell align="right">Users Count</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {roles.map(
                            ({ id, role, description, usersCount, status }) => (
                                <TableRow
                                    hover
                                    key={id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {role}
                                    </TableCell>
                                    <TableCell>{description}</TableCell>
                                    <TableCell align="right">{usersCount.toString().padStart(2, "0")}</TableCell>
                                    <TableCell>
                                        <StatusChip status={status} />
                                    </TableCell>
                                    <TableCell>
                                        <EditRole />
                                        <DeleteRole handleOpen={handleOpen} />
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
