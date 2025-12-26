'use client';

import { dashboardStats } from '@/data/dashboard/stats';
import {
  Insights,
  MoneyOff,
  ReceiptLong,
  TrendingUp,
  ArrowUpward,
  ArrowDownward,
} from '@mui/icons-material';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { calculatePercentageChange } from '@/app/lib/utils';

const iconMap = {
  revenue: TrendingUp,
  orders: ReceiptLong,
  expenses: MoneyOff,
  profit: Insights,
};

interface CardProps {
  title: string;
  value: number | string;
  type: 'revenue' | 'orders' | 'expenses' | 'profit';
  yesterdayValue: number;
}

export default function CardWrapper() {
  const {
    totalRevenueToday,
    yesterdayRevenue,
    totalExpensesToday,
    yesterdayExpenses,
    totalOrdersToday,
    yesterdayOrders,
  } = dashboardStats;

  const totalProfitToday = totalRevenueToday - totalExpensesToday;
  const yesterdayProfit = yesterdayRevenue - yesterdayExpenses;

  return (
    <>
      <Card
        title="Total Revenue"
        type="revenue"
        value={totalRevenueToday}
        yesterdayValue={yesterdayRevenue}
      />
      <Card
        title="Total Orders"
        type="orders"
        value={totalOrdersToday}
        yesterdayValue={yesterdayOrders}
      />
      <Card
        title="Total Expenses"
        type="expenses"
        value={totalExpensesToday}
        yesterdayValue={yesterdayExpenses}
      />
      <Card
        title="Net Profit"
        type="profit"
        value={totalProfitToday}
        yesterdayValue={yesterdayProfit}
      />
    </>
  );
}

export function Card({ title, type, value, yesterdayValue }: CardProps) {
  const Icon = iconMap[type];
  const currentValue =
    typeof value === 'number' ? value : parseFloat(value.toString());
  const percentageChange = calculatePercentageChange(
    currentValue,
    yesterdayValue
  );
  const isPositive = percentageChange >= 0;
  const ArrowIcon = isPositive ? ArrowUpward : ArrowDownward;

  return (
    <MuiCard variant="outlined">
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            mb: 2,
          }}
        >
          <Box
            bgcolor="action.hover"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              borderRadius: 2,
            }}
          >
            <Icon fontSize="small" />
          </Box>
          <Typography
            variant="inherit"
            sx={{
              fontWeight: 500,
              fontSize: '0.875rem',
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 0.5,
          }}
        >
          <Typography variant="h5" component="h5">
            {currentValue.toLocaleString()}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            <ArrowIcon
              color={isPositive ? 'success' : 'error'}
              sx={{
                fontSize: 16,
              }}
            />
            <Typography
              variant="body2"
              fontSize={14}
              color={isPositive ? 'success' : 'error'}
            >
              {isPositive ? '+' : ''}
              {percentageChange.toFixed(2)}%
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </MuiCard>
  );
}
