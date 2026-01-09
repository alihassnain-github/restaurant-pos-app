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
    currnetStock: number;
    unit: string;
    minStock: number;
    status: 'ok' | 'low' | 'out';
    lastUpdated: Date;
};

export const items: Item[] = [
    {
        id: '1',
        ingredient: 'All-Purpose Flour',
        currnetStock: 50,
        unit: 'kg',
        minStock: 10,
        status: 'ok',
        lastUpdated: new Date('2023-10-25T08:30:00'),
    },
    {
        id: '2',
        ingredient: 'Whole Milk',
        currnetStock: 5,
        unit: 'Liters',
        minStock: 10,
        status: 'low',
        lastUpdated: new Date('2023-10-26T09:15:00'),
    },
    {
        id: '3',
        ingredient: 'Unsalted Butter',
        currnetStock: 0,
        unit: 'kg',
        minStock: 5,
        status: 'out',
        lastUpdated: new Date('2023-10-26T10:00:00'),
    },
    {
        id: '4',
        ingredient: 'Granulated Sugar',
        currnetStock: 25,
        unit: 'kg',
        minStock: 5,
        status: 'ok',
        lastUpdated: new Date('2023-10-24T14:20:00'),
    },
    {
        id: '5',
        ingredient: 'Large Eggs',
        currnetStock: 120,
        unit: 'pcs',
        minStock: 30,
        status: 'ok',
        lastUpdated: new Date('2023-10-27T07:45:00'),
    },
    {
        id: '6',
        ingredient: 'Heavy Cream',
        currnetStock: 2,
        unit: 'Liters',
        minStock: 4,
        status: 'low',
        lastUpdated: new Date('2023-10-27T11:30:00'),
    },
    {
        id: '7',
        ingredient: 'Sea Salt',
        currnetStock: 10,
        unit: 'kg',
        minStock: 2,
        status: 'ok',
        lastUpdated: new Date('2023-10-20T16:00:00'),
    },
    {
        id: '8',
        ingredient: 'Vanilla Extract',
        currnetStock: 500,
        unit: 'ml',
        minStock: 100,
        status: 'ok',
        lastUpdated: new Date('2023-10-22T13:10:00'),
    },
    {
        id: '9',
        ingredient: 'Yeast',
        currnetStock: 0.2,
        unit: 'kg',
        minStock: 0.5,
        status: 'low',
        lastUpdated: new Date('2023-10-27T15:20:00'),
    },
    {
        id: '10',
        ingredient: 'Cocoa Powder',
        currnetStock: 0,
        unit: 'kg',
        minStock: 2,
        status: 'out',
        lastUpdated: new Date('2023-10-27T16:45:00'),
    },
];

export default function InventoryTable() {

    return (
        <Card variant="outlined" sx={{ p: 1 }}>
            <CardHeader
                title={
                    <Typography variant="h6" component="h6">
                        Inventory Overview
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
                                <TableCell>Ingredient Name</TableCell>
                                <TableCell align="right">Current Stock</TableCell>
                                <TableCell>Unit</TableCell>
                                <TableCell align="right">Min Stock</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Last Updated</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map(
                                ({ id, ingredient, currnetStock, minStock, unit, lastUpdated, status }) => (
                                    <TableRow
                                        hover
                                        key={id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {ingredient}
                                        </TableCell>
                                        <TableCell align="right">{currnetStock}</TableCell>
                                        <TableCell>{unit}</TableCell>
                                        <TableCell align="right">{minStock}</TableCell>
                                        <TableCell>
                                            <StatusChip status={status} />
                                        </TableCell>
                                        <TableCell>{formatDate(lastUpdated)}</TableCell>
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
