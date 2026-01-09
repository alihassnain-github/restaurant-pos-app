'use client';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { formatDate } from '@/app/lib/utils';

type StockOut = {
  id: string;
  ingredient: string;
  quantity: number;
  reason: string;
  notes: string;
  date: Date;
};

export const stockOuts: StockOut[] = [
  {
    id: 'SO-001',
    ingredient: 'Chicken Breast',
    quantity: 4.5,
    reason: 'spoilage',
    notes: 'Fridge temperature fluctuation overnight',
    date: new Date('2024-12-10T09:00:00'),
  },
  {
    id: 'SO-002',
    ingredient: 'Whole Milk',
    quantity: 2,
    reason: 'wastage',
    notes: 'Spilled during morning prep',
    date: new Date('2024-12-10T10:30:00'),
  },
  {
    id: 'SO-003',
    ingredient: 'Mozzarella Cheese',
    quantity: 1.2,
    reason: 'staff use',
    notes: 'Used for staff training/tasting session',
    date: new Date('2024-12-11T14:15:00'),
  },
  {
    id: 'SO-004',
    ingredient: 'Fresh Basil',
    quantity: 0.5,
    reason: 'spoilage',
    notes: 'Wilting and discolored leaves',
    date: new Date('2024-12-11T16:45:00'),
  },
  {
    id: 'SO-005',
    ingredient: 'Tomato Sauce',
    quantity: 5,
    reason: 'other',
    notes: 'Sample sent for laboratory quality check',
    date: new Date('2024-12-12T08:20:00'),
  },
  {
    id: 'SO-006',
    ingredient: 'Cooking Oil',
    quantity: 10,
    reason: 'theft',
    notes: 'Missing from storage after night shift',
    date: new Date('2024-12-12T11:00:00'),
  },
  {
    id: 'SO-007',
    ingredient: 'All-Purpose Flour',
    quantity: 2.5,
    reason: 'wastage',
    notes: 'Bag contaminated by water leak',
    date: new Date('2024-12-13T09:30:00'),
  },
  {
    id: 'SO-008',
    ingredient: 'Yellow Onions',
    quantity: 15,
    reason: 'spoilage',
    notes: 'Rotten batch discovered in bottom crate',
    date: new Date('2024-12-13T15:10:00'),
  },
];

export default function StockAdjustmentTable() {
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
              <TableCell align="right">Quantity</TableCell>
              <TableCell>Reason</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stockOuts.map(
              ({ id, ingredient, quantity, reason, date, notes }) => (
                <TableRow
                  hover
                  key={id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {ingredient}
                  </TableCell>
                  <TableCell align="right">{quantity}</TableCell>
                  <TableCell>{reason}</TableCell>
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
