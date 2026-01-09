import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Typography from '@mui/material/Typography';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { formatDate } from '@/app/lib/utils';
import { StatusChip } from '@/components/status-chip';

type Item = {
    id: string;
    ingredient: string;
    action: 'in' | 'out';
    quantity: number;
    reason: string;
    date: Date;
};

export const items: Item[] = [
    { id: 'ACT-001', ingredient: 'All-Purpose Flour', action: 'in', quantity: 50, reason: 'Monthly Restock', date: new Date('2024-12-25T10:00:00') },
    { id: 'ACT-002', ingredient: 'Whole Milk', action: 'out', quantity: 5, reason: 'Baking Batch #42', date: new Date('2024-12-25T11:30:00') },
    { id: 'ACT-003', ingredient: 'Tomato Sauce', action: 'out', quantity: 10, reason: 'Dinner Service', date: new Date('2024-12-25T14:15:00') },
    { id: 'ACT-004', ingredient: 'Mozzarella Cheese', action: 'in', quantity: 20, reason: 'Supplier Delivery', date: new Date('2024-12-26T09:00:00') },
    { id: 'ACT-005', ingredient: 'Chicken Breast', action: 'out', quantity: 15, reason: 'Kitchen Usage', date: new Date('2024-12-26T10:45:00') },
    { id: 'ACT-006', ingredient: 'Cooking Oil', action: 'in', quantity: 10, reason: 'Emergency Purchase', date: new Date('2024-12-26T12:00:00') },
    { id: 'ACT-007', ingredient: 'Fresh Basil', action: 'out', quantity: 2, reason: 'Garnish/Waste', date: new Date('2024-12-27T08:30:00') },
    { id: 'ACT-008', ingredient: 'Yellow Onions', action: 'out', quantity: 5, reason: 'Prep Work', date: new Date('2024-12-27T09:15:00') },
];

export default function RecentActivityTable() {

    return (
        <Card variant="outlined" sx={{ p: 1 }}>
            <CardHeader
                title={
                    <Typography variant="h6" component="h6">
                        Recent Activity
                    </Typography>
                }
            />
            <CardContent sx={{ pt: 0 }}>
                <TableContainer component={Paper}>
                    <Table
                        stickyHeader
                        aria-label="recent activity table"
                        sx={{ textWrap: 'nowrap' }}
                    >
                        <TableHead sx={{ backgroundColor: 'action.selected' }}>
                            <TableRow>
                                <TableCell>Ingredient</TableCell>
                                <TableCell>Action</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell>Reason</TableCell>
                                <TableCell>Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map(
                                ({ id, ingredient, action, date, quantity, reason }) => (
                                    <TableRow
                                        hover
                                        key={id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {ingredient}
                                        </TableCell>
                                        <TableCell>
                                            <StatusChip status={action} />
                                        </TableCell>
                                        <TableCell align="right">{quantity}</TableCell>
                                        <TableCell>{reason}</TableCell>
                                        <TableCell>{formatDate(date)}</TableCell>
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
