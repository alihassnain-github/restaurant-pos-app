'use client';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { formatDate } from '@/app/lib/utils';
import { DeleteTable, EditTable } from './buttons';
import { useState } from 'react';
import DeleteModal from './delete-modal';
import { StatusChip } from '@/components/status-chip';

type Table = {
  tableId: string;
  capacity: number;
  inservice: boolean;
  status: 'available' | 'occupied';
  createdAt: Date;
};

export const tables: Table[] = [
  {
    tableId: 'M-1001',
    capacity: 2,
    inservice: true,
    status: 'available',
    createdAt: new Date('2024-12-01T10:00:00'),
  },
  {
    tableId: 'M-1002',
    capacity: 4,
    inservice: true,
    status: 'occupied',
    createdAt: new Date('2024-12-01T10:05:00'),
  },
  {
    tableId: 'M-1003',
    capacity: 6,
    inservice: true,
    status: 'available',
    createdAt: new Date('2024-12-01T11:00:00'),
  },
  {
    tableId: 'O-1004',
    capacity: 4,
    inservice: true,
    status: 'available',
    createdAt: new Date('2024-12-02T09:30:00'),
  },
  {
    tableId: 'O-1005',
    capacity: 6,
    inservice: false,
    status: 'available',
    createdAt: new Date('2024-12-02T10:15:00'),
  },
  {
    tableId: 'V-1006',
    capacity: 4,
    inservice: true,
    status: 'occupied',
    createdAt: new Date('2024-12-03T12:00:00'),
  },
  {
    tableId: 'V-1007',
    capacity: 6,
    inservice: true,
    status: 'available',
    createdAt: new Date('2024-12-03T13:30:00'),
  },
  {
    tableId: 'T-1008',
    capacity: 8,
    inservice: true,
    status: 'available',
    createdAt: new Date('2024-12-04T15:00:00'),
  },
  {
    tableId: 'T-1009',
    capacity: 4,
    inservice: true,
    status: 'occupied',
    createdAt: new Date('2024-12-04T16:20:00'),
  },
  {
    tableId: 'T-1010',
    capacity: 10,
    inservice: true,
    status: 'available',
    createdAt: new Date('2024-12-05T18:00:00'),
  },
];

export default function TablesTable() {
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
              <TableCell>Table ID</TableCell>
              <TableCell align="right">Capacity</TableCell>
              <TableCell>In Service</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tables.map(
              ({ tableId, capacity, inservice, status, createdAt }) => (
                <TableRow
                  hover
                  key={tableId}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {tableId}
                  </TableCell>
                  <TableCell align="right">{capacity}</TableCell>
                  <TableCell>
                    <Switch checked={inservice} />
                  </TableCell>
                  <TableCell>
                    <StatusChip status={status} />
                  </TableCell>
                  <TableCell>{formatDate(createdAt)}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <EditTable />
                      <DeleteTable handleOpen={handleOpen} />
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
