'use client';

import {
  Inventory2Outlined,
  WarningAmber,
  ProductionQuantityLimits,
} from '@mui/icons-material';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const iconMap = {
  total: Inventory2Outlined,
  lowStock: WarningAmber,
  stockOut: ProductionQuantityLimits,
};

interface CardProps {
  title: string;
  value: number | string;
  type: 'total' | 'lowStock' | 'stockOut';
  message: string;
}

export default function CardWrapper() {
  return (
    <>
      <Card
        title="Total Ingredients"
        type="total"
        value={120}
        message="Active Items"
      />
      <Card
        title="Low Stock Items"
        type="lowStock"
        value={15}
        message="Below Threshold"
      />
      <Card
        title="Out of Stock"
        type="stockOut"
        value={'03'}
        message="Needs Reordering"
      />
    </>
  );
}

export function Card({ title, type, value, message }: CardProps) {
  const Icon = iconMap[type];

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
            {value}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            <Typography variant="body2" fontSize={14}>
              {message}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </MuiCard>
  );
}
