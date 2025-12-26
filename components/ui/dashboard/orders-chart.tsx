import { ordersOverTime } from '@/data/dashboard/chartData';
import Card from '@mui/material/Card';
import { BarChart } from '@mui/x-charts/BarChart';

export default function OrdersChart() {
  const formattedDates = ordersOverTime.map((item) => {
    const d = new Date(item.date);
    return `${d.getMonth() + 1}/${d.getDate()}`;
  });

  const orderValues = ordersOverTime.map((item) => item.orders);

  return (
    <Card variant="outlined">
      <BarChart
        xAxis={[
          {
            scaleType: 'band',
            data: formattedDates,
          },
        ]}
        series={[
          {
            data: orderValues,
            label: 'Orders',
            color: 'teal',
          },
        ]}
        height={300}
      />
    </Card>
  );
}
