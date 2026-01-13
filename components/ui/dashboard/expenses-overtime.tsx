const expenseData = [3200, 2800, 4100, 1500, 2600, 3900, 2100];
const xLabels = [
    '01-02',
    '01-03',
    '01-04',
    '01-05',
    '01-06',
    '01-07',
    '01-08',
];

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';

export default function ExpenseOvertimeChart() {
    return (
        <Card variant="outlined">
            <Typography
                variant="caption"
                color="textPrimary"
                align="center"
                paddingTop={0.4}
                display="block"
            >
                Expense Overtime
            </Typography>

            <LineChart
                height={350}
                series={[{ data: expenseData, area: true, showMark: false }]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
                sx={{
                    [`& .${lineElementClasses.root}`]: {
                        display: 'none',
                    },
                }}
            />
        </Card>
    );
}
