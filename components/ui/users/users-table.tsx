'use client';

import Image from 'next/image';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StatusChip } from '@/components/status-chip';
import { EditUser, DeleteUser } from './buttons';
import { useState } from 'react';
import DeleteModal from './delete-modal';
import { formatDate } from '@/app/lib/utils';

type Users = {
    id: number;
    role: string;
    name: string;
    image: string | null;
    email: string;
    status: "active" | "inactive";
    createdAt: Date;
};

export const users: Users[] = [
    {
        id: 1,
        role: "General Manager",
        name: "Sarah Jenkins",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&h=250&auto=format&fit=crop",
        email: "s.jenkins@thebistro.com",
        status: "active",
        createdAt: new Date("2023-05-15"),
    },
    {
        id: 2,
        role: "Executive Chef",
        name: "Marcus Chen",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&h=250&auto=format&fit=crop",
        email: "m.chen@thebistro.com",
        status: "active",
        createdAt: new Date("2023-06-20"),
    },
    {
        id: 3,
        role: "Maitre D'",
        name: "Elena Rodriguez",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250&h=250&auto=format&fit=crop",
        email: "e.rodriguez@thebistro.com",
        status: "active",
        createdAt: new Date("2023-08-11"),
    },
    {
        id: 4,
        role: "Sous Chef",
        name: "James Wilson",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&h=250&auto=format&fit=crop",
        email: "j.wilson@thebistro.com",
        status: "active",
        createdAt: new Date("2023-09-02"),
    },
    {
        id: 5,
        role: "Sommelier",
        name: "Maya Patel",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=250&h=250&auto=format&fit=crop",
        email: "m.patel@thebistro.com",
        status: "active",
        createdAt: new Date("2023-11-22"),
    },
    {
        id: 6,
        role: "Head Bartender",
        name: "David Smith",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&h=250&auto=format&fit=crop",
        email: "d.smith@thebistro.com",
        status: "active",
        createdAt: new Date("2024-01-05"),
    },
    {
        id: 7,
        role: "Lead Server",
        name: "Sophie Varma",
        image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=250&h=250&auto=format&fit=crop",
        email: "s.varma@thebistro.com",
        status: "active",
        createdAt: new Date("2024-02-14"),
    },
    {
        id: 8,
        role: "Line Cook",
        name: "Robert Taylor",
        image: null,
        email: "r.taylor@thebistro.com",
        status: "active",
        createdAt: new Date("2024-03-10"),
    },
    {
        id: 9,
        role: "Pastry Chef",
        name: "Linda Wu",
        image: null,
        email: "l.wu@thebistro.com",
        status: "active",
        createdAt: new Date("2024-04-01"),
    },
    {
        id: 10,
        role: "Kitchen Porter",
        name: "Alex Thompson",
        image: null,
        email: "a.thompson@thebistro.com",
        status: "inactive",
        createdAt: new Date("2024-05-18"),
    }
];

export default function UsersTable() {
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
                            <TableCell>User</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Created At</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(
                            ({ id, name, image, email, role, createdAt, status }) => (
                                <TableRow
                                    hover
                                    key={id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            {image ? (
                                                <Box sx={{ position: 'relative', width: 40, height: 40, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                                                    <Image src={image} alt={name} fill sizes="30px" style={{ objectFit: 'cover' }} />
                                                </Box>
                                            ) : (
                                                <Avatar sx={{ width: 40, height: 40 }}>{name.charAt(0)}</Avatar>
                                            )}
                                            <Typography variant="body2">{name}</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        {email}
                                    </TableCell>
                                    <TableCell>
                                        {role}
                                    </TableCell>
                                    <TableCell>
                                        <StatusChip status={status} />
                                    </TableCell>
                                    <TableCell>
                                        {formatDate(createdAt)}
                                    </TableCell>
                                    <TableCell>
                                        <EditUser />
                                        <DeleteUser handleOpen={handleOpen} />
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
