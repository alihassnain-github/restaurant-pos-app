import { revenueOverTime } from "@/data/dashboard/chartData";
import Card from "@mui/material/Card";
import { BarChart } from "@mui/x-charts/BarChart";

export default function RevenueChart() {

    const formattedDates = revenueOverTime.map((item) => {
        const d = new Date(item.date);
        return `${d.getMonth() + 1}/${d.getDate()}`;
    });

    const revenueValues = revenueOverTime.map((item) => item.revenue);

    return (
        <Card variant="outlined" sx={{ mb: 2 }}>
            <BarChart
                xAxis={[
                    {
                        scaleType: "band",
                        data: formattedDates,
                    },
                ]}
                series={[
                    {
                        data: revenueValues,
                        label: "Revenue",
                        color: "#1976d2",
                    },
                ]}
                height={300}
            />
        </Card>
    )
}