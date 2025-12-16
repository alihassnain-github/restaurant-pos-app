import { expenseBreakdown } from "@/data/dashboard/chartData";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { PieChart } from "@mui/x-charts/PieChart";

export default function ExpenseChart() {
  return (
    <Card variant="outlined">
      <Typography
        variant="caption"
        color="textPrimary"
        align="center"
        paddingTop={0.4}
        display="block"
      >
        Expense Breakdown
      </Typography>

      <PieChart
        series={[
          {
            data: expenseBreakdown.map((item, index) => ({
              id: index,
              value: item.amount,
              label: item.category,
            })),
            innerRadius: 50,
            outerRadius: 100,
            paddingAngle: 1,
          },
        ]}
        slotProps={{
          legend: {
            sx: { pb: 1 },
            direction: "horizontal",
            position: { vertical: "bottom", horizontal: "center" },
          },
        }}
        height={250}
      />
    </Card>
  );
}
